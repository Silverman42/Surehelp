<script setup lang="ts">
const { routeActivity, getCurrentStep } = usePasswordResetStep();
const currentStep = computed(() => getCurrentStep());
</script>
<template>
  <LayoutAuth>
    <Transition name="fade-slide" mode="out-in">
      <div :key="currentStep" class="w-full">
        <PasswordResetRecoveryMail
          v-if="routeActivity['send_recovery_mail']"
        ></PasswordResetRecoveryMail>
        <PasswordResetVerifyOTP
          v-if="routeActivity['verify_email']"
        ></PasswordResetVerifyOTP>
        <PasswordResetForm
          v-if="routeActivity['change_password']"
        ></PasswordResetForm>
      </div>
    </Transition>
  </LayoutAuth>
</template>
