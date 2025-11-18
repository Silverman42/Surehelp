<script setup lang="ts">
import {
  ArtisanFindWorkActionsApplications,
  ArtisanFindWorkActionsPrefrences,
  ArtisanFindWorkActionsServices,
} from "#components";
</script>

<template>
  <div
    class="rounded-[16px] border border-[#E4E5EC] bg-[#FCFCFC] p-4 md:p-8 flex flex-col gap-8"
  >
    <ArtisanFindWorkActionsPrefrences />

    <ArtisanFindWorkActionsApplications />

    <ArtisanFindWorkActionsServices />
  </div>
</template>
