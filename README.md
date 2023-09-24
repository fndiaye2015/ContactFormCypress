# Fake-contact Form

## Objectif :
Mise en place de script d'automatisation pour valider le bon fonctionnement du formulaire de contact.

## Analyse fonctionnelle
Ce produit est en MVP. 
L'objectif principal des tests est de s'assurer qu'utilisateur puisse renseigner les champs obligatoires correctement et envoyer un message.

**NB**: Il n'y a pas de Base de données où seront stockées les infos.

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
- *Nom cas de test:* ETQ utilisateur renseigner les champs prenom et nom avec des espaces
- *Résultat attendu:* Un message d'erreur est affiché
