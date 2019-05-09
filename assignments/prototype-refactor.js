/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
    constructor(attributes) {
    this.createdAt = Date();
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats)
        this.healthPoints = stats.healthPoints;
        }
        takeDamage() {
            return `${this.name} took damage.`;
        }
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
  constructor(humanAttributes) {
    super(humanAttributes);
    this.team = humanAttributes.team;
    this.weapons = humanAttributes.weapons;
    this.language = humanAttributes.language;
    this.spellPower = humanAttributes.spellPower;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
class Warlock extends Humanoid {
    constructor(evilAttributes) {
        super(evilAttributes);
    }
    eldritchBlast(target) {
        let spellTarget = target;
        let caster = this.name;
        let damage = this.spellPower * 10;
        return function() {
            Object.defineProperty(spellTarget, "healthPoints", {value: spellTarget.healthPoints - damage});
            if (spellTarget.healthPoints > 0) {
              return `${caster} summons a blast of pure chaos descending from the Eldritch Moon itself. ${spellTarget.name} takes ${damage} chaos damage. ${spellTarget.name} has ${spellTarget.healthPoints} HP remaining.`;
            } else return `${caster}'s chaotic ways have torn ${spellTarget.name} to pieces, ${spellTarget.name} has died.`;
          }() 
    }
}

class Shadowdancer extends Humanoid {
    constructor(goodAttributes) {
        super(goodAttributes);
    }
    psychicKnife(target) {
        let spellTarget = target;
        let caster = this.name;
        let damage = this.spellPower * 10;
        return function() {
            Object.defineProperty(spellTarget, "healthPoints", {value: spellTarget.healthPoints - damage});
            if (spellTarget.healthPoints > 0) {
              return `OMG ${caster} stabs ${spellTarget.name} with a flurry of stabs from his Psychic Knife! ${spellTarget.name} takes ${damage} psychic damage. ${spellTarget.name} has ${spellTarget.healthPoints} HP remaining.`;
            } else return `${caster}'s Psychic power overwhelms ${spellTarget.name}, ${spellTarget.name} has died.`;
          }() 
    }
}

class GymnastWizard extends Humanoid {
    constructor(ambiguousAttributes) {
        super(ambiguousAttributes)
    }
    backflipAppleToss(target1, target2) {
        let spellTarget1 = target1;
        let spellTarget2 = target2;
        let caster = this;
        let damage = this.spellPower * 10;
        return function() {
        Object.defineProperty(spellTarget1, "healthPoints", {value: spellTarget1.healthPoints + damage});
        Object.defineProperty(spellTarget2, "healthPoints", {value: spellTarget2.healthPoints + damage});
        Object.defineProperty(caster, "healthPoints", {value: caster.healthPoints - 2 * damage});
        return `${caster.name} appears athletically from the shadows and casts her signature spell Backflip Apple Toss. The sacrificial fruit heal successfully increases ${spellTarget1.name}'s HP to ${spellTarget1.healthPoints} and ${spellTarget2.name}'s HP to ${spellTarget2.healthPoints}, but lowers ${caster.name}'s own HP to ${caster.healthPoints}. No springs attached!`;
    }()
    }
}

const badDude = new Warlock({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 1,
    height: 1
  },
  healthPoints: 100,
  name: "Schmebulock",
  team: "Gnome",
  weapons: ["Cantrips", "Wand"],
  language: "Gnomish",
  spellPower: 7
});

const goodDude = new Shadowdancer({
  createdAt: new Date(),
  dimensions: {
    length: 10,
    width: 3,
    height: 4
  },
  healthPoints: 100,
  name: "Hendrix",
  team: "Myconid",
  weapons: ["Shadows", "Breakdancing"],
  language: "Myconish?",
  spellPower: 5
});

const mumbleBunny = new GymnastWizard({
  createdAt: new Date(),
  dimensions: {
    length: 0.1,
    width: 0.1,
    height: 0.1
  },
  healthPoints: 100,
  name: "Mumble Bunny",
  team: "Gymnasts",
  weapons: ["Springs", "Somersaults"],
  language: "Pommel Horse",
  spellPower: 2
});
console.log(goodDude);
console.log(badDude);
console.log(mumbleBunny);
console.log(goodDude.psychicKnife(badDude));
console.log(badDude.eldritchBlast(goodDude));
console.log(goodDude.psychicKnife(badDude));
console.log(mumbleBunny.backflipAppleToss(badDude, goodDude));
console.log(goodDude.psychicKnife(mumbleBunny));
console.log(badDude.eldritchBlast(goodDude));
