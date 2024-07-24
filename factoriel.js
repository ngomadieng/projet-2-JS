function factoriel(valeur){
    var i, valeur, f = 1;
  
    for(i = 1; i <= valeur; i++)  
    {
      f *= i;   // ou f *= i;
    }  
    return f;
  }
  
  console.log(factoriel(5));