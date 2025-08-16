<script setup lang="ts">
const pinDigits = ref(6);

const { setRouteActivity } = usePasswordResetStep();

const verifyOTP = () => {
  setRouteActivity(PasswordResetRouteNames.CHANGE_PASSWORD);
};
</script>
<template>
  <div
    class="max-w-[690px] mx-auto w-full flex flex-col gap-y-[36px] items-center justify-center min-h-[80vh]"
  >
    <img src="/img/heading-icon.svg" class="w-[84px]" alt="" />
    <div>
      <h1
        class="text-center text-2xl md:text-[45px] text-black tracking-tighter"
      >
        Enter 6-digit Code
      </h1>

      <p class="md:text-[20px] text-center text-neutral-700 mt-4">
        Enter the 6-digit code we sent to your email (ex***mple@email.com) to
        verify your account. If you don’t see the message, please check your
        spam folder.
      </p>
    </div>

    <div>
      <AppPinCode
        :digits="pinDigits"
        :inputClass="'w-11 h-11 md:h-16 md:w-16'"
      ></AppPinCode>
    </div>

    <div class="w-full max-w-[350px]">
      <AppButton @click="verifyOTP"> Submit </AppButton>

      <p class="text-center text-sm md:text-base text-[#686868] mt-6">
        Did not receive code?
        <span class="text-black">Resend (8s)</span>
      </p>
    </div>
  </div>
</template>
