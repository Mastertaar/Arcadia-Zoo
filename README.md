# Ficher README.md

Mise en place de l'environnement de travail de Zoo-Arcadia.

Ecriture de la page principale du site web Index.html 

Index.html est devenu Index.ejs et a été divisé en plusieurs vues : 

-header.ejs
-main.ejs
-contact.ejs
-footer.ejs

Node et npm sont installés depuis vscode et plusieurs séries d'extension>
Afin de pouvoir accéder aéux différents fichiers depuis le fichier NODEJS principal App.js>
Les fonctions app.use sont installés et me redirigent vers le css; les images, les fonctions javascript>
app.set("view engine", "ejs") permet d'intégrer la technologie EJS

Le fichier de configuration .env me permet de stocker et d'accéder aux paramètres d'accès a la base de données>
le dossier conrolllers est créé et me pemret d'installer là toutes les fonctions en back-end du site:>
-Authentification
-inscription
-connecté
-connexion
-deconnexion

Le dossier routes est créé et me permet d'installer là la fonctionnalité de connexion a la base de données SQL, fichier db-config.js>
le fchier pages.js où la fonction router est créée grâce à Express et permet de lier et d'intégrer toutes les pages du site web + affichage modifi>é si l'user est connecté ou non>

app.js lie tous les fichiers du site entre elles et harmonise le fonctionnnement de l'appli.

Deploiement sur Heroku : 

Depuis la commande : 
Heroku login
puis Git push heroku main
