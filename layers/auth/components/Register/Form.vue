<script setup lang="ts">
const { setRouteActivity } = useRegisterationStep();
const { selectedUserType } = useRegisterationStore();

const createAccount = () => {
  setRouteActivity(RegisterRouteNames.VERIFY_EMAIL, true);
};
</script>
<template>
  <div
    class="max-w-[608px] mx-auto w-full flex flex-col gap-y-[56px] items-center justify-center min-h-[80vh]"
  >
    <h1
      v-if="selectedUserType === UserTypes.ARTISANS"
      class="text-center text-2xl md:text-[36px] text-black tracking-tighter"
    >
      Sign up as an artisan to showcase your services to potential clients
    </h1>

    <h1
      v-if="selectedUserType === UserTypes.CUSTOMERS"
      class="text-center text-2xl md:text-[36px] text-black tracking-tighter"
    >
      Sign up as a customer to hire professional artisans or request services
    </h1>

    <form
      @submit.prevent="createAccount"
      class="grid grid-cols-2 gap-x-3 gap-y-6 w-full"
    >
      <AppInputContainer label="First Name">
        <input type="text" />
      </AppInputContainer>
      <AppInputContainer label="Last Name">
        <input type="text" />
      </AppInputContainer>

      <div class="col-span-2">
        <AppInputContainer label="Email Address">
          <input type="email" />
        </AppInputContainer>
      </div>

      <div class="col-span-2">
        <AppInputContainer is-password label="Password">
          <template #default="{ passwordIsVisible }">
            <input
              :type="passwordIsVisible ? 'text' : 'password'"
              placeholder="Password"
            />
          </template>
        </AppInputContainer>
      </div>

      <div class="col-span-2">
        <AppCheckboxContainer
          label="I confirm that I have read, understood, and agree to Surehelp’s Privacy Policy and User Agreement."
        >
          <input type="checkbox" name="" id="" />
        </AppCheckboxContainer>
      </div>

      <div class="w-full col-span-2 pt-6">
        <AppButton> Create Account </AppButton>

        <p class="text-center text-sm md:text-base text-[#686868] mt-6">
          Already registered ?
          <nuxt-link
            to="/auth/login"
            class="underline text-primary-500 hover:text-primary-600"
            >Login</nuxt-link
          >
        </p>
      </div>
    </form>
  </div>
</template>
