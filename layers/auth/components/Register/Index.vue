<script setup lang="ts">
import { set } from "@vueuse/core";

const selectedUserType = ref(UserTypes.CUSTOMERS);

const { setUserType } = useRegisterationStore();

const userTypes = [
  {
    id: UserTypes.CUSTOMERS,
    label: "I’m a client, looking forward to hiring a professional.",
    icon: "/img/customers-icon.svg",
  },
  {
    id: UserTypes.ARTISANS,
    label: "I’m a professional artisan, looking for a client.",
    icon: "/img/artisan-icon.svg",
  },
];
const { setRouteActivity } = useRegisterationStep();

const selectUserType = () => {
  setUserType(selectedUserType.value);
  setRouteActivity(RegisterRouteNames.SUBMIT_DATA, true);
};
</script>
<template>
  <!-- body -->
  <div
    class="max-w-[1551px] mx-auto w-full flex flex-col items-center justify-center min-h-[80vh]"
  >
    <!-- heading -->
    <div class="flex flex-col items-center gap-y-6 w-full">
      <ul
        class="flex text-[11px] uppercase items-center gap-x-2 py-2 px-4 rounded-full bg-primary-50 border border-primary-100 text-primary-500"
      >
        <li class="w-[22px] block">
          <img src="/img/solar_star-fall-linear.svg" class="w-full" alt="" />
        </li>
        <li>WE ARE GLAD TO HAVE YOU HERE</li>
      </ul>

      <h1
        class="text-center text-2xl md:text-[45px] text-black tracking-tighter"
      >
        How do you intend to use SureHelp?
      </h1>
    </div>
    <!-- heading end -->

    <div class="max-w-[770px] my-12 grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <label
        :for="user.id"
        tabindex="0"
        v-for="(user, index) in userTypes"
        class="block relative group rounded-[24px] p-8 cursor-pointer"
      >
        <input
          type="radio"
          name="user-type"
          :id="user.id"
          v-model="selectedUserType"
          :value="user.id"
          class="sr-only peer"
        />
        <span
          class="absolute inline-flex items-center justify-center right-5 top-5 rounded-full w-auto border border-gray-200 text-gray-200 p-0.5 peer-checked:border-primary-500 peer-checked:text-primary-500"
        >
          <icon name="surehelp:tick-circle" size="24px"></icon>
        </span>
        <div
          class="rounded-[24px] border border-primary-100 group-hover:border-primary-500 peer-checked:border-primary-500 transition-all duration-300 absolute top-0 left-0 w-full h-full"
        ></div>
        <img :src="user.icon" alt="" class="w-[44px]" />
        <p class="text-black text-lg md:text-[20px] mt-6">
          {{ user.label }}
        </p>
      </label>
    </div>

    <div class="max-w-[329px] w-full">
      <AppButton @click="selectUserType"> Register as a Professional</AppButton>
    </div>

    <p class="text-center text-sm md:text-base text-[#686868] mt-8">
      Already registered ?
      <nuxt-link
        to="/auth/login"
        class="underline text-primary-500 hover:text-primary-600"
        >Login</nuxt-link
      >
    </p>
  </div>
  <!-- body end-->
</template>
