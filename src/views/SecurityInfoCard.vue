<script setup>
import CardLayout from "../components/CardLayout.vue";
import SwitchButton from "../components/SwitchButton.vue";
</script>
<template>
  <CardLayout
    title="Security Info"
    description="Security Information About Your Account"
  >
    <div class="my-4 flex justify-between items-center">
      <div>
        <div class="font-medium">Password</div>
        <div class="text-xs font-semibold text-gray-400 mt-1">
          Last Change On 25/10/2021
        </div>
      </div>

      <button class="bg-blue-500 px-2 py-1 rounded-md text-white font-medium">
        Change
      </button>
    </div>
    <hr />
    <div class="my-4 flex justify-between items-center">
      <div>
        <div class="font-medium">Two-Factor Authentication</div>
        <div class="text-xs font-semibold text-gray-400 mt-1">
          Enable/Disable The Feature
        </div>
      </div>

      <SwitchButton />
    </div>
    <hr />
    <div class="my-4 flex justify-between items-center">
      <div>
        <div class="font-medium">Devices</div>
        <div class="text-xs font-semibold text-gray-400 mt-1">
          Check The Login Devices List
        </div>
      </div>

      <button class="bg-gray-200 px-2 py-1 rounded-md font-medium">
        Devices
      </button>
    </div>
  </CardLayout>
</template>
