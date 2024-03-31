<template>
  <CardLayout title="Projects">
    <div class="overflow-auto mt-6">
      <table
        class="w-full p-px text-left whitespace-nowrap text-sm font-medium"
      >
        <thead class="bg-gray-200 border">
          <th v-for="cell in cells" class="px-4 py-3">{{ cell }}</th>
        </thead>
        <tbody>
          <tr
            v-for="project in projects"
            class="transition-colors duration-300 hover:bg-gray-50"
          >
            <td class="pr-10 pl-4 py-4 border">{{ project.Name }}</td>
            <td class="pr-10 pl-4 py-4 border">{{ project["Finish Date"] }}</td>
            <td class="pr-10 pl-4 py-4 border">{{ project.Client }}</td>
            <td class="pr-10 pl-4 py-4 border">{{ project.Price }}</td>
            <td class="pr-10 px-4 py-4 border">
              <div class="flex -space-x-4">
                <div v-for="(img, i) in project.Team" class="w-8 h-8">
                  <img
                    class="rounded-full border-2 border-white"
                    :src="importImg(img)"
                    :alt="`avatar_${i}`"
                  />
                </div>
              </div>
            </td>
            <td class="pr-10 pl-4 py-4 border">
              <div
                class="w-fit text-xs font-medium text-white px-2.5 py-1 rounded-md"
                :class="{
                  'bg-orange-500': status.Pending == project.Status,
                  'bg-blue-500': status.InProgress == project.Status,
                  'bg-green-500': status.Completed == project.Status,
                  'bg-red-500': status.Rejected == project.Status,
                }"
              >
                {{
                  Object.keys(status).find((v) => status[v] == project.Status)
                }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </CardLayout>
</template>

<script setup>
import { computed } from "vue";
import CardLayout from "../components/CardLayout.vue";

const status = {
  Pending: 0,
  InProgress: 1,
  Completed: 2,
  Rejected: 3,
};

const projects = [
  {
    Name: "Ministry Wikipedia",
    "Finish Date": "10 May 2022",
    Client: "Ministry",
    Price: "$5300",
    Team: ["team-01.png", "team-02.png", "team-03.png", "team-05.png"],
    Status: status.Pending,
  },
  {
    Name: "Elzero Shop",
    "Finish Date": "12 Oct 2021",
    Client: "Elzero Company",
    Price: "$1500",
    Team: ["team-01.png", "team-02.png", "team-05.png"],
    Status: status.InProgress,
  },
  {
    Name: "Bouba App",
    "Finish Date": "05 Sep 2021",
    Client: "Bouba",
    Price: "$800",
    Team: ["team-02.png", "team-03.png"],
    Status: status.Completed,
  },
  {
    Name: "Mahmoud Website",
    "Finish Date": "22 May 2021",
    Client: "Mahmoud",
    Price: "$600",
    Team: ["team-01.png", "team-02.png"],
    Status: status.Completed,
  },
  {
    Name: "Sayed Website",
    "Finish Date": "24 May 2021",
    Client: "Sayed",
    Price: "$300",
    Team: ["team-01.png", "team-03.png"],
    Status: status.Rejected,
  },
  {
    Name: "Arena Application",
    "Finish Date": "01 Mar 2021",
    Client: "Arena Company",
    Price: "$2600",
    Team: ["team-01.png", "team-02.png", "team-03.png", "team-04.png"],
    Status: status.Completed,
  },
];

const cells = computed(() => Object.keys(projects[0]));
</script>
