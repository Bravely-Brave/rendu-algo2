let perso = {
    name: 'John',
    hp: 10
}

const music = [
    "Anissa - Wejdene",
    "Santé - Stromae",
    "As it was - Harry Style",
    "Remember this - NF",
    "Clouds - NF"

]

let trajet = {
    changes: 0,
    radio: music[0],
    redlights: 30,
}

var min = 0
var max = 5

function takeTaxi(perso, trajet) {
    while (trajet.redlights > 0){
        return Math.floor(Math.random(5) * (max -min) ) + 1 /*pour generer un nombre aleatoire qui fait plus que 1 */
        if (music[random] != music[0]){
            console.log( perso.name + ' il n\'a pas entendu anissa ')
            
        } else { 
            // console.log ( perso.hp - 1)
            // console.log ( trajet.changes - 1)
            let damage = perso.hp - 1
            actualhp = damage
             let onceagain = changes + 1
//             
            
        }
        

        if(trajet.hp == 0){
            console.log('explosion')
        }
        
  
        
    }

function arrivedHome() {
     /* pour la fin*/
    if(trajet.redlights == 0) {
        console.log('il est bien arrivé') 
    } 

   
           

}
}

/* first try */
// class Personnage{
//     constructor(name, hp) {
//         this.name = name
//         this.hp = hp
//     }


// }

// // class Trajet{
// //     constructor(radio, feux, changement) {
// //         this.radio = radio
// //         this.feux = feux
// //         this.changement = changement
// //     }

// // }


// let john = new Personnage('john', 10) 
// console.log(john)
// let maison = new Trajet('maison', )
// let music = ['Anissa - Wejdene', 'Santé - Stromae' , 'As it was - Harry Styles',
//  'Remember this - NF', 'Clouds - NF']
//  console.log(music)


/*Exo 1 : Le taxi​
​
 Anissa de Wejdene Dès qu’il entend -> il perd 1 de santé mentale et change de taxi.​
​
Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux rouges de chez lui.​
​
À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.​
​


si il entend music wej , il perd 136.

Deux possibilités de fin :​
- Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et qu’il lui a fallut x changements de taxi pour y arriver​
- Sa santé mentale tombe à 0, il explose et donc affiche « explosion »​ ok


​
Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.​
Nous avons besoin d’une liste de 5 musiques dont Anissa - Wejdene​ -> ok
Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements -> ok*/
