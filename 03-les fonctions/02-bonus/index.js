// Exercice 1 : trier des nombres
// Créer une fonction sortNumbers qui retourne un tableau avec les nombres du tableau numbers triés du plus petit au plus grand.


// Ensuite faites en sorte d'ajouter un paramètre pour les classer du plus grand au plus petit.

// Vous n'avez pas le droit d'utiliser Array.sort ou toute autre fonction de tri fournie par JavaScript.

let numbers = [23,42,21,90,54,362,-12,57,78,84,35,546,-128,7,15,65,28];
let ordered_numbers = [];


function sortNumbers(numbers){
    let min = numbers[0];
    let max = numbers[0];
    for (number of numbers){
        if (number < min){
            min = number;
        }
    }
    for (number of numbers){
        if (number > max){
            max = number;
        }
    }
    console.log(min);
    console.log(max);
    ordered_numbers.push(min);
    console.log(ordered_numbers);
    let mintemp = min;
    for (i=0; i<numbers.length-1; i++){
        let variable = max;
        for (number of numbers){
            if (number < variable && number > mintemp){
                variable = number;
            }
        }
        console.log(variable)
        ordered_numbers.push(variable)
        mintemp=variable
    }
} 
sortNumbers(numbers);
console.log(ordered_numbers)

