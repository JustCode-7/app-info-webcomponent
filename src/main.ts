import {defineCustomElement} from 'vue'
import App from './App.ce.vue' // Importiert die Hauptkomponente aus dem gleichen Ordner
import { router } from './router'

// 1. Lies die Attribute aus, die du von außen übergeben willst (z.B. deine Test-Nachricht)
// Da defineCustomElement die HTML-Attribute automatisch in Props spiegelt,
// können wir Standardwerte oder Initialisierungen hier steuern.

// 2. Erstelle das Custom Element nativ über Vue

const MyCustomElement = defineCustomElement({
    ...App, // Kopiert alle Optionen, HTML-Templates und Logiken aus App.ce.vue
    // @ts-ignore neue Funktion, ist ts noch nicht bekannt. ts-ignore muss später wieder entfernt werden
    configureApp(app) {
        app.use(router) // Klinkt den Router sauber in das Custom Element ein
    }
})

// 3. Registriere das Element im Browser

customElements.define('my-webcomponent', MyCustomElement)
