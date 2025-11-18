<script setup lang="ts">
const footerLinks = [
  {
    heading: "Categories",
    links: [
      { label: "Plumbing", href: "/" },
      { label: "Electricity", href: "/" },
      { label: "Painting", href: "/" },
      { label: "Cleaning & Maintenance", href: "/" },
      { label: "Carpentry", href: "/" },
      { label: "Specialties", href: "/" },
    ],
  },

  {
    heading: "For clients",
    links: [
      { label: "Find Artisans", href: "/" },
      { label: "How SureHelp Works", href: "/" },
      { label: "Success Stories", href: "/" },
      { label: "Trust and Safety", href: "/" },
    ],
  },

  {
    heading: "For artisans",
    links: [
      { label: "Become an Artisan", href: "/" },
      { label: "How to Find Clients", href: "/" },
      { label: "Find Clients with Ads", href: "/" },
    ],
  },

  {
    heading: "Company",
    links: [
      { label: "Help and Support", href: "/" },
      { label: "Terms of Use", href: "/" },
      { label: "About Us", href: "/" },
      { label: "Contact Us", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "Invite a Friend", href: "/" },
      { label: "Refund Policy", href: "/" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "/" },
  { label: "Instagram", href: "/" },
  { label: "Twitter", href: "/" },
  { label: "LinkedIn", href: "/" },
];
</script>
<template>
  <footer class="w-full bg-[#111111] px-5 pt-16">
    <div class="max-w-[1368px] mx-auto w-full flex flex-col gap-22">
      <!-- links -->
      <div
        class="w-full flex flex-wrap justify-between gap-x-4 md:gap-x-12 gap-y-9"
      >
        <ul
          class="max-w-[240px] flex flex-col gap-y-4"
          v-for="link in footerLinks"
          :key="link.heading"
        >
          <li
            class="text-[#FCFCFC] text-[10px] uppercase font-semibold tracking-[4px] mb-8"
          >
            {{ link.heading }}
          </li>
          <li v-for="sublink in link.links" :key="sublink.label">
            <a
              :href="sublink.href"
              class="text-[#EEEEEE] text-base hover:text-primary-200"
              :key="sublink.label"
              >{{ sublink.label }}</a
            >
          </li>
        </ul>
      </div>
      <!-- end-links -->

      <!-- foot note -->
      <div
        class="w-full flex flex-col md:flex-row justify-between gap-y-4 py-9 border-t border-[#2F2F32]"
      >
        <div class="flex gap-3 items-center">
          <!-- <img
            :src="footerLogo"
            class="w-[100px] h-[40px] bg-[#DEECFF]"
            alt=""
          /> -->
          <span class="w-[100px] h-[40px] bg-[#DEECFF] inline-block"></span>
          <p class="text-[#999BA8] text-base">
            &copy; 2025 SureHelp. All rights reserved.
          </p>
        </div>

        <ul class="flex gap-3 items-center flex-wrap">
          <li
            v-for="link in socialLinks"
            :key="link.label"
            class="border-r border-[#2F2F32] last:border-r-0"
          >
            <a
              :href="link.href"
              class="text-[#FCFCFC] text-sm uppercase inline-block px-5"
              >{{ link.label }}</a
            >
          </li>
        </ul>
      </div>
      <!-- foot note end-->
    </div>
  </footer>
</template>
