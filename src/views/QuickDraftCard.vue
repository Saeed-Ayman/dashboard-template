<template>
  <CardLayout title="Quick Draft" description="Write A Draft For Your Ideas">
    <input :class="classes" placeholder="Title" />
    <textarea
      :class="classes + `resize-none`"
      rows="8"
      placeholder="Your Thought"
    ></textarea>

    <button
      class="block ml-auto text-white bg-blue-500 text-sm font-bold px-3 py-1.5 rounded-lg hover:bg-blue-600"
    >
      Save
    </button>
  </CardLayout>
</template>

<script setup>
import CardLayout from "../components/CardLayout.vue";

/* tailwind */
const classes = `block my-4 bg-gray-200 w-full rounded-md text-sm placeholder:text-gray-600 px-2 py-1.5 outline-none
block my-4 bg-gray-200 w-full rounded-md text-sm placeholder:text-gray-600 px-2 py-1.5 outline-none `;
</script>