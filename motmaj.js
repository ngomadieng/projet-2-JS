function motmaj(chaine){
    let mots= chaine.split(' ');
    let array=[];

    mots.forEach(mots => {
        let premier=mots.charAt(0).toUpperCase();
        let replacer=mots.replace(mots.charAt(0),premier);
        array.push(replacer);
        
    });
   console.log(array.join(' '));
} 
// Appel a la fonction

motmaj("je suis fatigue coach");
