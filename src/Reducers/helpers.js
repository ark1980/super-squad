import characters_json from '../data/characters.json';

export const createCharacter = (id) => { 
    let character = characters_json.find(character => character.id === id);
    return character;
}
