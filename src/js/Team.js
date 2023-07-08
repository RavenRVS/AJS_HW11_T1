import Character from './Character';

export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    if (character instanceof Character) {
      this.characters.push(character);
    } else {
      throw new Error('Можно добавлять только объекты типа Character');
    }
  }

  [Symbol.iterator]() {
    let index = 0;
    const { characters } = this;

    return {
      next() {
        if (index < characters.length) {
          // eslint-disable-next-line no-plusplus
          return { value: characters[index++], done: false };
        }
        return { done: true };
      },
    };
  }
}
