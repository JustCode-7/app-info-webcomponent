// Per Konvention starten Composables immer mit dem Wort "use"
export function useAppBaseUrl() {

    // Lokaler Zustand (Reaktivität funktioniert hier exakt wie in Komponenten!)
     function getFormattedUrl(){
        // 1. Erstelle ein URL-Objekt aus der aktuellen Browser-Adresse
        const currentUrl = new URL(window.location.href);

        // 2. Zerlege den Pfad (pathname) an den Slashes
        // Aus "/dart-app/subpage/details" wird ["", "dart-app", "subpage", "details"]
        const pathParts = currentUrl.pathname.split('/');

        // 3. Hole das erste echte Verzeichnis (den Repo-Namen)
        const repoName = pathParts[1];

        return `${repoName === "" ? window.location.origin : window.location.origin+"/"+repoName+"/"}`;
    }

    return {url : getFormattedUrl() }
}