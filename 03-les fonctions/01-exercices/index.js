// Exercice 1 : Créer des fonctions pour les opérations de base

// Créer une fonction add qui prend deux nombres en paramètres, et en retourne la somme.
function add(a, b){
    let result = a + b;
    return result;
}
// let result1 = add(426, 125);
// console.log(`La somme de a + b est ${result1}`);

// Créer une fonction sub qui prend deux nombres en paramètres, et en retourne la différence.
function sub(a, b){
    let result = a - b;
    return result;
}
// let result2 = sub(426, 125);
// console.log(`La différence de a - b est ${result2}`);

// Créer une fonction mult qui prend deux nombres en paramètres, et en retourne le produit.
function mult(a, b){
    let result = a * b;
    return result;
}
// let result3 = mult(426, 125);
// console.log(`Le produit de a * b est ${result3}`);

// Créer une fonction div qui prend deux nombres en paramètres, et en retourne le quotient.
function div(a, b){
    let result = a / b;
    return result;
}
// let result4 = div(426, 125);
// console.log(`La division de a / b est ${result4}`);

// Créer une fonction mod qui prend deux nombres en paramètres, et en retourne le reste.
function mod(a, b){
    let result = a % b;
    return result;
}
// let result5 = mod(426, 125);
// console.log(`Le reste de a / b est ${result5}`);




// Exercice 2 : une fonction pour interroger l'utilisateur

// Créer une fonction askUserOperation qui demande à l'utilisateur quelle opération il veut faire, et renvoie cette valeur.
function askUserOperation (){
    let operation = window.prompt("quelle opération souhaitez vous faire ? +, -, *, /, % ?")
    return operation;
}
// let result6 = askUserOperation();
// console.log(result6);

// Créer une fonction askUserFirstNumber qui demande à l'utilisateur de choisir un premier nombre, et renvoie cette valeur.
function askUserFirstNumber (){
    let number = window.prompt("Quel est votre premier nombre ?")
    return number;
}
// let result7 = askUserFirstNumber();
// console.log(result7);

// Créer une fonction askUserSecondNumber qui demande à l'utilisateur de choisir un second nombre, et renvoie cette valeur.
function askUserSecondNumber (){
    let number = window.prompt("Quel est votre second nombre ?")
    return number;
}
// let result8 = askUserSecondNumber();
// console.log(result8);




// Exercice 3 : une fonction pour les gouverner toutes

// Créer une fonction calculator qui va appeler les fonctions de l'exercice 2 pour récupérer les infos de l'utilisateur puis va appeler les fonctions de l'exercice 1 selon ce qu'à choisi l'utilisateur.
function calculator (){
    let number1 = parseInt(askUserFirstNumber());
    let operation = askUserOperation();
    let number2 = parseInt(askUserSecondNumber());
    let result;
    
    if (operation === "+"){
        result = add(number1, number2);
    }
    else if (operation === "-"){
        result = sub(number1, number2);
    }
    else if (operation === "*"){
        result = mult(number1, number2);
    }
    else if (operation === "/"){
        result = div(number1, number2);
    }
    else if (operation === "%"){
        result = mod(number1, number2);
    }
    else{
        result = "non valide"
    }
    return result;

}

// 🔵 N'oubliez pas d'appeler votre fonction calculator à la fin de votre code pour que cela puisse fonctionner

let resultat = calculator();
window.alert(`Le résultat est ${resultat}`);
