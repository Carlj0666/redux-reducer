let state

// let action = {type: 'INCREASE'}

// REDUCER
export function managePresents(state = {numberOfPresents: 0}, action) {
    switch (action.type) {
        case 'INCREASE':
        // increase
        return {numberOfPresents: state.numberOfPresents + 1}
        default:
            // Return number of presents unchanged
            return state 
    }

}
