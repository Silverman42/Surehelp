<script setup lang="ts">
import {
  ArtisanFindWorkActions,
  ArtisanFindWorkJobListing,
  ArtisanFindWorkProfileBadge,
  ArtisanFindWorkTodo,
  Icon,
} from "#components";
import { ref } from "vue";

const { getPlaceholderImg } = useMainConfig();
const isAvailable = ref(true);
const toggleAvailability = () => {
  isAvailable.value = !isAvailable.value;
};

const toDos = [
  {
    title: "Update Basic Details",
    description:
      "Help clients get to know you better and increase your chances of getting hired",
    percentage: 20,
  },
  {
    title: "Complete your KYC",
    description: "Verify your identity to unlock full access to our services",
    percentage: 0,
  },
  {
    title: "Setup Payment",
    description: "Get fully verified and eligible to receive payments",
    percentage: 0,
  },
];

const jobFilters = [
  { label: "Best Match", value: "best-match", count: 0 },
  { label: "Most Recent", value: "most-recent", count: 0 },
  { label: "Recommended", value: "recommended", count: 0 },
  { label: "Saved Jobs", value: "saved-jobs", count: 4 },
];

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
  <!-- notification -->
  <section
    class="w-full max-w-[1448px] rounded-[16px] flex items-center justify-between bg-[#FFF2F0] py-4 px-5"
  >
    <ul class="flex items-center gap-[10.5px]">
      <li
        class="w-[40px] h-[40px] shrink-0 rounded-full flex items-center justify-center bg-[#FCFCFC] text-[var(--alert-icon)]"
        :style="{
          '--alert-icon': '#FB583A',
        }"
      >
        <Icon name="surehelp:warning-2" size="20px" class="w-4 h-4" />
      </li>
      <li class="text-[#161616]">
        Verify your identity to enjoy full access to job opportunities on
        Surehelp
      </li>
    </ul>

    <button
      class="w-[27px] h-[27px] cursor-pointer shrink-0 rounded-full flex items-center justify-center bg-[#FCFCFC] text-[#2275E6]"
    >
      <Icon name="surehelp:arrow-right-2" size="10px" class="w-4 h-4" />
    </button>
  </section>
  <!-- notification -->

  <!-- main container -->
  <main class="w-full flex flex-col md:flex-row max-w-[1448px] gap-11">
    <section class="w-full flex flex-col gap-8">
      <!-- welcome -->
      <div>
        <h2 class="italic font-serif text-[32px] text-black">
          Welcome Peremobowei,
        </h2>
        <ul class="flex items-center gap-2">
          <li><img src="/img/streamline_cloud.svg" class="w-[24px]" /></li>
          <li class="text-[#686868]">
            Here are your to-dos to complete your profile
          </li>
        </ul>
      </div>
      <!-- welcome -->

      <!-- To do container -->
      <ArtisanFindWorkTodo />
      <!-- To do container -->

      <!-- search bar -->
      <div class="w-full relative">
        <icon
          name="surehelp:search-normal"
          size="1.5rem"
          class="absolute top-4 left-4"
        ></icon>
        <input
          type="search"
          name=""
          class="w-full outline-0 hover:border-primary-600 hover:ring-primary-100 ring-4 ring-transparent rounded-full border border-[#E4E5EC] bg-[#FCFCFC] py-3.5 pr-2 pl-13"
          id=""
        />
      </div>
      <!-- search bar end -->

      <!-- Jobs container -->
      <div class="flex flex-col gap-6">
        <h2 class="text-[#000000] text-[22px] font-medium">
          Jobs you might like
        </h2>

        <!-- job filter selections -->
        <div class="inline-flex items-center gap-2 overflow-x-auto w-full">
          <label
            class="inline-flex py-3 px-4 relative cursor-pointer min-w-fit"
            v-for="(filter, index) in jobFilters"
          >
            <input
              type="radio"
              name="jobFilters"
              :value="filter.value"
              class="sr-only peer"
            />
            <span
              class="absolute z-1 block left-0 top-0 w-full h-full bg-[#FCFCFC] rounded-full peer-checked:bg-[#2275E6] border border-[#EDEFF2] peer-checked:border-transparent"
            ></span>
            <span
              class="relative z-3 peer-checked:text-white text-[#686868] whitespace-nowrap inline-block w-auto"
              >{{ filter.label }}
              {{ filter.count > 0 ? `(${filter.count})` : "" }}</span
            >
          </label>
        </div>
        <!-- job filter selections -->

        <!-- subheading -->
        <div class="flex gap-2 items-center px-6">
          <Icon
            name="surehelp:directbox-default-2"
            size="14px"
            class="text-[#999BA8]"
          />
          <p class="text-[#6E7181] text-[13px]">
            Browse jobs that match your experience to a client’s having
            preferences. Ordered by most relevant.
          </p>
        </div>
        <!-- subheading end-->

        <!-- jobs listing -->
        <ArtisanFindWorkJobListing />
        <!-- jobs listing end-->
      </div>
      <!-- Jobs container end-->
    </section>

    <aside
      class="max-w-[464px] w-full flex flex-col gap-6 self-start md:sticky top-32"
    >
      <!-- profile card -->
      <ArtisanFindWorkProfileCard />
      <!-- profile card end-->

      <!-- Get badge -->
      <ArtisanFindWorkProfileBadge />
      <!-- Get badge end-->

      <!-- Visibility card -->
      <ArtisanFindWorkProfileBadge />
      <!-- Visibility card end-->

      <!-- Action card -->
      <ArtisanFindWorkActions />
      <!-- Action card end-->
    </aside>
  </main>
  <!-- main container end-->
</template>
