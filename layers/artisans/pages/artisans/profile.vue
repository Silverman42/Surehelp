<script setup lang="ts">
import {
  ArtisanFindWorkActions,
  ArtisanFindWorkAvailabilitySwitch,
  ArtisanFindWorkProfileBadge,
  ArtisanFindWorkProfileCard,
  Icon,
} from "#components";

const { getPlaceholderImg } = useMainConfig();

const services = [
  {
    title: "Professional Home Cleaning Services",
    budget: "Budget GBP12,500",
    priceType: "Fixed Price",
    recap:
      "Explore job opportunities that align with your skills and experience, tailored to meet the preferences of our clients. Each listing is carefully curated to ensure relevance and suitability. You can easily browse through these options, which are organized by relevance to your profile.",
    tags: [
      "Cleaning",
      "Gutter Cleaning",
      "Home Cleaning",
      "Window Cleaning",
      "Garage Cleaning",
      "+3 more",
    ],
  },
  {
    title: "Professional Home Cleaning Services",
    budget: "Budget GBP12,500",
    priceType: "Fixed Price",
    recap:
      "Explore job opportunities that align with your skills and experience, tailored to meet the preferences of our clients. Each listing is carefully curated to ensure relevance and suitability. You can easily browse through these options, which are organized by relevance to your profile.",
    tags: [
      "Cleaning",
      "Gutter Cleaning",
      "Home Cleaning",
      "Window Cleaning",
      "Garage Cleaning",
      "+3 more",
    ],
  },
];

const skills = [
  "Cleaning",
  "Gutter Cleaning",
  "Home Cleaning",
  "Window Cleaning",
  "Garage Cleaning",
  "Cleaning",
  "Garage Cleaning",
  "Garage Cleaning",
  "Gutter Cleaning",
  "Home Cleaning",
];
</script>

<template>
  <div class="w-full max-w-[1448px] flex flex-col gap-8">
    <section
      class="rounded-[16px] border border-[#E4E5EC] bg-white p-6 md:p-8 flex flex-col gap-6"
    >
      <div class="flex flex-col lg:flex-row gap-6 justify-between">
        <div class="flex gap-4 items-center w-full">
          <img
            :src="getPlaceholderImg('Peremobowei Agiddi')"
            class="w-[68px] h-[68px] rounded-full object-cover"
            alt="Profile image"
          />
          <div class="flex flex-col gap-1">
            <div class="inline-flex items-center gap-2">
              <h1 class="text-[28px] text-[#161616] font-medium">
                Peremobowei Agiddi
              </h1>
              <Icon name="surehelp:verify" size="20px" class="text-[#4A92F3]" />
            </div>
            <div class="flex flex-wrap items-center gap-3 text-[#686868]">
              <div class="flex items-center gap-2">
                <Icon
                  name="surehelp:location"
                  size="16px"
                  class="text-[#2275E6]"
                />
                <span>Birmingham, England</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="surehelp:star" size="16px" class="text-[#FFBD12]" />
                <span
                  class="inline-flex items-center gap-1 text-[14px] text-[#4E4F55]"
                >
                  4.82 (30 reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex gap-3 items-center w-full lg:w-auto flex-col sm:flex-row justify-start lg:justify-end"
        >
          <button
            class="border border-[#2275E6] whitespace-nowrap text-[#2275E6] hover:bg-primary-500 hover:text-white px-6 py-3 rounded-full text-[15px]"
          >
            View public profile
          </button>
          <button
            class="bg-[#2275E6] whitespace-nowrap hover:bg-primary-600 text-white px-6 py-3 rounded-full text-[15px]"
          >
            Profile settings
          </button>
        </div>
      </div>
    </section>

    <main class="w-full flex flex-col lg:flex-row gap-8">
      <aside class="max-w-[464px] w-full flex flex-col gap-6 self-start">
        <ArtisanFindWorkProfileBadge />
        <ArtisanFindWorkAvailabilitySwitch />
        <div
          class="rounded-[16px] border border-[#E4E5EC] bg-[#FCFCFC] p-4 md:p-8 flex flex-col gap-4"
        >
          <div class="flex items-center justify-between">
            <h3
              class="text-black text-[22px] font-medium flex items-center gap-2"
            >
              Earnings
              <Icon
                name="surehelp:info-circle"
                size="16px"
                class="text-[#686868]"
              />
            </h3>
            <p class="text-[22px] text-[#161616] font-semibold">GBP10,000</p>
          </div>
        </div>
        <ArtisanFindWorkActions />
      </aside>

      <section class="flex-1 flex flex-col gap-8">
        <div class="gap-4 flex flex-col">
          <article
            v-for="(service, index) in services"
            :key="`service-${index}`"
            class="p-6 md:p-8 flex flex-col gap-4 rounded-[16px] border border-[#E4E5EC] bg-[#FCFCFC]"
          >
            <header class="flex items-center justify-between gap-4">
              <div class="flex flex-col">
                <h2 class="text-[#161616] text-[20px] font-medium">
                  {{ service.title }}
                </h2>
                <span
                  class="text-[#6E7181] text-[12px] flex items-center gap-2"
                >
                  <span>{{ service.priceType }}</span>
                  <span class="w-1 h-1 bg-[#D9D9D9] block rounded-full"></span>
                  <span>{{ service.budget }}</span>
                </span>
              </div>

              <ul class="flex items-center gap-x-4 shrink-0">
                <li>
                  <button
                    class="flex items-center justify-center w-[36px] h-[36px] rounded-full border text-[#2275E6] border-[#2275E6] hover:bg-[#2275E6]/10"
                  >
                    <Icon name="surehelp:edit-2" size="16px" />
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center justify-center w-[36px] h-[36px] rounded-full border text-[#2275E6] border-[#2275E6] hover:bg-[#2275E6]/10"
                  >
                    <Icon name="surehelp:link" size="16px" />
                  </button>
                </li>
              </ul>
            </header>
            <p class="text-[#4E4F55]">
              {{ service.recap }}
            </p>
            <ul class="flex flex-wrap gap-3">
              <li
                v-for="(tag, tagIndex) in service.tags"
                :key="`tag-${tagIndex}`"
                class="text-[#686868] rounded-full border border-[#EDEFF2] px-4 py-2 text-sm bg-white"
              >
                {{ tag }}
              </li>
            </ul>
          </article>
        </div>

        <div class="border-t w-full border-[#EAEBF0]"></div>

        <section>
          <header
            class="flex items-center justify-between pb-6 border-b border-[#EAEBF0]"
          >
            <div class="flex items-center gap-3">
              <h3 class="text-[#161616] text-[24px] font-medium">Skills</h3>
              <button
                class="flex items-center justify-center w-[36px] h-[36px] rounded-full border text-[#2275E6] border-[#2275E6] hover:bg-[#2275E6]/10"
              >
                <Icon name="surehelp:edit-2" size="16px" />
              </button>
            </div>
          </header>
          <ul class="pt-6 flex flex-wrap gap-3">
            <li
              v-for="(skill, index) in skills"
              :key="`skill-${index}`"
              class="inline-flex border border-[#E4E5EC] rounded-full pl-3 px-2 py-2 text-sm text-[#4E4F55] gap-3"
            >
              {{ skill }}
              <button
                class="rounded-full flex items-center justify-center bg-[#F3F4F7] text-[#121212] w-[20px] h-[20px] shrink-0"
              >
                <Icon name="surehelp:close-circle" size="16px" />
              </button>
            </li>
          </ul>
        </section>
      </section>
    </main>

    <section
      class="rounded-[16px] border border-[#E4E5EC] bg-white p-6 md:p-8 w-full"
    >
      <header class="flex items-center justify-between">
        <div>
          <h3 class="text-[#161616] text-[20px] font-medium">Completed jobs</h3>
          <p class="text-[#686868] text-[14px]">
            An overview of all your projects
          </p>
        </div>
      </header>
      <div class="py-10 text-[#4E4F55] text-[14px]">
        You have not completed any project yet.
      </div>
    </section>
  </div>
</template>
