<script setup lang="ts">
import WebcomponentIcon from "@/components/icons/WebcomponentIcon.vue"
import {WidgetToggleKey} from "@/composables/useWidgetToogle.ts";
import {inject} from "vue";

// 💡 Dependency Injection: Ziehe dir den Service aus der Eltern-Komponente
const widgetService = inject(WidgetToggleKey)

// Sicherheits-Check für TypeScript (falls die Komponente außerhalb von App.ce.vue genutzt wird)
if (!widgetService) {
  throw new Error('HeaderComponent kann nur innerhalb von App.ce.vue genutzt werden!')
}

// Entpacke die benötigte Funktion aus dem injizierten Service
const { toggle } = widgetService
</script>

<template>
  <div class="d-flex w-100 justify-content-between">
    <h3 class="font-monospace text-warning">Weitere Apps zum Entdecken</h3>
    <button @click="toggle"
        class="btn border-warning border bg-danger"
        aria-label="Widget umschalten"
    >
      <span><WebcomponentIcon/></span>
    </button>
  </div>
</template>