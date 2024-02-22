<template>
  <nav class="navbar">
    <div class="logo">
      <NuxtLink to="/">
        <img
          src="logo.png"
          alt="Logo"
        >
      </NuxtLink>
    </div>

    <div class="user-info">
      <span>arthur.zizumbo</span>
      <UIcon
        name="i-mdi-logout"
        dynamic
        @click="logout"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
// import { ref } from 'vue';

// const user = ref(null);

const logout = () => {
  // Implementar la lógica para cerrar la sesión
  console.log('Salir ??');
};
</script>

<style>
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  height: 60px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.logo {
  margin-right: auto;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info span {
  margin-right: 10px;
}

.icon {
  font-size: 20px;
  cursor: pointer;
}
</style>
