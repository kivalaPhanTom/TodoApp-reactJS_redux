import * as types from './1ActionTypes'

export const saveTask=(task)=>{
    return{
        type:types.SAVE_TASK,
        task:task
    }
}
export const deleteTask=(id)=>{
    return{
        type:types.DELETE_TASK,
        id:id
    }
}
export const getTaskEditing=(task)=>{
    return{
        type:types.GET_TASK_EDITING,
        task:task
    }
}
export const closeForm=()=>{
    return{
        type:types.CLOSE_FORM
    }
}
export const openForm=()=>{
    return{
        type:types.OPEN_FORM
    }
}
export const changeStatus=(id)=>{
    return{
        type:types.CHANGE_STATUS,
        id:id,  
    }
}
export const updateTimeTaskDone=(id)=>{
    return{
        type:types.UPDATE_TIME_TASK_DONE,
        id:id,  
    }
}
export const checkDisplayOptionTaskDone=(id)=>{
    return{
        type:types.CHECK_DISPLAY_OPTION_TASK_DONE,
        id:id,  
    }
}
export const searchTask=(keywordSearch)=>{
    return{
        type:types.SEARCH,
        keywordSearch:keywordSearch
    }
}
export const sortTask=(sortSignal)=>{
    return{
        type:types.SORT,
        sortSignal:sortSignal
    }
}


