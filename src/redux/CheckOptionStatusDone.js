import * as types from './1ActionTypes'

var initialState=false //trạng thái false thì form đóng

var myReducer=(state=initialState, action)=>{
    switch (action.type) {
        case types.CHECK_DISPLAY_OPTION_TASK_DONE:
            if(action.id !=="" && action.id !==null) //trường hợp edit, vì đối tượng edit là đối tượng đã có id
            {
                return state=true
            }
            else{
                return state=false
            }
            // return false
    
        default:
            return state;
    }
}
export default myReducer;
