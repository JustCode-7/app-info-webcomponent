// src/composables/useWidgetToggle.ts
import { ref, type InjectionKey, type Ref } from 'vue'

// Das Interface beschreibt, was unser "Service" bereitstellt
export interface WidgetToggleService {
    isOpen: Ref<boolean>
    toggle: () => void
}

// Ein eindeutiger Schlüssel, damit TypeScript weiß, welche Typen beim Inject fließen
export const WidgetToggleKey: InjectionKey<WidgetToggleService> = Symbol('WidgetToggleKey')

// Die Fabrik-Funktion für den Zustand
export function useWidgetToggle() {
    const isOpen = ref(false)

    const toggle = () => {
        isOpen.value = !isOpen.value
    }

    return {
        isOpen,
        toggle
    }
}
