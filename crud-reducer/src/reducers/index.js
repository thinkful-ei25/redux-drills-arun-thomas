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
        // Create a new array with all the same items, except for the one where the id matches
        // action.item = {
        //   id: 2,
        //   name: 'Hi',
        // }
        // const newItems = state.items.map((item) => {
        //     if (item.id === action.item.id) {
        //         return action.item;
        //     }

        //     return item;
        // });

        return {
            ...state,
            items: state.items.map(item => item.id === action.item.id ? action.item : item)
        };
    }
    else if (action.type === DELETE_ITEM) {
    }
    return state;
};
