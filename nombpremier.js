function Premier(valeur) {
    for(var i = 2; i < valeur; i++)
      if(valeur % i === 0) return false;
    return valeur > 1;
  }
 //Appel a la fonction 
  console.log(Premier(17));
  console.log(Premier(35));