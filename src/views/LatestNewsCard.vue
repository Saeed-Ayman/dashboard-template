<template>
  <CardLayout class="text-center md:text-left" title="Latest News">
    <div class="divide-y-2">
      <div
        class="flex flex-col md:flex-row md:justify-between items-center py-6"
        v-for="{
          newsTitle,
          newsDescription,
          newsPublishedAt,
          newsImage,
          newsImageAlt,
        } in news"
      >
        <div class="flex md:gap-4 md:flex-row flex-col items-center">
          <img
            class="w-24 rounded-md"
            :src="importImg(newsImage)"
            :alt="newsImageAlt"
          />
          <div>
            <div class="font-bold my-1">{{ newsTitle }}</div>
            <div class="text-sm text-gray-500 mb-1">
              {{ newsDescription }}
            </div>
          </div>
        </div>
        <div class="text-sm bg-gray-200 w-fit px-2.5 py-1 rounded-md my-1">
          {{ newsPublishedAt }} Days Ago
        </div>
      </div>
    </div>
  </CardLayout>
</template>

<script setup>
import CardLayout from "../components/CardLayout.vue";

const news = [
  {
    newsTitle: "Created SASS Section",
    newsDescription: "New SASS Examples & Tutorials",
    newsPublishedAt: 3,
    newsImage: "news-01.png",
    newsImageAlt: "news-01_img",
  },
  {
    newsTitle: "Changed The Design",
    newsDescription: "A Brand New Website Design",
    newsPublishedAt: 5,
    newsImage: "news-02.png",
    newsImageAlt: "news-02_img",
  },
  {
    newsTitle: "Team Increased",
    newsDescription: "3 Developers Joined The Team",
    newsPublishedAt: 7,
    newsImage: "news-03.png",
    newsImageAlt: "news-03_img",
  },
  {
    newsTitle: "Added Payment Gateway",
    newsDescription: "Many New Payment Gateways Added",
    newsPublishedAt: 9,
    newsImage: "news-04.png",
    newsImageAlt: "news-04_img",
  },
];
</script>
