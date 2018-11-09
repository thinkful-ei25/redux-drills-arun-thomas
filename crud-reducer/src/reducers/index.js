import {ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../actions';

const initialState = {
    items: []
};

export const crudReducer = (state=initialState, action) => {
    // Add code which handles each action here
    if (action.type === ADD_ITEM) {
        // Create a new array with the action's item appened to state.items
        const newItems = [...state.items, action.item];
        // Overwrite the items array in state with our new items array
        const newState =  {
            ...state,
            items: newItems,
        };

        return newState;
    }
    else if (action.type === UPDATE_ITEM) {
    }
    else if (action.type === DELETE_ITEM) {
    }
    return state;
};
