# Pilote de Chantier IA

Site web professionnel pour l'offre **Pilote de Chantier IA** — Service d'optimisation des opérations pour entrepreneurs en construction au Saguenay–Lac-Saint-Jean.

## Description

Landing page conçue pour convertir les entrepreneurs en construction en clients. Le site présente une offre d'audit opérationnel à 500$ avec garantie de 5 000$ d'économies identifiées.

**Design** : Industrial Precision (brutalisme fonctionnel moderne)
- Palette de couleurs industrielle (orange #FF6B35, gris anthracite #2D3142, jaune chantier #FFD23F)
- Typographie : Montserrat ExtraBold pour les titres, Inter pour le corps
- Layout asymétrique avec sections diagonales

## Stack technique

- **Frontend** : React 19 + TypeScript
- **Styling** : Tailwind CSS 4 + shadcn/ui
- **Routing** : Wouter
- **Build** : Vite
- **Server** : Express (pour le mode production)

## Installation

### Prérequis

- Node.js 22.x ou supérieur
- pnpm 10.x ou supérieur

### Étapes

```bash
# Cloner le repository
git clone https://github.com/VOTRE_USERNAME/pilote-de-chantier-ia.git
cd pilote-de-chantier-ia

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Le site sera accessible sur `http://localhost:3000`

## Scripts disponibles

```bash
# Développement
pnpm dev          # Lance le serveur de développement avec hot reload

# Build
pnpm build        # Compile le projet pour la production

# Production
pnpm start        # Lance le serveur de production (après build)

# Vérification
pnpm check        # Vérifie les types TypeScript sans compiler
pnpm format       # Formate le code avec Prettier
```

## Configuration des variables d'environnement

Créez un fichier `.env` à la racine du projet en vous basant sur `.env.example` :

```bash
cp .env.example .env
```

### Variables disponibles

Consultez le fichier `.env.example` pour la liste complète des variables d'environnement.

**Note** : Les variables préfixées par `VITE_` sont exposées au client (frontend). Ne mettez jamais de secrets sensibles dans ces variables.

## Structure du projet

```
pilote-chantier-ia/
├── client/                 # Code frontend
│   ├── public/            # Assets statiques
│   ├── src/
│   │   ├── components/    # Composants React réutilisables
│   │   │   └── ui/       # Composants shadcn/ui
│   │   ├── pages/        # Pages de l'application
│   │   ├── App.tsx       # Composant racine avec routing
│   │   ├── main.tsx      # Point d'entrée React
│   │   └── index.css     # Styles globaux et tokens Tailwind
│   └── index.html        # Template HTML
├── server/                # Code backend (minimal pour web-static)
│   └── index.ts          # Serveur Express pour production
├── shared/                # Code partagé (types, constantes)
├── package.json          # Dépendances et scripts
├── tsconfig.json         # Configuration TypeScript
├── vite.config.ts        # Configuration Vite
└── tailwind.config.ts    # Configuration Tailwind CSS
```

## Fichiers importants

### Frontend
- `client/src/pages/Home.tsx` - Page principale avec toutes les sections
- `client/src/index.css` - Palette de couleurs et tokens de design
- `client/index.html` - Configuration des fonts Google (Montserrat + Inter)

### Composants clés
- Formulaire de contact dans `Home.tsx` (Dialog avec react-hook-form)
- Accordion FAQ (shadcn/ui)
- Cards pour les problèmes et solutions

### Configuration
- `vite.config.ts` - Configuration du build et du dev server
- `tailwind.config.ts` - Configuration Tailwind (couleurs personnalisées)

## Déploiement

### Via Manus (recommandé)

Le projet est déjà configuré pour le déploiement sur Manus :

1. Créez un checkpoint dans l'interface Manus
2. Cliquez sur "Publish" dans le Management UI
3. Votre site sera déployé avec un domaine `*.manus.space`

### Déploiement manuel

```bash
# Build le projet
pnpm build

# Les fichiers de production sont dans dist/
# Déployez le contenu de dist/public/ sur votre hébergeur statique
```

## Fonctionnalités

### Sections du site

1. **Hero** - Accroche principale avec CTA
2. **Le Problème** - 5 points de friction des entrepreneurs
3. **La Solution** - Présentation du système Pilote de Chantier IA
4. **Comment ça marche** - Processus en 3 étapes (Audit, Implémentation, Support)
5. **Résultats garantis** - Statistiques et garantie 5 000$
6. **Pourquoi maintenant** - Contexte économique du Saguenay 2025-2026
7. **FAQ** - 5 questions fréquentes
8. **CTA Final** - Formulaire de réservation d'audit

### Formulaire de contact

Le formulaire collecte :
- Nom complet
- Entreprise
- Téléphone
- Email

**Note** : Actuellement, le formulaire affiche uniquement un toast de confirmation. Pour une utilisation en production, vous devez intégrer un service d'emailing ou un CRM.

## Intégrations à configurer (production)

### 1. Service d'emailing

Pour recevoir les demandes d'audit, intégrez un service comme :
- SendGrid
- Mailgun
- Resend
- EmailJS

### 2. Analytics

Le site inclut déjà Umami Analytics via les variables d'environnement :
- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`

### 3. CRM (optionnel)

Pour un suivi automatique des leads :
- HubSpot
- Pipedrive
- Monday.com

## Personnalisation

### Modifier les couleurs

Éditez `client/src/index.css` dans la section `:root` :

```css
:root {
  --primary: oklch(0.65 0.18 35);     /* Orange industriel */
  --secondary: oklch(0.28 0.02 250);  /* Gris anthracite */
  --accent: oklch(0.88 0.15 95);      /* Jaune chantier */
  /* ... */
}
```

### Modifier les fonts

Éditez `client/index.html` pour changer les Google Fonts :

```html
<link href="https://fonts.googleapis.com/css2?family=VotreFontDisplay:wght@700;900&family=VotreFontBody:wght@400;500;600&display=swap" rel="stylesheet" />
```

Puis mettez à jour `client/src/index.css` :

```css
body {
  font-family: 'VotreFontBody', sans-serif;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'VotreFontDisplay', sans-serif;
}
```

### Modifier le contenu

Tout le contenu textuel se trouve dans `client/src/pages/Home.tsx`. Recherchez les sections par leur titre (Hero, Le Problème, La Solution, etc.).

## Support

Pour toute question ou problème :
- Ouvrez une issue sur GitHub
- Consultez la documentation de [Manus](https://docs.manus.im)

## Licence

MIT

---

**Créé avec Manus** - [manus.im](https://manus.im)
