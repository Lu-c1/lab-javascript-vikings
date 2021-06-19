// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = 100;
        this.strength = 80;

        attack = function() {
            return `${this.strength}`
        }

        receiveDamage(damage) = function() {
            return `${ (this.health) - this.receiveDamage} `
        }
    }
}
let soldier1 = (10, 8)

// Viking
class Viking extends Soldier {
    constructor(name, health, strength, ) {
        super(health, strength);
        this.name = name;
        receiveDamage(damage) = function() {
            if (health > 0) {
                return `${ this.name} has received ${ this.damage} points of damage `;
            } else {
                return `${ this.name} has died in act of combat `;

            }

        }
        battleCry() = function() {
            return "Odin Owns You All!";
        }
    }

    // Saxon
    class Saxon {}

    // War
    class War {}



    // The following is required to make unit tests work.
    /* Environment setup. Do not modify the below code. */
    if (typeof module !== 'undefined') {
        module.exports = { Soldier, Viking, Saxon, War };
    }