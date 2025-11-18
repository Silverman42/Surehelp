<script setup lang="ts">
import { NuxtPage } from "#components";

definePageMeta({
  layout: "artisan-dashboard",
});
</script>
<template>
  <div
    class="flex flex-col gap-10 min-h-screen w-full items-center pb-[50px] md:pb-[128px]"
  >
    <NuxtPage />
  </div>
</template>
