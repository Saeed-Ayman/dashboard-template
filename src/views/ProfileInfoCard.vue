<script setup>
const Information = [
  {
    title: "General Information",
    infos: [
      { key: "Full Name", value: "Jan Do" },
      { key: "Gender", value: "Male" },
      { key: "Country", value: "Egypt" },
    ],
  },
  {
    title: "Personal Information",
    infos: [
      { key: "Email", value: "o@nn.sa" },
      { key: "Phone", value: "019123456789" },
      { key: "Date of Birth", value: "Egypt" },
    ],
  },
  {
    title: "Job Information",
    infos: [
      { key: "Title", value: "Full Stack Developer" },
      { key: "Programming Language", value: "PHP" },
      { key: "Years of Experience", value: "1+" },
    ],
  },
  {
    title: "Billing Information",
    infos: [
      { key: "Payment Method:", value: "Paypal" },
      { key: "Email:", value: "email@website.com" },
      { key: "Subscription:", value: "Monthly" },
    ],
  },
];
</script>

<template>
  <div
    class="grid md:grid-cols-3 md:gap-0 gap-4 md:divide-x-2 bg-white overflow-hidden rounded-lg"
  >
    <div
      class="col-span-1 flex flex-col justify-center items-center gap-4 text-center pt-4"
    >
      <img class="w-32" src="../assets/images/avatar.png" />
      <div class="font-bold text-xl">Jan Do</div>
      <div class="font-medium text-gray-500">Level 20</div>
      <div class="w-2/3 max-w-44 h-1.5 bg-gray-200 rounded-full">
        <div class="w-2/3 h-full bg-blue-500 rounded-full"></div>
      </div>
      <div class="flex gap-1">
        <icon v-for="i in 5" class="text-yellow-400" icon="star" />
      </div>
      <div class="text-sm text-gray-500">550 Rating</div>
    </div>

    <div class="md:col-span-2">
      <div
        v-for="{ title, infos } in Information"
        class="border-t md:first:border-none flex flex-col gap-2 items-center hover:bg-gray-50 py-6 md:items-start md:px-8"
      >
        <div class="font-medium text-gray-500">{{ title }}</div>

        <div
          class="w-full flex flex-col md:flex-row items-center md:flex-wrap gap-4 md:justify-between"
        >
          <div
            v-for="{ key, value } in infos"
            class="flex flex-wrap text-sm gap-1 font-medium justify-center"
          >
            <div class="text-gray-500">{{ key }}</div>
            <div>{{ value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
