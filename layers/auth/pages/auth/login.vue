<script setup lang="ts">
import { useLoginStep } from "../../composables/useLoginStep";

const { routeActivity, getCurrentStep } = useLoginStep();

const currentStep = computed(() => getCurrentStep());
</script>
<template>
  <div class="w-screen min-h-screen font-body">
    <Transition name="fade-slide" mode="out-in">
      <div :key="currentStep" class="w-full">
        <Login v-if="routeActivity['login']" />
        <LoginEmailVerify v-if="routeActivity['verify_email']" />
      </div>
    </Transition>
  </div>
</template>
