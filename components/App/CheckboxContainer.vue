<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
  }>(),
  {
    label: "",
  }
);
</script>
<template>
  <label class="checkbox-container">
    <slot></slot>
    <span class="custom-checkbox">
      <i>
        <Icon name="fluent:checkmark-24-regular" size="1rem"></Icon>
      </i>
    </span>
    <p class="text-sm">
      {{ label }}
    </p>
  </label>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.checkbox-container {
  @apply flex items-center gap-x-2;
}

.custom-checkbox {
  @apply flex w-5 h-5 overflow-hidden pt-1 justify-center items-center flex-shrink-0 border border-gray-300 rounded-md ring-2 ring-transparent transition-all duration-300 ease-out text-transparent;
}

.checkbox-container:hover .custom-checkbox {
  @apply border-primary-500 ring-primary-200/60;
}

.checkbox-container:deep(input[type="checkbox"]) {
  @apply sr-only;
}

.checkbox-container:deep(input[type="checkbox"]:checked) ~ .custom-checkbox {
  @apply border-primary-500 text-primary-500 ring-primary-200/60;
}
</style>
