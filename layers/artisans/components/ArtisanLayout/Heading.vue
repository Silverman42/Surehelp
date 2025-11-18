<script setup lang="ts">
const links = [
  { label: "Find Work", href: "/artisans" },
  { label: "Deliver Work", href: "/" },
  { label: "Applications", href: "/" },
  { label: "Messages", href: "/" },
];
</script>
<template>
  <header class="pt-5 pb-5 md:pt-16 md:pb-8">
    <div class="max-w-[1368px] mx-auto w-full flex justify-between">
      <!-- right -->
      <div class="flex items-center gap-x-10">
        <span class="w-[90px] rounded-[8px] bg-primary-100 block py-6"></span>
        <!-- links -->
        <ul class="md:flex items-center hidden gap-x-4">
          <template v-for="link in links" :key="link.label">
            <li>
              <nuxt-link
                :to="link.href"
                active-class="text-primary-500"
                class="text-[#161616] hover:text-primary-500 text-base"
              >
                {{ link.label }}
              </nuxt-link>
            </li>
            <li class="border-r border-primary-100 h-[22px] last:hidden"></li>
          </template>
        </ul>
        <!-- links end -->
      </div>
      <!-- right end -->

      <!-- left -->
      <div class="flex items-center gap-x-4">
        <span class=""></span>
      </div>
      <!-- left end -->
    </div>
  </header>
</template>
