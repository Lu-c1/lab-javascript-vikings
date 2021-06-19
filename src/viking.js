// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = 100;
        this.strength = 80;
    }
}
soldier1.attack = function() {
    return `${this.strength}`
}

soldier1.receiveDamage(damage) = function() {
    return `${ (this.health) - this.receiveDamage} `
}

let soldier1 = (10, 8)

// Viking
class Viking extends Soldier {
    constructor(health, strength, name) {
        super(health, strength);
        this.name = name;
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