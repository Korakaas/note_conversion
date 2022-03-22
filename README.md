# note_conversion
Si l’utilisateur clique sur le bouton “notation”,  un formulaire
comportant un menu déroulant  permettant à l’utilisateur de choisir une note
de musique en notation classique apparait.
Lorsque l’utilisateur choisit une note :
Envoie au serveur PHP une requête AJAX en envoyant la valeur de l’élément et en récupérant en Javascript
l’URL du script PHP dans l’attribut ACTION de l’élément FORM.
Sur le serveur
À l’aide de la valeur du SELECT, il doit retrouver dans son tableau de correspondance (array) sa correspon-
dance américaine 
Retourne le message «La notation américaine pour la note X est X». Javascript le récupère
et l’affiche dans un élément de la page
