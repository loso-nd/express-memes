export default function reducer(state = {itemName: ""}, action) {
    switch(action.type) {
        case "setItemName":
            return {...state, itemName: action.payload}
        default: 
            return state;
    }
}


//how we update state based on the action that is given