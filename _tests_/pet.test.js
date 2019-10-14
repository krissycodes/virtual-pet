const pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new pet('bingo')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {
    it('sets the name property', () => {
      const pet = new pet('bingo');
      expect(pet.name).toEqual('bingo');
    });
  });
  
  describe('constructor', () => {
      it('has a initial age of 0', () => {
      const pet = new pet('bingo');
      expect(pet.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new pet('bingo');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });

  describe('constructor', () => {
      it('has a initial hunger level of 0', () => {
          const pet = new pet('bingo');
          expect(pet.hunger).toEqual(0);
      });
    });

    describe('growUp', () => {
        it('increments the hunger by 5', () => {
          const pet = new pet('bingo');
          pet.growUp();
          expect(pet.hunger).toEqual(5);
        });
      });

    describe('constructor', () => {
        it('has an initial fitness level of 0', () => {
            const pet = new pet('bingo');
            expect(pet.fitness).toEqual(0);
        });
    });

    describe('growUp', () => {
        it('increments the fitness by -3', () => {
          const pet = new pet('bingo');
          pet.growUp();
          expect(pet.age).toEqual(-3);
        });
      });

      describe('walk', () => {
        it('increases fitness by 4', () => {
          const pet = new pet('bingo');
          pet.fitness = 4;
          pet.walk();
          expect(pet.fitness).toEqual(8);
        });
      });

      describe('walk', () => {
        it('increases fitness by to a maximum of 10', () => {
          const pet = new pet('bingo');
          pet.fitness = 8;
          pet.walk();
          expect(pet.fitness).toEqual(10);
        });
      });

      describe('feed', () => {
          it('increases hunger by -3', () => {
              const pet = new pet('bingo');
              pet.feed = -3;
              pet.feed();
              expect(pet.feed).toEqual(-3)
              });
      });
      
      describe('feed', () => {
        it('increases hunger to a minium of 0', () => {
          const pet = new pet('bingo');
          pet.feed = -3;
          pet.feed();
          expect(pet.fitness).toEqual(-3);
        });
      });

      describe('feed', () => {
        ...
        it('throws an error if the pet is not alive', () => {
            const pet = new Pet('Fido');
            
            pet.age = 30;
            
            expect(pet.feed).toThrow('Your pet is no longer alive :(');
          });
        });
      });