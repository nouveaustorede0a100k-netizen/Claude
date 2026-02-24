# Utiliser ce dépôt avec Pinokio

Ce dépôt inclut les fichiers nécessaires pour l’installer comme **app Pinokio** et lancer Claude Code en local.

## Fichiers ajoutés

- **pinokio_meta.json** — Métadonnées de l’app (nom, description, URL).
- **pinokio.js** — Menu et entrées (Install, Start).
- **install.js** — Lance l’installateur officiel Claude Code (curl/Homebrew ou PowerShell selon l’OS).
- **start.js** — Lance la commande `claude` dans le terminal (dossier du repo = projet).
- **install_claude.js** — Script Node utilisé par `install.js` pour installer le CLI selon la plateforme.
- **icon.png** — Icône affichée dans Pinokio.

## Comment l’ajouter dans Pinokio

1. Ouvrez **Pinokio**.
2. Allez sur la page **Discover** (ou équivalent pour « ajouter une app depuis une URL »).
3. Ajoutez l’app via l’URL du dépôt :
   ```
   https://github.com/nouveaustorede0a100k-netizen/Claude
   ```
   (Si Pinokio propose « Add from URL » ou « Install from GitHub », collez cette URL.)
4. Téléchargez / installez l’app.
5. Cliquez sur **Install** une première fois (installe le CLI Claude Code sur votre machine).
6. Ensuite, cliquez sur **Start** pour lancer Claude Code dans le dossier du repo (plugins et commandes de ce dépôt seront disponibles).

## Après le premier Install

- **Start** ouvre un terminal et lance `claude` dans le répertoire du dépôt.
- Vous pouvez utiliser les **plugins** présents dans le dossier `plugins/` de ce repo.
- Pour réinstaller le CLI Claude Code, utilisez **Reinstall** dans le menu Pinokio.

## Prérequis

- **Node.js** (pour l’étape d’installation) — Pinokio l’inclut souvent.
- Connexion internet pour le premier Install (téléchargement du script officiel Claude Code).
