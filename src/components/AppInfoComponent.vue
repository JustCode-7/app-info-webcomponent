<script setup lang="ts">
import InfoIcon from "@/components/icons/InfoIcon.vue";

defineProps<{
  msg?: string;
  currentUri?: string;
}>()

function getCurrentUri(uri: string | undefined  ): URL {
  return new URL(uri!);
}
</script>

<template>
  <div class="flex border rounded bg-gray m-3 p-2 justify-center text-center">
  <h5 title="Infos über die aktuelle App"> App-Info <InfoIcon /> </h5>
    <p>aktuelle URL: <a :href="currentUri" target="_blank" rel="noopener">{{currentUri}}</a></p>
    <p class="text-warning">{{ msg }}</p>
  </div>
</template>

<style scoped>

</style>