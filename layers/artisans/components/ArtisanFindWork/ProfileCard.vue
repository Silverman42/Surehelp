<script setup lang="ts">
const { getPlaceholderImg } = useMainConfig();
</script>
<template>
  <div
    class="rounded-[16px] border border-[#E4E5EC] bg-[#FCFCFC] p-4 md:p-8 flex flex-col gap-8 items-start"
  >
    <div class="flex items-center gap-4 w-full">
      <img
        :src="getPlaceholderImg('Peremobowei Agiddi')"
        class="w-[56px] h-[56px] rounded-full object-center object-cover"
        alt="profile images"
      />
      <div class="flex flex-col gap-1">
        <h3 class="text-black text-[22px] font-medium">Peremobowei Agiddi</h3>
        <p class="text-[#686868] text-[13px]">No service listed yet</p>
      </div>
    </div>

    <div class="flex flex-col w-full gap-4 items-start">
      <!-- Profile strength -->
      <div class="flex flex-col gap-2 w-full">
        <span class="text-[#686868] text-[13px]">Profile Completion: 10%</span>
        <div class="flex justify-between gap-1">
          <div v-for="bar in 35" class="bg-[#00CA81] h-[28px] w-1"></div>
        </div>
      </div>
      <!-- Profile strength end-->

      <button
        class="inline-flex cursor-pointer items-center gap-2 bg-[#F0F6FF] text-[#2275E6] hover:bg-primary-700 hover:text-white py-2 px-3 rounded-full text-[13px]"
      >
        Complete Profile
        <Icon name="surehelp:arrow-right" size="10px" class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>
