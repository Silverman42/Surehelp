<script setup lang="ts">
import { AppInputContainer } from "#components";

const { setRouteActivity } = usePasswordResetStep();

const sendRecoveryMail = () => {
  setRouteActivity(PasswordResetRouteNames.VERIFY_EMAIL);
};
</script>
<template>
  <form
    @submit.prevent="sendRecoveryMail"
    class="max-w-[690px] mx-auto w-full flex flex-col gap-y-[36px] items-center justify-center min-h-[80vh]"
  >
    <img src="/img/heading-icon.svg" class="w-[84px]" alt="" />
    <div>
      <h1
        class="text-center text-2xl md:text-[45px] text-black tracking-tighter"
      >
        Reset Password
      </h1>

      <p class="md:text-[20px] text-center text-neutral-700 mt-4">
        Enter the email address you registered with on Surehelp.
      </p>
    </div>

    <div class="w-full max-w-[500px]">
      <AppInputContainer label="Email Address">
        <input type="email" placeholder="Enter email address" />
      </AppInputContainer>
    </div>

    <div class="w-full max-w-[268px]">
      <AppButton> Submit </AppButton>
    </div>
  </form>
</template>
