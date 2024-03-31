<template>
  <CardLayout title="Latest Post">
    <div class="flex gap-4 my-6">
      <img
        class="w-12 h-12"
        :src="importImg(post.userImage)"
        :alt="post.userImageAlt"
      />

      <div>
        <div class="font-bold">{{ post.username }}</div>
        <div class="text-gray-500 mt-0.5">{{ post.postPublishedAt }}</div>
      </div>
    </div>

    <div class="text-center md:text-left py-6 border-y text-sm font-medium">
      {{ post.postDescription }}
    </div>

    <div class="flex justify-between pt-4 text-gray-500">
      <div>
        <icon icon="far fa-heart" />
        {{ post.postLikes }}
      </div>

      <div>
        <icon icon="far fa-comments" />
        {{ post.postCommentsNumber }}
      </div>
    </div>
  </CardLayout>
</template>

<script setup>
import CardLayout from "../components/CardLayout.vue";

const post = {
  username: "Steve Jobs",
  userImage: "avatar.png",
  userImageAlt: "avatar_img",
  postPublishedAt: "About 3 Hours Ago",
  postDescription: `You Can Fool All Of The People Some Of The Time, And Some Of The People All Of The Time, But You Can't Fool All Of The People All Of The Time.`,
  postLikes: "1.8k",
  postCommentsNumber: "500",
};
</script>
