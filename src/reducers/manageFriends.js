
let state = {friends: []}

let action = {
    type: "ADD_FRIEND",
    friend: {
      name: "Chrome Boi",
      hometown: "NYC",
      id: 1
    }
}

export function manageFriends(state, action){
    switch (action.type) {
        //SEE DON'T MUTATE STATE SECTION..
        case 'ADD_FRIEND':
        //INCREASE
            return{friends: state.friends.concat(action.friend)}
        
        case 'REMOVE_FRIEND':
        //SEE DON'T MUTATE STATE SECTION..
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        return (
          {...state,
              friends: [
                ...state.friends.slice(0, removalIndex),
                ...state.friends.slice(removalIndex + 1)
              ]
          })
        default:
            // Return number of presents unchanged
            return state 
    }
}
