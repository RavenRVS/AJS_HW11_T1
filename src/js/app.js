import Character from './Character';
import Team from './Team';

const team = new Team();
team.addCharacter(new Character('Лучник 1', 'Bowman', 50, 1, 40, 10));
team.addCharacter(new Character('Лучник 2', 'Bowman', 50, 1, 40, 10));
team.addCharacter(new Character('Маг', 'Mage', 60, 2, 60, 20));

for (const character of team) {
  console.log(character);
}
