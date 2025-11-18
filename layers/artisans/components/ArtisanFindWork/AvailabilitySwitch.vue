<script setup lang="ts">
const isAvailable = ref(true);

const toggleAvailability = () => {
  isAvailable.value = !isAvailable.value;
};
</script>
<template>
  <div
    class="rounded-[16px] border border-[#E4E5EC] bg-[#FCFCFC] p-4 md:p-8 flex items-center gap-4"
  >
    <div class="w-full">
      <h3 class="text-black text-[22px] font-medium mb-4">
        Available to work
        <sup>
          <Icon
            name="surehelp:info-circle"
            size="16px"
            class="text-[#686868]"
          />
        </sup>
      </h3>
      <p class="text-[#686868] font-[16px]">
        Update your availability status so clients know you’re looking for work.
      </p>
    </div>

    <div class="w-auto inline-block shrink-0">
      <!-- switch -->
      <button
        type="button"
        role="switch"
        :aria-checked="isAvailable"
        @click="toggleAvailability"
        class="relative inline-flex h-[52px] w-[94px] items-center rounded-full border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2275E6]"
        :class="
          isAvailable
            ? 'bg-[#C8DFFF] border-[#C8DFFF]'
            : 'bg-[#EDEFF2] border-[#D7D9E0]'
        "
      >
        <span class="sr-only">Toggle availability</span>
        <span
          class="inline-block h-9 w-9 transform rounded-full shadow transition-all duration-200"
          :class="{
            'translate-x-12 bg-primary-500': isAvailable,
            'translate-x-2 bg-white': !isAvailable,
          }"
        ></span>
      </button>
      <!-- switch end-->
    </div>
  </div>
</template>
