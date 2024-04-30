# Utilisez l'image Node.js officielle
FROM node:22

# Créez un répertoire de travail pour l'application
WORKDIR /usr/src/app

# Copiez le package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers dans le répertoire de travail
COPY . .

# Exposez le port 3000
EXPOSE 3000

# Commande pour exécuter l'application
CMD ["node", "server.js"]
