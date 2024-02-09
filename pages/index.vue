<template>
  <div>
    <UContainer>
      <UButton
        label="Show toast"
        @click="ejemploNotificacion"
      />
      <NuxtWelcome />
    </UContainer>

    <UNotifications />
  </div>
</template>
<script setup lang="ts">
const toast = useToast();
const ejemploNotificacion = () => {
  toast.add({ icon: 'i-heroicons-check-circle', title: 'Proyecto Base', description: 'Inicia proyecto', timeout: 2000 });
};
</script>
