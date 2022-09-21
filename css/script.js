
  function personne (nom, prenom, age, sexe, adresse) {
    this.nom= nom
    this.prenom= prenom
    this.age= age
    this.sexe= sexe
    this.adresse=  adresse
}
let personne= new personne('abdou', 'ousmane', 24, 'Masculin', 'welsch')
console.log ( personne.nom, personne.prenom, personne.age, personne.sexe, personne.adresse )