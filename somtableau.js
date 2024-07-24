function maxmin(tableau){
    let somme=0;
    for(let i of tableau){
        somme+=i;
    }


    console.log(somme); 
} 
// Appel a la fonction
maxmin([11, 27, 89, 10, 7, 21, 19]);

maxmin([1, 45, 19, 7, 0, 5 ]);