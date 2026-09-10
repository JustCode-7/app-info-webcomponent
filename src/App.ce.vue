<script setup lang="ts">
// Hier kannst du globalen Zustand für deine Web Component verwalten
import {ref} from "vue";
import WebcomponentIcon from "@/components/icons/WebcomponentIcon.vue";

defineProps<{
  msg: string;
  currentUri?: string;
}>()

const isOpen = ref(false)

const toggleWidget = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <!-- Der schwebende Button (Immer sichtbar unten rechts, wenn geschlossen) -->
  <div class="d-flex w-100 justify-content-center">
  <button
      v-if="!isOpen"
      @click="toggleWidget"
      class="btn border-warning borderfloating-icon-btn"
      aria-label="Widget umschalten für weitere Informationen"
      title="Weitere Apps zum Entdecken"
  >
    <span><WebcomponentIcon/></span>
  </button>
  </div>
  <div v-if="isOpen" class="d-flex border border-3 rounded-4 border-warning flex-column p-3 m-1">

<div class="d-flex w-100 justify-content-between">
  <h3 class="font-monospace text-warning">Weitere Apps zum Entdecken</h3>
      <button
          @click="toggleWidget"
          class="btn border-warning border bg-danger"
          aria-label="Widget umschalten"
      >
        <span><WebcomponentIcon/></span>
      </button>
</div>

    <div class="d-flex flex-row">
        <!-- Eine vue router innerhalb deiner Web Component -->
        <div class="border rounded bg-success w-50 p-3 align-content-around">
          <nav class="flex-column nav nav-pills align-content-center font-monospace">
            <router-link to="/" class="nav-link text-black fw-bold" active-class="active">Other Apps</router-link>
            <router-link to="/app-info" class="nav-link text-black fw-bold" active-class="active">App Info</router-link>
          </nav>
        </div>

        <!-- Hier zeigt der Router das Outlet aka die Componente an -->
        <div class="w-50">
          <router-view v-slot="{ Component }">
            <component :is="Component" :msg="msg" :current-uri="currentUri"/>
          </router-view>
        </div>
    </div>
  </div>
</template>


<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
