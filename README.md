# MyCalendar API Documentation

## Introduction

Calendar_serviceweb est une API en JavaScript Natif simple qui permet de créer un calendrier interactif avec la possibilité de marquer certains jours avec des événements spécifiques à indiquer depuis les options de configuration.

## Choix de conception et explications

Il s'agit d'un exercice ayant pour objectif de créer une librairie simple permettant de générer un calendrier via le langage de notre choix.<br>

JavaScript étant le langage le plus utilisé dans le développement web, mais ayant peu d'expérience sur le langage, cela m'a permis de consolider mes acquis et d'en apprendre davantage sur ce langage.

- Créer une librairie en JavaScript natif, sans framework, afin de me concentrer sur le langage et de ne pas être dépendant d'un framework.
- Créer une librairie permettant de générer un calendrier mensuel, avec la possibilité de marquer certains jours avec des événements spécifiques à indiquer depuis les options de configuration.
- Créer une librairie plutôt qu'un plugin jQuery car je n'ai pas d'expérience sur jQuery et je souhaitais me concentrer sur le langage JavaScript.

## Installation

Pour installer l'API, vous pouvez utiliser npm comme suit :

```sh
npm install git@github.com:Kierha/calendar_service_web.git
```

Ou télécharger le fichier JS et l'inclure dans votre projet.

## Utilisation

Voici un exemple simple d'utilisation de l'API Calendar :

```javascript
import MyCalendar from "calendar_serviceweb";

const myCal = new MyCalendar("targetElementId", {
  events: {
    "2023-10-11": { title: "Event 1", description: "Description of event 1" },
  },
  eventClass: "customEventClass",
});
```

- `"targetElementId"` est l'ID de l'élément HTML où le calendrier sera injecté.
- `events` est un objet contenant des dates en tant que clés et des objets d'événements en tant que valeurs.
- `eventClass` est une classe CSS personnalisée appliquée aux jours avec des événements.

## Options

### events

Un objet contenant des dates et des informations sur l'événement.

- titre : Le titre de l'événement.
- description : La description de l'événement. <br>

Exemple :

```javascript
{
  "2023-10-11": {title: "Mon événement", description: "Description de mon événement"}
}
```

### eventClass

Une classe CSS personnalisée appliquée aux jours ayant des événements (surcharge du style personnalisable).

```javascript
{
  eventClass: "customEventClass";
}
```

## Fonctionnalités

- Affichage mensuel du calendrier.
- Navigation entre les mois.
- Marquage des jours avec des événements (uniquement depuis les options).
- Affichage des détails de l'événement au clic sur le jour.
- Possibilité de styliser les jours d'événement.

# Démonstration de l'Application

## Introduction

L'application de démonstration illustre comment utiliser Calendar_serviceweb pour créer un calendrier simple et interactif sur un site web.

## Installation

Clonez le dépôt et installez les dépendances avec npm :

Ce repository contient :

- Un fichier index.html
- Un fichier style.css
- Un fichier index.js
- Un fichier package.json

```sh
git clone <repository_url>
cd repository_name
npm install
```

Dépendance(s) :

parcel-bundler : ^1.12.5

## Qu'est-ce qu'un Bundler ?

Un "bundler" en développement web est un outil qui regroupe, compile, et réduit la taille des fichiers JavaScript et CSS. Il peut également optimiser des images, mettre en préfixe du CSS automatiquement, etc. En bref, il prépare vos ressources pour le web en les transformant en une version optimisée, souvent en un seul fichier (ou quelques fichiers), réduisant ainsi le nombre de requêtes HTTP et accélérant le chargement de la page.

## Parcel Bundler

### Qu'est-ce que Parcel ?

[Parcel](https://parceljs.org/) est un "bundler" d'application web, qui se distingue par sa facilité d'utilisation. Il ne nécessite aucune configuration (ou très peu) pour bundler vos fichiers de façon optimale. Parcel est capable de prendre en charge une multitude de fichiers et technologies différentes, et compile votre code pour qu'il soit compatible avec différents navigateurs. Il transforme et bundler votre code presque instantanément grâce à un mécanisme de "multi-threading".

### Pourquoi utiliser Parcel ?

- **Zéro Configuration :** Parcel se vante d'être un bundler à zéro configuration, ce qui signifie que vous n'avez pas besoin de configurer quoi que ce soit pour l'utiliser dans des projets simples.
- **Rapide :** Parcel utilise le multi-threading pour transformer les fichiers en parallèle, le rendant extrêmement rapide.
- **Prise en Charge Large :** Parcel supporte une large variété de fichiers et technologies dès la sortie de la boîte.

## Webpack

### Qu'est-ce que Webpack ?

[Webpack](https://webpack.js.org/) est également un bundler très populaire. Cependant, contrairement à Parcel, il est configuré manuellement, offrant un niveau de contrôle plus élevé sur la façon dont vos fichiers sont traités et bundlés.

### Pourquoi choisir Parcel plutôt que Webpack ?

- **Facilité d'utilisation :** Si vous avez un projet simple ou si vous débutez dans le développement web, la simplicité de mise en place et l'absence de nécessité de configuration de Parcel peuvent être très attractives.
- **Rapidité de Setup :** Pour des prototypes ou des projets avec un délai court, être capable de mettre en place un bundler rapidement peut être crucial.
- **Simplicité :** Parcel offre moins de complexité dans les configurations, ce qui peut être un avantage pour des projets plus petits ou des développeurs moins expérimentés avec les bundlers.

## Utilisation

Après avoir installé les dépendances :

- <b> Ouvrez le fichier `index.html` dans votre navigateur pour voir l'application en action </b>
- <b> OU utiliser un server en local tel que [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) pour Visual Studio Code.</b>
- <b> OU utiliser la commande `npm start` pour lancer le serveur de développement de Parcel (configuré et configurable dans le package.json) </b>

## Code Exemple

Exemple de code illustrant comment l'application utilise l'API.

- Dans le fichier src/index.js :

```javascript
import MyCalendar from "calendar_service_web";

document.addEventListener("DOMContentLoaded", () => {
  const myCal = new MyCalendar("monCalendrier", {
    eventClass: "green-event", // utilisation de la classe CSS personnalisée
    events: {
      "2023-10-31": {
        // Vous pouvez changer la date, le titre ou la description pour tester avec des événements actuels
        title: "Halloween",
        description: "Une célébration festive",
      },
      "2023-10-11": {
        // Vous pouvez changer la date, le titre ou la description pour tester avec des événements actuels
        title: "Ydays",
        description: "Projet général",
      },
      "2023-10-18": {
        title: "Ydays",
        description: "Projet général",
      },
      "2023-10-25": {
        title: "Ydays",
        description: "Projet général",
      },
    },
  });
});
```
