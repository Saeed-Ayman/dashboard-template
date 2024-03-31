<script setup>
import GeneralInfoCard from "../views/GeneralInfoCard.vue";
import SiteControlCard from "../views/SiteControlCard.vue";
import SecurityInfoCard from "../views/SecurityInfoCard.vue";
import SocialInfoCard from "../views/SocialInfoCard.vue";
import WidgetsControlCard from "../views/WidgetsControlCard.vue";
import BackupManagerCard from "../views/BackupManagerCard.vue";

const props = defineProps(["title"]);
const model = defineModel();

model.value = props.title;
</script>

<template>
  <div class="grid md:grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-4">
    <SiteControlCard />
    <GeneralInfoCard />
    <SecurityInfoCard />
    <SocialInfoCard />
    <WidgetsControlCard />
    <BackupManagerCard />
  </div>
</template>
