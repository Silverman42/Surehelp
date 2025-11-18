<script lang="ts" setup>
const toDos = [
  {
    title: "Update Basic Details",
    description:
      "Help clients get to know you better and increase your chances of getting hired",
    percentage: 20,
  },
  {
    title: "Complete your KYC",
    description: "Verify your identity to unlock full access to our services",
    percentage: 0,
  },
  {
    title: "Setup Payment",
    description: "Get fully verified and eligible to receive payments",
    percentage: 0,
  },
];
</script>
<template>
  <!-- To do container -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-[11.5px]">
    <ul
      v-for="(todo, index) in toDos"
      class="flex flex-col gap-6 p-4 border border-[#EAEBF0] bg-[#FCFCFC] rounded-[16px]"
    >
      <li class="flex justify-between items-center">
        <span class="text-[#686868] text-[11px]"
          >{{ index + 1 }} of {{ toDos.length }}</span
        >
        <span
          class="text-[#2275E6] text-[9px] inline-block p-2 rounded-full bg-[#F0F6FF]"
        >
          {{
            todo.percentage > 0 ? `${todo.percentage}% Complete` : `Not Started`
          }}</span
        >
      </li>
      <li class="flex w-full flex-col gap-3">
        <h3 class="text-[#161616] text-[16px] font-semibold">
          {{ todo.title }}
        </h3>
        <p class="text-[#686868] text-[14px]">
          {{ todo.description }}
        </p>
      </li>
    </ul>
  </div>
  <!-- To do container -->
</template>
