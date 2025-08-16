<template>
  <div class="py-5 px-5 font-body">
    <div class="max-w-[1551px] mx-auto w-full flex justify-between">
      <span class="w-[90px] rounded-[8px] bg-primary-100 block py-6"> </span>

      <slot name="cta"></slot>
    </div>

    <div class="w-full relative">
      <slot></slot>
    </div>
  </div>
</template>
