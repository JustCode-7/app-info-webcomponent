<script setup lang="ts">
defineProps({
  msg: {},
})
</script>

<template>
    <router-view v-slot="{ Component }">
        <component :is="Component" :msg="msg"/>
    </router-view>
</template>