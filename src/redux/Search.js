import * as types from './1ActionTypes'

var initialState=''

var myReducer=(state=initialState, action)=>{
    switch (action.type) {
        case types.SEARCH:
            state=action.keywordSearch
            return state
        default:
            return state;
    }
}
export default myReducer;