<script setup>
import CardLayout from "../components/CardLayout.vue";
</script>

<template>
  <CardLayout
    title="General Info"
    description="General Information About Your Account"
  >
    <div class="flex flex-col gap-1 mt-4">
      <label for="first-name" class="text-gray-400 text-sm font-medium">
        First Name
      </label>
      <div class="flex gap-4">
        <input
          id="first-name"
          placeholder="First Name"
          class="flex-grow border rounded-md px-3 py-2 text-sm text-gray-600 disabled:text-gray-400"
          value="Jan"
        />

        <button class="text-blue-400 font-semibold">
          <icon class="w-7 h-7" icon="circle-check" />
        </button>

        <button class="text-gray-400 font-semibold">
          <icon class="w-7 h-7" icon="circle-xmark" />
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-1 mt-4">
      <label for="last-name" class="text-gray-400 text-sm font-medium">
        Last Name
      </label>
      <div class="flex gap-4">
        <input
          id="last-name"
          placeholder="Last Name"
          class="flex-grow border rounded-md px-3 py-2 text-sm text-gray-600 disabled:text-gray-400"
          value="Do"
        />

        <button class="text-blue-400 font-semibold">
          <icon class="w-7 h-7" icon="circle-check" />
        </button>

        <button class="text-gray-400 font-semibold">
          <icon class="w-7 h-7" icon="circle-xmark" />
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-1 mt-4">
      <label for="email" class="text-gray-400 text-sm font-medium">Email</label>
      <div class="flex gap-4">
        <input
          id="email"
          placeholder="Email"
          class="flex-grow border rounded-md px-3 py-2 text-sm text-gray-600 disabled:text-gray-400"
          value="o@nn.sa"
          disabled
        />

        <button class="mx-2 text-blue-400 font-semibold">Change</button>
      </div>
    </div>
  </CardLayout>
</template>
