<script setup lang="ts">
// Hier kannst du globalen Zustand für deine Web Component verwalten
import HeaderComponent from "@/components/HeaderComponent.vue";
import {useWidgetToggle, WidgetToggleKey} from "@/composables/useWidgetToogle.ts";
import {provide} from "vue";
import WidgetToggleBtn from "@/components/WidgetToggleBtn.vue";
import RouterLinkComponent from "@/components/RouterLinkComponent.vue";
import RouterOutlet from "@/components/RouterOutlet.vue";

defineProps<{
  msg?: string;
}>()

// 1. Initialisiere den Zustand frisch für DIESE Instanz der Web Component
const { isOpen, toggle } = useWidgetToggle()

// 2. Stelle den Zustand unter dem definierten Schlüssel für alle Kinder bereit (DI)
provide(WidgetToggleKey, { isOpen, toggle })

</script>

<template>
  <WidgetToggleBtn :is-open="isOpen" :toggle="toggle"/>

  <!-- 1. Das Modal-Overlay (Dunkelt den Hintergrund der Host-Seite leicht ab) -->
  <div v-if="isOpen" class="custom-modal-overlay bg-black" @click.self="toggle">

    <!-- 2. Das eigentliche zentrierte Modal-Fenster (Nutzt deine bestehenden Bootstrap-Klassen) -->
    <div class="d-flex border border-3 rounded-4 border-warning flex-column p-2 custom-modal-content bg-dark text-light">

      <HeaderComponent/>

      <div class="d-flex vh-100 flex-row mt-3">
        <!-- Eine vue router innerhalb deiner Web Component -->
        <RouterLinkComponent/>

        <!-- Hier zeigt der Router das Outlet aka die Componente an -->
        <RouterOutlet :msg="msg"/>
      </div>

    </div>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

:host {
  /* 💡 Setzt ALLE vererbbaren CSS-Eigenschaften auf den Browser-Standard zurück.
     Damit ist die Host-Webseite zu 100% ausgesperrt! */
  all: initial;

  /* Da 'all: initial' auch Bootstrap-Schriften zurücksetzt,
     geben wir hier kurz den Standard wieder mit mit: */
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  line-height: var(--bs-body-line-height);
}


/* Das Overlay spannt sich über den gesamten Client-Bildschirm */
.custom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999990; /* Liegt über der gesamten Host-Webseite */
  display: flex;
  align-items: center;     /* Zentriert das Modal vertikal */
  justify-content: center;   /* Zentriert das Modal horizontal */
}

/* Das eigentliche Modal-Fenster in der Mitte */
.custom-modal-content {
  width: 800px;           /* Breite des Modals (nach Wunsch anpassen) */
  max-width: 90vw;        /* Verhindert, dass es auf Smartphones aus dem Bildschirm bricht */
  height: 500px;          /* Höhe des Modals (nach Wunsch anpassen) */
  max-height: 85vh;       /* Verhindert, dass es vertikal den Bildschirm sprengt */
  overflow: hidden;       /* Hält den Inhalt sauber im abgerundeten Kasten */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* Hochwertiger Schatten-Effekt */
  animation: customModalFadeIn 0.2s ease-out; /* Optionale kleine Einblend-Animation */
}

/* Kleine Animation beim Aufploppen */
@keyframes customModalFadeIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>