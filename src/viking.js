// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = 100;
        this.strength = 80;

        attack(); {
            return `${this.strength}`;
        }

        receiveDamage(damage); {
            return `${(this.health) - this.receiveDamage}`;

        }
    }
}


// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
        receiveDamage(damage); {
            if (health > 0) {
                return `${ this.name } has received ${ this.damage } points of damage `;
            } else {
                return `${ this.name } has died in act of combat `;
            }
        }
        battleCry(); {
            return "Odin Owns You All!";
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
        receiveDamage(damage); {
            if (health > 0) {
                return `A Saxon has received ${this.damage}points of damage`;
            } else {
                return "A Saxon has died in combat";
            }
        }
    }
}


// War
class War {
    constructor(vikingArmy, saxonArmy) {

        this.vikingArmy = []
        this.saxonArmy = []

        addViking(viking); {
            let vikingArmy = []
            for (let i = 0; i < viking.length; i++) {
                vikingArmy += viking[i]
                return vickingArmy;
            }

        }

        addSaxon(saxon); {
            let saxonArmy = []
            for (let i = 0; i < saxon.length; i++) {
                saxonArmy += saxon[i];
                return saxonArmy;
            }
        }
        vikingAttack(); {

            let attack = saxon.receiveDamage = viking.strength
            if (saxon.health < 0) {
                return finish;
            } else {
                return attack;
            }

        }
        saxonAttack(); {
            let attackSaxon = viking.receiveDamage = saxon.strength
            if (saxon.health < 0) {
                return finish;
            } else {
                return attackSaxon;
            }
        }
        showStatus(); {
            let attack = vikingAttack() + saxonAttack()

            if (saxon.length === 0) {
                return "Vikings have won the war of the century!";
            } else if (viking.length === 0) {
                return "Saxons have fought for their lives and survived another day...";
            } else {
                return "Vikings and Saxons are still in the thick of battle.";
            }
        }
    }
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}