// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        console.log(this.health - damage);
    }

}


// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        let healthViking = this.health - damage;
        if (healthViking > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

//<------- in code pen works properly but here by some reason there´s a problem with receiveDamage when passing tests----->


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        let healthSaxon = this.health - damage;
        if (healthSaxon > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        let vikingArmy = []
        for (let viking of vikingArmy) {
            vikingArmy.push(viking);
        }
    }
    addSaxon(saxon) {
            let saxonArmy = []
            for (let i = 0; i < saxon.length; i++) {
                saxonArmy += saxon[i];

            }
        }
        // <------------ this are the two ways I think you can add vikings and saxons to the army, but doesn´t pass test --------->

    vikingAttack() {

        let saxonAttacked = Math.floor(Math.random() * this.saxon);
        let vikingAttacker = Math.floor(Math.random() * this.viking);
        saxonAttacked.damage = vikingAttacker.strength
        if (saxonAttacked.health < 0) {
            return saxonArmy.pop(saxonAttacked);
        } else {

            return saxonAttacked.receiveDamage()
        }

    }
    saxonAttack() {
            let vikingAttacked = Math.floor(Math.random() * this.viking);
            let saxonAttacker = Math.floor(Math.random() * this.saxon);
            vikingAttacked.damage = saxonAttacker.strength
            if (vikingAttacked.health < 0) {
                return vikingArmy.pop(vikingAttacked);
            } else {

                return vikingAttacked.receiveDamage()
            }

        }
        // <--- Could it be possible vikingAttack and SaxonAttack are not pasing tests because the viking and the saxon are not added to the armies? --->

    //Generic Function

    attack() {
        let soldier1 = Math.floor(Math.random() * this.viking);
        let soldier2 = Math.floor(Math.random() * this.saxon);
        soldier1.damage = soldier2.strength
        soldier2.damage = soldier1.strength

        if (soldier1.health < 0) {
            return vikingArmy.pop(soldier1);
        } else if (soldier2.health < 0) {
            return saxonArmy.pop(soldier2);
        } else {
            return soldier1.receiveDamage() || soldier2.receiveDamage();
        }

    }


    showStatus() {
        if (this.saxonArmy === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}