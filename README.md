# vue-webcomponent-project

This template should help get you started developing with Vue 3 in Vite.

## LifeCycleHooks

| Hook-Name | Wann wird er aufgerufen? | Typischer Einsatzzweck |
| :--- | :--- | :--- |
| **`onMounted`** | Die Komponente wurde erfolgreich in den DOM-Baum eingehängt. | **API-Abrufe starten**, Chart.js initialisieren oder DOM-Elemente auslesen. |
| **`onUpdated`** | Daten haben sich geändert und Vue hat das HTML neu gerendert. | Reaktionen auf visuelle Änderungen (z. B. Chart-Größe neu berechnen). |
| **`onUnmounted`** | Die Komponente wurde aus dem DOM entfernt (zerstört). | **Aufräumarbeiten:** Timer stoppen, Event-Listener der Host-Seite entfernen. |
| **`onBeforeMount`** | Die Komponente ist bereit, wurde aber noch nicht im DOM platziert. | Vorbereitende Logik (wird selten gebraucht). |

#### Wenn ein Nutzer deine Web Component komplett von der Host-Webseite löscht (z. B. in Angular durch ein *ngIf="false" oder in JavaScript per .remove()), triggert Vue automatisch den onUnmounted-Hook für alle deine internen Vue-Komponenten.Du musst dich also nicht um das Aufräumen auf der Host-Seite kümmern – Vue erledigt das Löschen von Event-Listenern und Timern innerhalb deines Custom Elements völlig autark.

```
<script setup lang="ts">
import { onMounted, onUpdated, onUnmounted, ref } from 'vue'

const apiData = ref([])
let intervalId: any = null

// 1. WENN DIE KOMPONENTE GELADEN WIRD
onMounted(async () => {
  console.log('Die Chart-Ansicht ist jetzt live im DOM!')
  
  // Hier würdest du deine echten Daten laden:
  // apiData.value = await fetch('https://deine-host-url.de').then(r => r.json())
  
  // Beispiel: Einen Timer starten, der Daten alle 10 Sekunden aktualisiert
  intervalId = setInterval(() => {
    console.log('Lade frische Daten für das Chart...')
  }, 10000)
})

// 2. WENN SICH DATEN ÄNDERN UND DAS HTML AKTUALISIERT WURDE
onUpdated(() => {
  console.log('Das HTML der Komponente wurde neu gezeichnet!')
})

// 3. WENN DIE KOMPONENTE VERLASSEN WIRD (z.B. Router-Wechsel zu "Info")
onUnmounted(() => {
  console.log('Die Chart-Ansicht wurde geschlossen.')
  
  // WICHTIG bei Web Components: Lösche den Timer, um Memory Leaks zu verhindern!
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
