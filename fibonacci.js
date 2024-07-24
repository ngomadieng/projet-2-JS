function fibonacci(valeur) {

    var x = 0;
    var y = 1;
    var somme = 0;
  
    for(let i = 2; i <= valeur; i++){
       //somme des deux derniers nombres
       somme = x + y; 
 
       //affecter la dernière valeur à la première
       x = y; 
 
       //attribuer la somme au dernier
       y = somme; 
    }
  
    return valeur ? y : x;
 }
 //Appel a la fonction 
 console.log(fibonacci(10));
 console.log(fibonacci(5));