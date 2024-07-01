<template>
  <div>
    <UContainer>
      <UButton
        label="Show toast"
        @click="ejemploNotificacion"
      />
      <VCalendar
        expanded
        :rows="2"
        :columns="2"
        :attributes="attributes"
        @dayclick="addEventDay"
      >
        <template #footer>
          <div class="w-1/3 px-4 pb-3">
            <button
              class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold w-full px-3 py-1 rounded-md"
              @click="addNewEvent"
            >
              Agregar evento
            </button>
            <button
              class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold w-full px-3 py-1 rounded-md"
              @click="removeEvent"
            >
              Quitar Evento
            </button>
          </div>
        </template>
      </VCalendar>
    </UContainer>
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import 'v-calendar/style.css';

const toast = useToast();

const ejemploNotificacion = () => {
  toast.add({ icon: 'i-heroicons-check-circle', title: 'Proyecto Base', description: 'Inicia proyecto', timeout: 2000 });
};

const todos = ref([
  {
    description: 'Llevar a Noah a la práctica de baloncesto.',
    isComplete: false,
    dates: { repeat: { weekdays: 5 } }, // Todos los viernes
    color: 'blue',
    content: 'Evento 3'
  },
]);

const dateSelectedCalendar = ref ();
const attributes = computed(() => [
  // Atributos para los todos
  ...todos.value.map(todo => ({
    dates: todo.dates,
    bar: {
      color: todo.color,
      ...(todo.isComplete && { class: 'opacity-75' }),
    },
    popover: {
      label: todo.description,
      visibility: 'focus' // Cambiado a 'focus' para que aparezcan como tarjetas
    }
  })),
]);

const addEventDay = (day: object) => {
  console.log(day);
  dateSelectedCalendar.value = day;
};

const addNewEvent = () => {
  console.log(dateSelectedCalendar.value);
};

const removeEvent = () => {
  console.log(dateSelectedCalendar.value);
};
</script>
