import * as types from './1ActionTypes'
var data =JSON.parse(localStorage.getItem('myTasks')); //kiểm tra xem trong localStorage có data hay không
const {v4:uuiddv4} = require('uuid')

// đây là list các công việc, nên khi khởi tạo initialState phải là dạng mảng
var initialState=[]
if(data){ //nếu có data
     initialState=data;
}

const generateId=(id)=>{ //hàm này để sinh ra id
    return id=uuiddv4()
}
var findIndex_Of_Task=(id,arr)=>{ //hàm tìm vị trí của phần tử trong mảng
    var i=0
    for(i; i < arr.length; i++)
    { 
        if(arr[i].id === id)
        {
            id=arr.indexOf(arr[i])
        }  
    }
    return id
}
const formatDateTime=(time)=>{  //hàm này để format thời gian
    if(!time) return ''
    const date = `0${time.getDate()}`.slice(-2)  //lấy 2 ký tự cuối cùng của chuỗi
    const month=`0${time.getMonth()+1}`.slice(-2)//lấy 2 ký tự cuối cùng của chuỗi
    const year = time.getFullYear()//
//tại sao phải lấy 2 ký tự cuối cùng của chuỗi?? ví dụ: lúc 9:8:1(9h,8phut,1 giây), để vậy rất xấu. nên cách trên sẽ làm nó thành 09:08:01
    return `${date}/${month}/${year}`;
}
var index_Of_task=null
var myReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.SAVE_TASK://thêm task
        var task={
            id:action.task.id,
            name:action.task.name,
            status:(action.task.status==='true' || action.task.status===true) ? true:false,
            timeCreate:action.task.timeCreate,
            timeDone:action.task.timeDone
        }
       
        if(action.task.id !=="" && action.task.id !==null) //trường hợp edit, vì đối tượng edit là đối tượng đã có id
        {
            var index = findIndex_Of_Task(action.task.id,state);
            state[index]=task
        }
        else{//trường hợp add mới, vì đối tượng được add mới là đối tượng đã chưa có id
            var id=generateId(action.task.id)
            task.id =id
            state.unshift(task) //dùng unshift để thêm vào đầu mảng
            
        } 
        localStorage.setItem('myTasks',JSON.stringify(state))// sử dụng JSON.stringify(state) để lưu lại state dưới dạng String, bời vì localStorage chỉ nhận string
        return [...state]

        case types.DELETE_TASK://xóa task
            index_Of_task= findIndex_Of_Task(action.id,state)
            state.splice(index_Of_task, 1);
            localStorage.setItem('myTasks',JSON.stringify(state))
            return [...state]
        
        case types.CHANGE_STATUS: //chuyển đổi trạng thái hoàn thành sang chưa hoàn thành và ngược lại
            index_Of_task= findIndex_Of_Task(action.id,state)
            state[index_Of_task]={
                ...state[index_Of_task],
                status:!state[index_Of_task].status  //status thì thay đổi
            }
            localStorage.setItem('myTasks', JSON.stringify(state));
            return [...state]

        case types.UPDATE_TIME_TASK_DONE: //updat thời gian hoàn thành
            var time_Now=new Date()
            var time=formatDateTime(time_Now)
            index_Of_task= findIndex_Of_Task(action.id,state)
            if(state[index_Of_task].status ==="false" || state[index_Of_task].status ===false)
            {
                state[index_Of_task]={
                    ...state[index_Of_task],
                   timeDone:""  
                }
               console.log("false")
            }
            else{
                console.log("true")  
                state[index_Of_task]={
                   ...state[index_Of_task],
                   timeDone:time  
                } 
            }
            localStorage.setItem('myTasks', JSON.stringify(state));
            return [...state]
        default:
            return state;
    }

}
export default myReducer;
