import * as types from './1ActionTypes'

var initialState={
    id:"",
    name:"",
    status:false,
    timeCreate:"",
    timeDone:"",
    
};

var myReducer=(state=initialState, action)=>{
    switch (action.type) {
        case types.GET_TASK_EDITING:
            return action.task
        default:
            return state;
    }
}
export default myReducer;
