# SwapiUi

Dieses Projekt wurde mit [Angular CLI](https://github.com/angular/angular-cli) Version 20.1.0.

# SwapiUi - Star Wars Explorer

Eine Angular-Anwendung zur Erkundung der Star Wars API (SWAPI)


## Features & Umsetzung

### Ressourcen & Stores
Drei zentrale Root-Ressourcen wurden mittels dedizierter **Stores** implementiert:
* **Filme (`FilmsStore`):** Liste aller Episoden.
* **Personen (`PeopleStore`):** Komplette Charakterliste (inkl. automatischer Auflösung der Pagination).
* **Planeten (`PlanetsStore`):** Vollständige Liste aller Planeten.

### UI & UX
* **Master-Detail-Views:** Jede Ressource verfügt über eine Listenansicht und eine routing-basierte Detailseite (`:id`).
* **Angular Material:** Verwendung von Material Design Komponenten (Cards, Grids, Spinner).
* **Responsive Design:** Die Anwendung ist für verschiedene Bildschirmgrößen optimiert.
* **State Management:** Nutzung `resource()` API zur sauberen Handhabung von Ladezuständen (`isLoading`).

### Technischer Stack
* **Angular 20:** Verwendung von **Standalone Components**.
* **Signals:** Konsequente Nutzung von Signals für reaktive Datenflüsse.
* **Zoneless:** Die Anwendung ist vollständig "Zoneless" konfiguriert (ohne `zone.js`).
* **Testing:** Unit-Tests mit **Jasmine & Karma**. Aus Zeitgründen wurde die Kernlogik exemplarisch am `FilmsStore` sowie das Grundsetup der Komponenten getestet.

---

### Server starten

```bash
ng serve
```

### Running unit tests

```bash
ng test
```

### Building

```bash
ng build
```

