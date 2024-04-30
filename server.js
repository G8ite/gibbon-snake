const express = require('express');
const app = express();
const path = require('path');

const port = 3000;
// Utiliser Phaser partout
app.use('/phaser', express.static(path.join(__dirname, 'node_modules/phaser')));
// Définir le chemin vers les fichiers statiques
app.use(express.static(path.join(__dirname, 'src')));

// Gérer les requêtes GET à la racine en renvoyant le fichier HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
