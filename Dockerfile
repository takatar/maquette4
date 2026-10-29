# syntax=docker/dockerfile:1

# =============================================================
#  Étape 1 — Compilation de l'application Vite + React + TS
# =============================================================
FROM node:22-alpine AS build

WORKDIR /app

# Les dépendances sont copiées seules pour profiter du cache Docker :
# tant que package.json / package-lock.json ne changent pas, npm ci n'est pas rejoué.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Code source, assets publics et configurations
COPY . .

# Génère le dossier statique /app/dist
RUN npm run build


# =============================================================
#  Étape 2 — Serveur HTTP de production (image finale légère)
# =============================================================
FROM nginx:stable-alpine AS runtime

# Configuration nginx dédiée (SPA, cache, compression, en-têtes de sécurité)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Uniquement les fichiers statiques compilés
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
