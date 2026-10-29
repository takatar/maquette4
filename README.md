# Le Mondrian — site vitrine

Résidence hôtelière à Saly Portudal (Sénégal). Site 100 % statique généré par **Vite + React 19 + TypeScript + Tailwind CSS v4**, servi par **nginx** dans un conteneur Docker.

| Élément | Valeur |
| --- | --- |
| Domaine de production | https://maquette4.immed-ia.com |
| Dépôt | https://github.com/takatar/maquette4.git |
| Port du conteneur | `80` (HTTP, derrière le reverse proxy Coolify/Traefik) |
| Dossier publié | `/usr/share/nginx/html` (contenu de `dist/`) |

---

## 1. Développement local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # génère dist/
npm run preview    # prévisualise dist/
```

> Sur Windows, `start-local.bat` sert le contenu de `dist/` via `serve.js`.

## 2. Docker

```bash
# Construction de l'image
docker build -t maquette4 .

# Exécution (le site répond sur http://localhost:8080)
docker run -d --name maquette4 -p 8080:80 maquette4
```

Le `Dockerfile` est en deux étapes :

1. `node:22-alpine` → `npm ci` puis `npm run build` (le site est compilé *pendant* le build Docker) ;
2. `nginx:stable-alpine` → ne reçoit que `dist/`, soit une image finale d'environ 110 Mo (dont 108 Mo de photographies).

`nginx.conf` gère : compression gzip, cache long pour `/assets/` (noms fingerprintés), cache 30 jours pour `/images/`, `index.html` non mis en cache, et repli SPA (`try_files … /index.html`).

## 3. Publication du code

```bash
git add .
git commit -m "Description du changement"
git push origin main
```

Coolify redéploie automatiquement à chaque `push` sur `main` (si l'auto-deploy est activé).

## 4. Déploiement Coolify

Voir la procédure détaillée : créer une ressource **Public Repository** (ou Private + clé de déploiement), *Build Pack* = **Dockerfile**, *Port exposé* = **80**, domaine `maquette4.immed-ia.com`.

## 5. Notes techniques

- Le lockfile `package-lock.json` doit rester synchronisé avec `package.json` : le build Docker utilise `npm ci`, qui échoue si les deux fichiers divergent. Après toute modification de dépendance : `npm install`.
- Les photographies sont volumineuses (~6 Mo chacune). Pour améliorer le temps de chargement, une conversion en WebP/AVIF serait recommandée à terme.
- Le dossier `images/` à la racine est un doublon de `public/images/` : seule la version dans `public/` est versionnée et publiée.
