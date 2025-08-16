<script lang="ts" setup>
import { computed } from "vue";
interface AppButtonProp {
  size?: "sm" | "md" | "lg";
  light?: boolean;
  type?: "primary" | "secondary" | "danger" | "white";
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
}
const appButtonProp = withDefaults(defineProps<AppButtonProp>(), {
  size: "md",
  light: false,
  type: "primary",
  outlined: false,
  loading: false,
  disabled: false,
  block: true,
});

const buttonIsDisabled = computed(
  () => appButtonProp.disabled || appButtonProp.loading
);

const buttonIsLoading = computed(() => appButtonProp.loading);
</script>
<style>
@reference "~/assets/css/main.css";

.btn {
  @apply rounded-full border relative py-[12px] px-6 inline-flex justify-center items-center gap-x-2;
}

.btn--md {
  @apply text-base;
}

.btn--sm {
  @apply text-sm;
}

.btn--lg {
  @apply text-lg;
}

.btn--block {
  display: flex !important;
  width: 100%;
}

.btn:disabled {
  @apply brightness-50 cursor-not-allowed;
}

.btn-spinner {
  @apply inline-block absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[1];
}

.btn-primary {
  @apply bg-primary-500 text-primary-100 border-transparent hover:bg-primary-700 transition-all duration-500 ease-in-out;
}

.btn-primary-light--outlined {
  @apply border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-primary-700;
}

.btn-primary-light {
  @apply border-primary-200 text-primary-700 bg-primary-200 hover:bg-primary-300 hover:border-primary-300 hover:text-primary-700 transition-all duration-500 ease-in-out;
}

.btn-primary--outlined {
  @apply border border-primary-700 text-primary-700 hover:border-primary-500 hover:text-primary-500 bg-transparent;
}

.btn-secondary {
  @apply bg-secondary text-secondary border-transparent hover:bg-primary-700;
}

.btn-secondary-light--outlined {
  @apply border-secondary text-secondary hover:bg-secondary hover:text-primary-700;
}

.btn-secondary-light {
  @apply border-secondary text-secondary bg-secondary hover:bg-secondary hover:border-secondary hover:text-primary-700;
}

.btn-danger {
  @apply bg-[#FB583A] text-red-100 border-transparent hover:bg-red-600;
}

.btn-danger-light--outlined {
  @apply border-red-200 text-red-200 hover:bg-red-200 hover:text-red-600;
}

.btn-danger-light {
  @apply border-red-200 text-red-700 bg-red-200 hover:bg-red-300 hover:border-red-300 hover:text-red-900;
}

.btn-white {
  @apply bg-white text-black border-transparent hover:bg-gray-200;
}

.btn-white-light--outlined {
  @apply border-white text-white hover:bg-gray-200 hover:text-gray-200;
}
</style>
<template>
  <button
    :disabled="buttonIsDisabled"
    :class="[
      'btn',
      `btn--${appButtonProp.size} `,
      `btn-${appButtonProp.type}${appButtonProp.light ? '-light' : ''}${
        appButtonProp.outlined ? '--outlined' : ''
      } `,
      appButtonProp.block && 'btn--block',
    ]"
  >
    <span
      class="relative z-[2]"
      :class="{
        invisible: buttonIsLoading,
      }"
    >
      <slot> Button </slot>
    </span>
    <span v-if="buttonIsLoading" class="btn-spinner">
      <Icon name="curacom:loading" size="1.3rem"></Icon>
    </span>
  </button>
</template>
