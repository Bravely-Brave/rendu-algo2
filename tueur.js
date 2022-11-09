let tueur = {
    name: 'Jason',
    hp: 100,
    attack: 9,
   /* point de dégat*/ pd: 0
}

getAttack (Survivor) {
    return perso.attack
}
    




class Survivor{
    constructor(sname, caract, hp ){
        this.sname = sname
        this.caract = caract
        this.hp = hp
        

    }

    getCaract () {
        return this.caract

    }

    getName () {
        return this.sname
    }


   
        
    
    

}

const caract = [ " blond " , " nerd " , " bavard " , " crazy ", " peureux "]

const snames = [
    'Pedro',
    'Megameow',
    'Sicka',
    'Ladybug', 
    'Cruella'
]

let survivor1 = new Survivor(
    snames[Math.floor(Math.random() * snames.length)],
    caract[Math.floor(Math.random() * caract.length)],
    100

    
)

let survivor2 = new Survivor(
    snames[Math.floor(Math.random() * snames.length)],
    caract[Math.floor(Math.random() * caract.length)],
    100
    
    
)

let survivor3 = new Survivor(
    snames[Math.floor(Math.random() * snames.length)],
    caract[Math.floor(Math.random() * caract.length)],
    100
    
    
)

let survivor4 = new Survivor(
    snames[Math.floor(Math.random() * snames.length)],
    caract[Math.floor(Math.random() * caract.length)],
    100
    
)

let survivor5 = new Survivor(
    snames[Math.floor(Math.random() * snames.length)],
    caract[Math.floor(Math.random() * caract.length)],
    100
    
    
    
)

/*les noms se répète je ne comprends passsssssssss pourquoi : ( */
console.log(survivor1.getCaract() )
console.log(survivor1.getName() )

console.log(survivor2.getCaract() )
console.log(survivor2.getName() )

console.log(survivor3.getCaract() )
console.log(survivor3.getName() )

console.log(survivor4.getCaract() )
console.log(survivor4.getName() )

console.log(survivor5.getCaract() )
console.log(survivor5.getName() )

while (tueur.hp > 0 || Survivor.hp > 0 ){
    tueur.getAttack(Survivor)

    if(tueur.hp == 0){
        console.log (Survivor.sname + 'est mort')
        break
     } else {
        let damage = tueur.hp - 10 
        actualhp = damage
        console.log (tueur.name + " a subit 10 points de dégats " + actualhp + "80hp")

     }
    }








/*Exo 2 : 
Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt.​
Une équipe de choc est présente pour le neutraliser.​
​
Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie.​
Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…), 
une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2)​
Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une caractéristique 
prise de celles disponibles (toujours aléatoire).​
​
Tant que le tueur n’a pas tué les survivants ou que les survivants n’ont pas tué Jason :​
​
Le tueur attaque un des survivants :​
- soit le survivant meurt​
- soit le survivant esquive et inflige 10 points de dégâts​
- soit le survivant inflige 15 points de dégâts mais meurt​
​
Les morts seront affichés à la fin​
​
Un message est attendu pour chaque action 
(Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort, Les survivants ont gagné mais RIP à X, X, X…)*/​
