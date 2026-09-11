<script setup lang="ts">
import InfoIcon from "@/components/icons/InfoIcon.vue";
import {computed, onMounted} from "vue";
import {useAppBaseUrl} from "@/composables/useAppBaseUrl.ts";

export interface AppMap{
  uri:string,
  appName:string
}

const appList:AppMap[] =[
    {
      uri:"https://justcode-7.github.io/dart-board/",
      appName:"Dart-App"
    },
  {
    uri:"https://justcode-7.github.io/orbital-evolution/",
    appName:"Orbital Evolution"
  },
  {
    uri:"https://justcode-7.github.io/card-gap-fill-fun/",
    appName:"Lückentext Trinkspiel (ab 18)"
  },
  {
    uri:"https://justcode-7.github.io/OmniQronoCountWise/",
    appName:"Multi-Use-App"
  },
  {
    uri:"https://justcode-7.github.io/adventskalender/",
    appName:"Ein Adventskalender"
  },
]


const filteredAppList = computed(() => {
  const restrictedGamePath = "https://justcode-7.github.io/card-gap-fill-fun/";
  const dartAppPath = "https://justcode-7.github.io/dart-board/";

  if(useAppBaseUrl().url !== dartAppPath){
      return appList.filter(app => app.uri !== restrictedGamePath)
    }else {
      return appList
    }
})
</script>

<template>
  <div class="d-flex flex-column w-50 border rounded bg-gray m-2 justify-content-center align-items-center text-center">
      <h5 title="Andere Apps die dich interessieren könnten">
        App-Explorer <InfoIcon />
      </h5>

      <div class="d-flex nav nav-pills flex-row" v-for="app in filteredAppList" :key="app.uri" >
        <a class="nav-link fw-bold" v-if="useAppBaseUrl().url !== app.uri"  :href="app.uri" target="_blank" rel="noopener">{{ app.appName }}</a>
      </div>
  </div>
</template>
<style scoped>
a:hover{
  color: #f80dcb;
}
</style>