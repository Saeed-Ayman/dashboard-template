<template>
  <CardLayout class="relative" title="Social Media Status">
    <div class="space-y-2 mt-6">
      <div
        v-for="{
          socialStatus,
          socialButtonText,
          socialIcon,
          socialIconColor,
        } in socialsStatusWithColor"
        class="flex justify-between items-center pr-4"
        :style="{ backgroundColor: socialIconColor.light }"
      >
        <div class="flex gap-4 items-center">
          <div
            class="transition-all duration-300 hover:rotate-6 w-14 h-14 flex justify-center items-center"
            :style="{ backgroundColor: socialIconColor.dark }"
          >
            <icon
              class="w-8 h-8 text-white"
              :icon="['fa-brands', socialIcon]"
            />
          </div>
          <div class="font-semibold" :style="{ color: socialIconColor.dark }">
            {{ socialStatus }}
          </div>
        </div>

        <a
          class="text-sm font-medium text-white px-2.5 py-1 rounded-lg"
          :style="{ backgroundColor: socialIconColor.dark }"
        >
          {{ socialButtonText }}
        </a>
      </div>
    </div>
  </CardLayout>
</template>

<script setup>
import { computed } from "vue";
import CardLayout from "../components/CardLayout.vue";
import { useColorsPalette } from "../composables/useColorsPalette";

const socialsStatus = [
  {
    socialIcon: "fa-twitter",
    socialStatus: "90K Followers",
    socialButtonText: "Follow",
    socialName: "twitter",
  },
  {
    socialIcon: "fa-facebook-f",
    socialStatus: "2M Like",
    socialButtonText: "Like",
    socialName: "facebook",
  },
  {
    socialIcon: "fa-youtube",
    socialStatus: "1M Subscribe",
    socialButtonText: "Subscribe",
    socialName: "youtube",
  },
  {
    socialIcon: "fa-linkedin",
    socialStatus: "70K Followers",
    socialButtonText: "Follow",
    socialName: "linkedin",
  },
];

const colorsPalette = useColorsPalette();

const socialsStatusWithColor = computed(() =>
  socialsStatus.map((social) => {
    social["socialIconColor"] = colorsPalette.get(social.socialName);

    return social;
  })
);
</script>
