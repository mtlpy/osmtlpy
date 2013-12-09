osmtlpy
=======

Si les cartes sont devenues incontournables dans notre quotidien, ce que l'on y cherche n'apparaît jamais distinctement.
Pourquoi les restaurants sont-ils toujours affichés alors que l'on recherche une simple station de métro?
Cette dilution de l'information nous fait parfois perdre un temps précieux,
et pourtant créer des cartes thématiques dans lesquelles l'information est affichée clairement est plus simple
qu'il n'y paraît. L'aventure vous tente?

Montréal Python vous propose un atelier hors de l'ordinaire: venez vous amuser avec nous à créer des cartes interactives,
à l'aide de Python, Leaflet et OpenStreetMap!

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
