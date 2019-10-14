const MAXIMUM_FITNESS = 10;
 
 function pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
  };

  pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };
  
        
  pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };

   pet.prototype.walk = function() {
    if ((this.fitness + 4) <= 10 ) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  };

 pet.prototype.feed = function() {
     if ((this.hunger -3) >= 0 ) {
         this.hunger -= 3;
     } else {
         this.hunger = 0;
     }
 };

    pet.prototype.checkUp = function() {
    if ((this.fitness < 3)) {
        console.log("I need a walk");
    } 
    else if ((this.hunger > 5)) {
        console.log("I am hungry");
    }
    else if ((this.hunger < 5 && this.fitness > 3)) {
        console.log("I am hungry AND I need a walk");
    }
    else if ((this.hunger > 5 && this.fitness < 3)) {
        console.log("I feel great");
    };
};

pet.prototype.isAlive = function() {
    if (this.fitness === 0 || this.age >= 30 || this.hunger >= 10) {
        throw new Error('Your pet is no longer alive :(');
    }
    else return true;
    }

module.exports = pet;



