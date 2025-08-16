<script setup lang="ts">
const { routeActivity, getCurrentStep } = useRegisterationStep();

const currentStep = computed(() => getCurrentStep());
</script>
<template>
  <LayoutAuth>
    <template v-if="routeActivity['submit_data']" #cta>
      <button class="text-green-600" to="/">Sign up as a customer</button>
    </template>
    <template #default>
      <Transition name="fade-slide" mode="out-in">
        <div :key="currentStep" class="w-full">
          <Register v-if="routeActivity['select_user_type']" />
          <RegisterForm v-if="routeActivity['submit_data']" />
          <RegisterVerifyEmail v-if="routeActivity['verify_email']" />
        </div>
      </Transition>
    </template>
  </LayoutAuth>
</template>
