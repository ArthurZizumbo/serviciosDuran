<template>
  <div>
    <div class="flex flex-col min-h-[100vh] bg-[#f4f6f9] dark:bg-inherit">
      <NavBarServices />
      <SidebarServices />
      <slot />
      <FooterServices />
    </div>
  </div>
</template>
