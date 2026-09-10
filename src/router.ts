import { createRouter, createMemoryHistory } from 'vue-router'
import MyAppsOverview from './components/MyAppsOverview.vue'
import AppInfoComponent from './components/AppInfoComponent.vue'

export const router = createRouter({
    history: createMemoryHistory(), // 👈 Verhindert URL-Konflikte mit der Host-Seite
    routes: [
        { path: '/', component: MyAppsOverview },
        { path: '/app-info', component: AppInfoComponent }
    ]
})