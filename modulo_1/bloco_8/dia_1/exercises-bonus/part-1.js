const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Ex 1
const dragonDamage = () => {
  let damage = dragon.strength;
    damage = (Math.random() *damage) + 15;
    if(damage >=15 && damage <= dragon.strength){
      return dragon.damage = damage;
    } else {
      dragonDamage();
    }
  }
  
  // Ex 2
  const warriorDamage =() => {
  let damage = warrior.strength;
  const maxDamage = damage * warrior.weaponDmg;
  damage = Math.random() * maxDamage + damage;
  if (damage>=warrior.strength && damage <= maxDamage) {
    return warrior.damage = damage;
  } else {
    warriorDamage();
  }
}

// Ex 3
const mageDamage = () => {
  const turn = {};
  const intelligence = mage.intelligence;
  const damage = Math.random() * (intelligence * 2) +intelligence;
  if (damage >=intelligence && damage <= intelligence*2 && mage.mana >15) {
    mage.damage = damage;
    turn.damage = damage;
    mage.mana-= 15;
    turn.mana = mage.mana; 
  } else {
    mageDamage();
  }
  if (mage.mana < 15) 'Não possui mana suficiente!';
}

// Parte 2
const warriorTurn = (warriorFunc) => {
  const warriorDamage = warriorFunc();
  dragon.healthPoints -= warriorDamage;
  warrior.damage = warriorDamage;
};

const mageTurn = (mageFunc) => {
  mageFunc();
  dragon.healthPoints -= mage.damage;
  mage.damage = mage.damage;
  mage.mana = mage.mana;
}

const dragonTurn = (dragonFunc) => {
  const dragonDamage = dragonFunc();
  mage.healthPoints -= dragonDamage;
  warrior.healthPoints -= dragonDamage;
  dragon.damage =dragonDamage; 
}

const gameActions = {
 

}
gameActions.warriorTurn = warriorTurn(warriorDamage);
gameActions.mageTurn = mageTurn(mageDamage);
gameActions.dragonTurn = dragonTurn(dragonDamage);
const batttleMembersFunc= (battleMembers) => console.log(battleMembers);
gameActions.batttleMembersFunc = batttleMembersFunc(battleMembers);
gameActions;