<script lang="ts" setup>
interface ContainerProps {
  label?: string;
  error?: string;
  for?: string;
  prefix?: string;
  isPassword?: boolean;
  note?: string;
}
const containerProps = withDefaults(defineProps<ContainerProps>(), {
  label: "",
  prefix: "",
  isPassword: false,
  passwordIsVisible: false,
});

const requestError = computed(() => containerProps.error || "");
const passwordIsVisible = ref(false);
const toggglePasswordVisibility = () => {
  passwordIsVisible.value = !passwordIsVisible.value;
};
</script>
<template>
  <div class="input-container">
    <label
      v-if="containerProps.label.length > 0"
      :for="containerProps.for"
      class="mb-2 inline-flex justify-between items-end w-full text-sm font-medium text-body-black"
    >
      <p>{{ containerProps.label }}</p>
      <slot name="sidelabel"></slot>
    </label>
    <div class="input-body">
      <span class="prefix" v-if="containerProps.prefix.length > 0">
        {{ containerProps.prefix }}
      </span>
      <slot :passwordIsVisible="passwordIsVisible"> </slot>
      <span
        v-if="isPassword"
        class="password-hide"
        @click="toggglePasswordVisibility"
      >
        <!-- <icon
          v-if="passwordIsVisible"
          name="fluent:eye-show-20-regular"
          size="1.6rem"
        />
        <icon v-else name="fluent:eye-hide-20-regular" size="1.6rem" /> -->
        <span class="text-[9px] tracking-widest text-gray-400 uppercase">
          {{ passwordIsVisible ? "Hide" : "Show" }}
        </span>
      </span>
    </div>
    <span class="error">{{ requestError }}</span>
    <span
      class="note"
      v-if="
        (containerProps?.note || '').length > 0 && requestError.length === 0
      "
      >{{ containerProps.note }}</span
    >
  </div>
</template>
<style scoped>
@reference "~/assets/css/main.css";

.input-container .error {
  @apply text-xs text-red-500 block mt-1;
}

.input-container .note {
  @apply text-xs text-gray-400 block mt-1;
}

.input-body {
  @apply flex gap-2 items-stretch relative;
}

.input-body .prefix {
  @apply border inline-flex items-center w-auto shrink-0 rounded-md p-2 px-3 text-slate-400;
}

.input-body:deep(input[type="text"]),
.input-body:deep(input[type="email"]),
.input-body:deep(input[type="number"]),
.input-body:deep(textarea),
.input-body:deep(input[type="password"]),
.input-body:deep(input[type="date"]),
.input-body:deep(input[type="time"]),
.input-body:deep(input[type="url"]) {
  @apply h-14 w-full flex-grow rounded-md border border-[#E4E5EC] p-2 px-4 outline-0 hover:border-primary-600 hover:ring-4 hover:ring-primary-100 focus:border-primary-600 focus:ring-4 focus:ring-primary-100;
}

.input-body .password-hide {
  @apply cursor-pointer inline-flex items-center absolute z-[3] top-[50%] translate-y-[-50%] py-2 px-2 right-0;
}

.input-body:deep(input[type="password"]) {
  @apply pr-8;
}

.input-container:deep(textarea) {
  @apply h-auto;
}
</style>
