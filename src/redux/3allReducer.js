import {combineReducers} from 'redux'; //dùng để kết hợp các reducer lại
import tasks from './Task';
import GetItemEditing from './GetTaskEditing'
import DisplayForm from './DisplayForm'
import checkOptionStatusDone from './CheckOptionStatusDone'
import Search from './Search'
import sortSignal from './Sort'
//đây là reducer tổng
const myReducer = combineReducers({
    tasks:tasks, //có thể viết rút gọn thành  tasks thôi cũng được
    GetItemEditing:GetItemEditing,
    DisplayForm:DisplayForm,
    checkOptionStatusDone:checkOptionStatusDone,
    Search:Search,
    sortSignal:sortSignal
});
export default myReducer;