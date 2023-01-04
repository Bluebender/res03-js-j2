let grades = [[20, 10], [15, 20], [13, 18]];

let average = 0;
let somme_total= 0;
let somme_inter = 0;
let nb_i_inter = 0;
let nb_i_total = 0;

for (grade of grades){
    for (let i=0; i<grade.length; i++){
        somme_inter = somme_inter + grade[i];
        console.log(`boucle dans la boucle ${somme_inter}`);
        nb_i_inter = grade.length;
    }
    somme_total = somme_total + somme_inter;
    somme_inter = 0;
    console.log(`boucle ${somme_total}`);
    nb_i_total = nb_i_total + nb_i_inter;
}
console.log(somme_total);
console.log(nb_i_total);
average = somme_total / nb_i_total;
console.log(average);
