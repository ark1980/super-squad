import { ADD_CHARACTER } from '../Actions';
import { createCharacter } from './helpers';

const heros = (state = [], action) => {
    switch(ADD_CHARACTER){
        case ADD_CHARACTER:
            //let heros = [...state, createCharacter(action.id)];
            return state.concat([createCharacter(action.id)]);
        default:
            return state; 
    }
}

export default heros;