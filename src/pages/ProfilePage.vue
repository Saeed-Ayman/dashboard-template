<script setup>
import LatestActivitiesCard from "../views/LatestActivitiesCard.vue";
import MySkillsCard from "../views/MySkillsCard.vue";
import ProfileInfoCard from "../views/ProfileInfoCard.vue";

const props = defineProps(["title"]);
const model = defineModel();

model.value = props.title;
</script>

<template>
  <ProfileInfoCard />

  <div class="mt-5 grid md:grid-cols-3 gap-5">
    <MySkillsCard class="md:col-span-1" />
    <LatestActivitiesCard class="md:col-span-2" />
  </div>
</template>
