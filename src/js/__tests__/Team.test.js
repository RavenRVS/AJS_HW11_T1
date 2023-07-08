import Team from '../Team';
import Character from '../Character';

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  it('should be able to add a character', () => {
    const character = new Character('John', 'warrior', 100, 10, 50, 30);

    team.addCharacter(character);

    expect(team.characters).toContain(character);
  });

  it('should throw an error when adding a non-Character object', () => {
    const invalidObject = {};

    expect(() => {
      team.addCharacter(invalidObject);
    }).toThrowError('Можно добавлять только объекты типа Character');
  });

  it('should iterate over the members using Symbol.iterator', () => {
    const character1 = new Character('John', 'warrior', 100, 10, 50, 30);
    const character2 = new Character('Jane', 'mage', 80, 12, 60, 20);
    team.addCharacter(character1);
    team.addCharacter(character2);

    const iteratedMembers = Array.from(team);

    expect(iteratedMembers).toEqual([character1, character2]);
  });
});
