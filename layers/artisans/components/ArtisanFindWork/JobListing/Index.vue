<script lang="ts" setup>
const jobs = [
  " Cleaning",
  "Gutter Cleaning",
  "Home Cleaning",
  "Window Cleaning",
  "Garage Cleaning",
  "+3 more",
];
</script>
<template>
  <div class="grid grid-cols-1">
    <!-- job card -->
    <div
      v-for="(job, index) in 5"
      class="py-6 px-5 first:border-t border-[#EAEBF0] border-b group hover:border-primary-500 relative z-2 flex flex-col gap-6 w-full"
    >
      <nuxt-link
        to="/"
        class="absolute inset-0 z-1 group-hover:bg-primary-50/80 block w-full h-full"
      ></nuxt-link>

      <!-- heading-->
      <div class="flex justify-between gap-6 items-center relative z-3">
        <!-- heading text -->
        <div class="flex flex-col gap-2 w-full">
          <span class="text-[#6E7181] text-[12px]">Posted 1 hour ago</span>
          <h3 class="text-[22px] text-[#161616]">Deep House Cleaning Job</h3>
          <ul class="flex items-center gap-2">
            <li class="text-[#6E7181] text-[12px]">Fixed-price</li>
            <li class="bg-[#D9D9D9] w-1 aspect-square block"></li>
            <li class="text-[#6E7181] text-[12px]">Budget GBP12,500</li>
          </ul>
        </div>
        <!-- heading text end-->

        <!-- card actions -->
        <ul class="flex items-center gap-4 shrink-0">
          <li>
            <button class="text-[#686868] hover:text-primary-600">
              <span class="sr-only">save</span>
              <Icon name="surehelp:save-add" size="24px" />
            </button>
          </li>
          <li>
            <button class="text-[#686868] hover:text-primary-600">
              <span class="sr-only">like</span>
              <Icon name="surehelp:like" size="24px" />
            </button>
          </li>
        </ul>
        <!-- card actions -->
      </div>
      <!-- heading end-->

      <!-- description -->
      <p class="text-[#4E4F55] relative z-3">
        Explore job opportunities that align with your skills and experience,
        tailored to meet the preferences of our clients. Each listing is
        carefully curated to ensure relevance and suitability. You can easily
        browse through these options, which are organized by their relevance to
        your profile. Take your time to review each position and find the
        perfect fit for your career goals. We aim to connect you with roles that
        not only match your qualifications but also resonate with your
        professional aspirations.
      </p>
      <!-- description end-->

      <!-- tags -->
      <ul class="flex items-center gap-2 flex-wrap relative z-3">
        <li
          v-for="(job, index) in jobs"
          class="inline-block bg-[#FCFCFC] rounded-full border border-[#EDEFF2] text-[#686868] py-3 px-4"
        >
          {{ job }}
        </li>
      </ul>
      <!-- end tags -->

      <!-- extras -->
      <ul class="flex items-center gap-6 relative z-3 flex-wrap">
        <li
          class="flex items-center gap-2 text-[#4E4F55] text-[14px] whitespace-nowrap"
        >
          <span class="text-[#4A92F3] flex items-center">
            <Icon name="surehelp:verify" size="20px"></Icon>
          </span>
          Payment verified
        </li>

        <li
          class="flex items-center gap-2 text-[#4E4F55] text-[14px] whitespace-nowrap"
        >
          <span class="text-[#FFBD12] flex items-center">
            <Icon name="surehelp:mdi_star" size="20px"></Icon>
          </span>
          4.8
        </li>

        <li
          class="flex items-center gap-2 text-[#4E4F55] text-[14px] whitespace-nowrap"
        >
          GBP6,000+ spent
        </li>

        <li
          class="flex items-center gap-2 text-[#4E4F55] text-[14px] whitespace-nowrap"
        >
          <span class="text-[#6E7181] flex items-center">
            <Icon name="surehelp:location" size="20px"></Icon>
          </span>
          Birmingham
        </li>
      </ul>
      <!-- extras end-->
    </div>
    <!-- job card -->
  </div>
</template>
