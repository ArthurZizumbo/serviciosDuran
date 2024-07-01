<template>
  <UTabs
    :items="items"
    class="w-full"
  >
    <template #item="{ item }">
      <UTabs
        :label="item.label"
        :icon="item.icon"
      /> 
    </template>

    <template #tab1>
      <AgendarCalendario />
    </template>
    <template #tab2>
      <p>Contenido para la pestaña 2</p>
    </template>
    <template #tab3>
      <p>Contenido para la pestaña 3</p>
    </template>
  </UTabs>
</template>

<script setup lang="ts">
const items = [{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  content: 'This is the content shown for Tab1'
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  content: 'And, this is the content for Tab2'
}, {
  label: 'Theming',
  icon: 'i-heroicons-eye-dropper',
  content: 'Finally, this is the content for Tab3'
}];
</script>
