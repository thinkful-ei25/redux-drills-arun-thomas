import {SET_LANGUAGE} from '../actions';

// Add your code for the languageReducer
const initialState = {language: 'en'};
export function languageReducer(state = initialState, action) {
  if (action.type === SET_LANGUAGE) {
    return {
      ...state,
      language: action.language
    }
  }
  return state;
}
