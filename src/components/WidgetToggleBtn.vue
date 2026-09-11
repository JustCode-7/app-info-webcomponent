<script setup lang="ts">
import WebcomponentIcon from "@/components/icons/WebcomponentIcon.vue"
import {inject} from "vue";
import {WidgetToggleKey} from "@/composables/useWidgetToogle.ts";

// 💡 Dependency Injection: Ziehe dir den Service aus der Eltern-Komponente
const widgetService = inject(WidgetToggleKey)

// Sicherheits-Check für TypeScript (falls die Komponente außerhalb von App.ce.vue genutzt wird)
if (!widgetService) {
  throw new Error('HeaderComponent kann nur innerhalb von App.ce.vue genutzt werden!')
}

// Entpacke die benötigte Funktion aus dem injizierten Service
const { toggle, isOpen } = widgetService
</script>

<template>
  <div class="d-flex w-100 justify-content-center">
    <button
        v-if="!isOpen"
        @click="toggle"
        class="btn border-warning borderfloating-icon-btn"
        aria-label="Widget umschalten für weitere Informationen"
        title="Weitere Apps zum Entdecken"
    >
      <span><WebcomponentIcon/></span>
    </button>
  </div>
</template>