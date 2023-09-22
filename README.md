# Fake-contact Form

## Objectif :
Mise en place de script d'automatisation pour valider le bon fonctionnement du formulaire de contact.

## Analyse fonctionnelle
Ce produit est en MVP. Il a pour objectif, permettre aux utilisateurs de rentrer leurs informations.

NB: Il n'y a pas de Base de données où seront stockées les infos.

Pour une version MVP. On doit s'assurer que ces cas ci-dessous sont pris en compte:

1. 
- *Nom cas de test:* ETQ utilisateur pourvoir renseigner toutes les informations obligatoires puis cliquer sur le boutton envoyer
- *Résultat attendu:* Données enregistrées dans la base et message succès affiché  

2. 
- *Nom cas de test:* ETQ utilisateur renseigner tous les champs, sauf les champs obligatoires (Nom ou prénom)
- *Résultat attendu:* Un message d'erreur est affiché

3. 
- *Nom cas de test:* Le champs numéro de téléphone ne doit pas contenir de lettre
- *Résultat attendu:* Un message d'erreur est affiché

4. 
- *Nom cas de test:* ETQ utilisateur cliquer sur le boutton envoyer sans renseigner aucun champs
- *Résultat attendu:* Un message d'erreur est affiché
