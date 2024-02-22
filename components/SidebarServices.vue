<template>
  <div class="sidebar">
    <ul>
      <li
        v-for="item in menuItems"
        :key="item.label"
      >
        <NuxtLink :to="item.to">
          <UIcon
            :name="item.name"
            dynamic
          />
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>

const menuItems = [
  {
    label: 'Inicio',
    name: 'i-ic-sharp-house',
    to: '/serviciosHome'
  },
  {
    label: 'En Cotización',
    name: 'i-ic-round-shopping-cart-checkout',
    to: '/serviciosMenu/cotizacion'
  },
  {
    label: 'Agendar',
    name: 'i-ic-baseline-calendar-month',
    to: '/serviciosMenu/agendado'
  },
  {
    label: 'Facturado',
    name: 'i-ic-sharp-document-scanner',
    to: '/serviciosMenu/facturado'
  },
  {
    label: 'Pagado',
    name: 'i-ic-sharp-paid',
    to: '/serviciosMenu/pagado'
  }
];
</script>

<style>
.sidebar {
  background-color: #fff;
  border-right: 1px solid #ddd;
  height: 100vh;
  width: 200px;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}

li:hover {
  background-color: #f7f7f7;
}

a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

.icon {
  margin-right: 10px;
  font-size: 20px;
}
</style>
