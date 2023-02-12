import { createStore } from 'redux';

const reducerFn = (state = {counter: 0},action) => {

    // Synchronous function!
    // we should not mutate the original state!


    switch(action.type){
        case "INC":
            return {counter: state.counter + 1}
            break;
        case "DEC":
            return {counter: state.counter - 1}
            break;
        default:
            console.log("???")
    }
    
    return state;
}

const store = createStore(reducerFn, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store