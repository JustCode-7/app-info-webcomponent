<script setup lang="ts">
import InfoIcon from "@/components/icons/InfoIcon.vue";
import {useAppBaseUrl} from "@/composables/useAppBaseUrl.ts";

defineProps<{
  msg?: string;
}>()

</script>

<template>
  <div class="d-flex flex-column w-50 border rounded bg-gray m-2 justify-content-center align-items-center text-center">
    <h5 title="Infos über die aktuelle App"> App-Info <InfoIcon /> </h5>
      <p>aktuelle URL: <a :href="useAppBaseUrl().url" target="_blank" rel="noopener">{{useAppBaseUrl().url}}</a></p>
      <p class="text-warning">{{ msg }}</p>
  </div>
</template>

<style scoped>

</style>