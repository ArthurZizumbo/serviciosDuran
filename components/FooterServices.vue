<template>
  <div class="border-t-[0.5px] mt-auto bg-white dark:bg-inherit">
    <div class="p-[0.5rem] w-full flex lg:flex-row md:flex-row flex-col justify-between items-center">
      <!-- Part-One -->
      <div class="ml-2 flex items-center gap-2">
        <!-- Logo -->
        <div>
          <img
            class="w-[150px]"
            src="../assets/img/footerComponent/logo_DCE.png"
            alt=""
          >
        </div>
      </div>
      <!-- Part-Two -->
      <div class="flex flex-col items-center gap-[2px] text-[12px] lg:pb-0 md:pb-0 pb-3">
        <div class="font-semibold">
          <p>Zizu Footer</p>
        </div>
      </div>
      <!-- Part-Three -->
      <div class="flex flex-col items-center gap-[2px] text-[12px] mr-2">
        <div class=" flex items-center justify-center gap-1">
          <div>
            <img
              class="w-[15px]"
              src="../assets/img/footerComponent/logoBandera.png"
              alt=""
            >
          </div>
          <div class="copyright">
            &copy; {{ new Date().getFullYear() }} - Todos los derechos reservados.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
