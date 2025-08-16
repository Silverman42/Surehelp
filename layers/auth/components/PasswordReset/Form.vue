<script setup lang="ts">
import { AppInputContainer } from "#components";

const changePassword = () => {
  navigateTo("/auth/login");
};
</script>
<template>
  <form
    @submit.prevent="changePassword"
    class="max-w-[500px] mx-auto w-full flex flex-col gap-y-[36px] items-center justify-center min-h-[80vh]"
  >
    <img src="/img/heading-icon.svg" class="w-[84px]" alt="" />
    <div>
      <h1
        class="text-center text-2xl md:text-[45px] text-black tracking-tighter"
      >
        Reset Password
      </h1>

      <p class="md:text-[20px] text-center text-neutral-700 mt-4">
        Create a new password. Ensure it is something you can remember.
      </p>
    </div>

    <div class="w-full max-w-[500px] grid grid-cols-1 gap-6">
      <AppInputContainer label="New Password" is-password>
        <template #default="{ passwordIsVisible }">
          <input
            :type="passwordIsVisible ? 'text' : 'password'"
            name=""
            placeholder="Enter password"
            id=""
          />
        </template>
      </AppInputContainer>

      <AppInputContainer label="Confirm New Password" is-password>
        <template #default="{ passwordIsVisible }">
          <input
            :type="passwordIsVisible ? 'text' : 'password'"
            name=""
            placeholder="Enter password"
            id=""
          />
        </template>
      </AppInputContainer>
    </div>

    <div class="w-full max-w-[268px]">
      <AppButton> Reset </AppButton>
    </div>
  </form>
</template>
