pour configurer automatiquement le proxy, a la fois chez moi et à la FAC :

placer le script "proxy" dans /etc/NetworkManager/dispatcher.d
puis mettre les droits pour que ça fonctionne : 

sudo chown root:root /etc/NetworkManager/dispatcher.d/proxy
sudo chmod 755 /etc/NetworkManager/dispatcher.d/proxy

et utiliser le fichier PAC (voir PJ, fichier "proxy.pac") pour la configuration du navigateur

sous firefox : avancé > réseau > paramètres
sélectionner "adresse de configuration automatique du proxy"
donner le chemin du fichier .pac
