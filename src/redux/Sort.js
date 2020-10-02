import * as types from './1ActionTypes'

var initialState=0

var myReducer=(state=initialState, action)=>{
    switch (action.type) {
        case types.SORT:
            state=action.sortSignal
            return state
        default:
            return state;
    }
}
export default myReducer;