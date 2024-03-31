<script setup>
import RemindersCard from "../views/RemindersCard.vue";
import LastProjectProgressCard from "../views/LastProjectProgressCard.vue";
import LatestNewsCard from "../views/LatestNewsCard.vue";
import LatestPostCard from "../views/LatestPostCard.vue";
import LatestTasksCard from "../views/LatestTasksCard.vue";
import LatestUploadsCard from "../views/LatestUploadsCard.vue";
import ProfileCard from "../views/ProfileCard.vue";
import ProjectsCard from "../views/ProjectsCard.vue";
import QuickDraftCard from "../views/QuickDraftCard.vue";
import SocialMediaStatsCard from "../views/SocialMediaStatsCard.vue";
import TicketsStatistics from "../views/TicketsStatistics.vue";
import TopSearchItemsCard from "../views/TopSearchItemsCard.vue";
import YearlyTargetsCard from "../views/YearlyTargetsCard.vue";

const props = defineProps(["title"]);
const model = defineModel();

model.value = props.title;
</script>

<template>
  <div class="grid md:grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-4">
    <ProfileCard />
    <QuickDraftCard />
    <YearlyTargetsCard />
    <TicketsStatistics />
    <LatestNewsCard />
    <LatestTasksCard />
    <TopSearchItemsCard />
    <LatestUploadsCard />
    <LastProjectProgressCard />
    <RemindersCard />
    <LatestPostCard />
    <SocialMediaStatsCard />
  </div>
  <ProjectsCard class="mt-5" />
</template>
