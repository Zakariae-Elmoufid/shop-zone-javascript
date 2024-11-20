 Calcul de Facture avec Ajout d'Items

Objectif :
Créer une page HTML qui affiche une facture avec des items. L'apprenant doit utiliser JavaScript pour calculer le total de chaque item (quantité * prix unitaire) et le total de la facture. Il doit également pouvoir ajouter de nouveaux items à la facture.
Étape 1 : Structure HTML  (déjà donné)
Étape 2 : Script JavaScript (à compléter)

Explications :
HTML : La structure de la facture avec un tableau contenant des inputs pour les quantités et les prix unitaires, et des cellules pour les totaux. Le bouton "Ajouter un item" qui appelle la fonction addNewItem() lorsqu'il est cliqué.
CSS : Du style pour rendre la facture visuellement attrayante.
JavaScript : 
La logique pour calculer les totaux des items et le total de la facture. Les fonctions updateItemTotal et updateInvoiceTotal sont appelées lors des modifications des valeurs des inputs.
La fonction addNewItem() crée une nouvelle ligne dans le tableau avec des inputs pour la quantité et le prix unitaire, et ajoute des écouteurs d'événements pour recalculer les totaux lorsqu'une valeur change.



