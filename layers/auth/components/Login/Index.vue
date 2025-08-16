<script lang="ts" setup>
const { setRouteActivity } = useLoginStep();

const handleLogin = () => {
  setRouteActivity(LoginRouteNames.VERIFY_EMAIL);
};
</script>
<template>
  <div
    class="w-full bg-[url('/img/login_bg.jpg')] bg-cover bg-center min-h-screen px-5 py-5 flex flex-col items-center justify-center relative"
  >
    <div class="absolute top-0 left-0 w-full h-full bg-black/60"></div>

    <div
      class="max-w-[1200px] mx-auto w-full flex justify-between relative z-2"
    >
      <!-- logo -->
      <div class="w-full place-content-end hidden md:block">
        <span class="w-[220px] rounded-[12px] bg-primary-100 block py-12">
        </span>
      </div>
      <!-- logo -->

      <!-- login form -->
      <div
        class="max-w-[653px] w-full rounded-[32px] bg-white px-6 md:p-18 flex flex-col gap-y-12 shrink-0"
      >
        <div>
          <h1
            class="text-center text-2xl md:text-[36px] text-primary-500 tracking-tight font-semibold"
          >
            Welcome Back
          </h1>
          <p class="text-center mt-2 text-gray-500">
            Enter your details below to continue
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 w-full">
          <AppInputContainer label="Email Address">
            <input
              type="email"
              name=""
              placeholder="Enter email address"
              id=""
            />
          </AppInputContainer>

          <AppInputContainer label="Password" is-password>
            <template #sidelabel>
              <nuxt-link
                to="/auth/password-reset"
                class="text-gray-600 text-[12px] hover:text-primary-600"
                >Forgot Password?</nuxt-link
              >
            </template>
            <template #default="{ passwordIsVisible }">
              <input
                :type="passwordIsVisible ? 'text' : 'password'"
                name=""
                placeholder="Enter password"
                id=""
              />
            </template>
          </AppInputContainer>
        </div>

        <div class="w-full">
          <AppButton @click="handleLogin"> Login </AppButton>

          <p class="text-center text-sm md:text-base text-[#686868] mt-6">
            Not registered ?
            <nuxt-link
              to="/auth/register"
              class="underline text-primary-500 hover:text-primary-600"
              >Sign Up</nuxt-link
            >
          </p>
        </div>
      </div>
      <!-- login form -->
    </div>
  </div>
</template>
