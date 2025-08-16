<script setup lang="ts">
const { routeActivity, getCurrentStep } = useRegisterationStep();

const currentStep = computed(() => getCurrentStep());

const { toggleUserTypes, selectedUserType } = useRegisterationStore();
</script>
<template>
  <LayoutAuth>
    <template v-if="routeActivity['submit_data']" #cta>
      <button class="text-green-600" @click="toggleUserTypes">
        Sign up as
        {{
          selectedUserType === UserTypes.ARTISANS ? "an artisan" : "a customer"
        }}
      </button>
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
