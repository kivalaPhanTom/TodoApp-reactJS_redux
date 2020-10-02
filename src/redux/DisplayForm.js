import * as types from './1ActionTypes'

var initialState=false //trạng thái false thì form đóng

var myReducer=(state=initialState, action)=>{
    switch (action.type) {
        case types.CLOSE_FORM:
            return false
        case types.OPEN_FORM:
            return true
        default:
            return state;
    }
}
export default myReducer;
