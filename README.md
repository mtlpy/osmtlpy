osmtlpy
=======

Si les cartes sont devenues incontournables dans notre quotidien, ce que l'on y cherche n'apparaît jamais distinctement.
Pourquoi les restaurants sont-ils toujours affichés alors que l'on recherche une simple station de métro?
Cette dilution de l'information nous fait parfois perdre un temps précieux,
et pourtant créer des cartes thématiques dans lesquelles l'information est affichée clairement est plus simple
qu'il n'y paraît. L'aventure vous tente?

[Montréal Python](http://montrealpython.org) et [OpenStreetMap Montréal](http://osmtl.org) vous proposent un atelier hors de l'ordinaire:
venez vous amuser avec nous à créer des cartes interactives, à l'aide de Python, Leaflet et OpenStreetMap!


La partie Leaflet
-----------------

Cette partie de l'atelier vous propose d'explorer la création de cartes avec Leaflet. En voici un résumé.

On découvre premièrement [OpenStreetMap](http://openstreetmap.org/) et son [architecture](http://wiki.openstreetmap.org/wiki/Component_overview). On s'intéresse ensuite à l'[Overpass API](http://wiki.openstreetmap.org/wiki/Overpass_API), que l'on utilise pour extraire des données en format GeoJSON.

Pour ce faire, nous utilisons cet outil: http://overpass-turbo.eu/

Le langage de requête de l'Overpass API peut sembler difficile à apprendre, mais la [documentation](http://wiki.openstreetmap.org/wiki/Overpass_API/Language_Guide) aide à s'y retrouver.

Finalement, nous utilisons [Leaflet](http://leafletjs.com/) pour afficher un fichier GeoJSON que nous avons généré grâce à l'Overpass API. Les exemples utilisés dans l'atelier sont dans le répertoire "leaflet".

Pour exécuter les exemples, il suffit d'aller dans le répertoire, et de lancer le serveur Web intégré de Python 2.x:

    $ python -m SimpleHTTPServer

On peut alors pointer son navigateur sur l'adresse suivante pour voir la carte : http://localhost:8000/

Prenez note : le navigateur Web Chrome ne fonctionne pas bien avec le serveur intégré du module Python SimpleHTTPServer. Utilisez Firefox pour de meilleurs résultats.


La partie Python
----------------

Pour installer le projet osmtlpy, veuillez suivre les instruction suivantes
(veuillez noter que cela a été testé sur une Linux avec python 2.7.5):

Assurez vous d'avoir les sources du projet:

    $ git clone https://github.com/mtlpy/osmtlpy.git

Installez virtualenv et pip si ce n'est déjà fait:

    $ sudo apt-get install python-virtualenv python-pip

Créez un nouveau virtualenv au bon endroit:

    $ cd osmtlpy
    $ virtualenv .
    $ source bin/activate

Installer le projet et ses dépendances dans le virtualenv

    $ cd python
    $ python setup.py develop
    $ osmtlpy

Vous n'avez qu'à ouvrir votre navigateur à l'adresse suivante: http://127.0.0.1:5000/
