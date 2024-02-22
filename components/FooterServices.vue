<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="copyright">
        &copy; {{ new Date().getFullYear() }} - Todos los derechos reservados.
      </div>

      <div class="links" />
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: #f7f7f7;
  padding: 20px;
  text-align: center;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.copyright {
  margin-bottom: 10px;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.links a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}
</style>
