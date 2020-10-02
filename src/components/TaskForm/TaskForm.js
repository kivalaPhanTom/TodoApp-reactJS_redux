import React, { Component } from 'react'
import * as actions from '../../redux/2Actions'
import {connect} from 'react-redux'
import './index.css'


const formatDateTime=(time)=>{  //hàm này để format thời gian
    if(!time) return ''
    const date = `0${time.getDate()}`.slice(-2)  //lấy 2 ký tự cuối cùng của chuỗi
    const month=`0${time.getMonth()+1}`.slice(-2)//lấy 2 ký tự cuối cùng của chuỗi
    const year = time.getFullYear()//
//tại sao phải lấy 2 ký tự cuối cùng của chuỗi?? ví dụ: lúc 9:8:1(9h,8phut,1 giây), để vậy rất xấu. nên cách trên sẽ làm nó thành 09:08:01
    return `${date}/${month}/${year}`;
}


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:"",
            name:"",
            status:false,
            timeCreate:"",
            timeDone:""
        }
    }
    componentWillMount() {
        if(this.props.getTaskEditing && this.props.getTaskEditing.id !== null){
            this.setState({
                id : this.props.getTaskEditing.id,
                name : this.props.getTaskEditing.name,
                status : this.props.getTaskEditing.status,
                timeCreate:this.props.getTaskEditing.timeCreate,
                timeDone:this.props.getTaskEditing.timeDone
            });
            }else{
                this.clearTask()
            }
       }
       componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.getTaskEditing){
            this.setState({
                id : nextProps.getTaskEditing.id,
                name : nextProps.getTaskEditing.name,
                timeCreate:nextProps.getTaskEditing.timeCreate,
                timeDone:nextProps.getTaskEditing.timeDone,
                status : nextProps.getTaskEditing.status
            });
        }else{
            this.clearTask()
        }
    }

    handleChange=(e)=>{
        var time_Now=new Date()
        var time=formatDateTime(time_Now)
        var name = e.target.name
        var value= e.target.value
       
        this.setState({
           [name]:value,
           timeCreate:time,
        })   
        
    }
    
    save_Task=(event)=>{
        event.preventDefault();//ngăn reload khi nhấn submit
            var taskItem={
                 id:this.state.id,
                 name:this.state.name,
                 timeCreate:this.state.timeCreate,
                 timeDone:this.state.timeDone,
                 status:this.state.status
             }  
        this.props.addTask(taskItem)
       
        this.clearTask()
        if(this.props.checkOptionStatusDone===true || this.props.checkOptionStatusDone==='true')
        {
            this.props.closeForm()  
            this.props.UpDateTimeDone(taskItem.id) //cập nhật thời gian hoàn thành
        }  
    }
    
    closeForm=()=>{
         this.clearTask() 
         this.props.closeForm()
    }

    clearTask=()=>{
        this.setState({
            id:"",
            name:"",
            status:false,
            timeCreate:"",
            timeDone:""
        }); 
    }

    render() {
      
        var OptionStatusTaskDone=''
        if(this.props.checkOptionStatusDone===true || this.props.checkOptionStatusDone==='true')
        {
            OptionStatusTaskDone=<option value={true}>Đã hoàn thành</option>
        }
        else{
            OptionStatusTaskDone=null
        }
        if(this.props.isDisplayForm===false || this.props.isDisplayForm==='false') return null
         
        return (
         <div className="col-lg-4 col-md-6 col-sm-7 taskForm">      
            <i className="fas fa-times-circle mb-2" onClick={this.closeForm}></i>
            <form className="formTask" >
                <div className="form-group">
                    <label >Tên công việc</label>
                    <input value={this.state.name}type="text" className="form-control input_nameWork" name="name" onChange={this.handleChange}/>

                    <div className="input-group mb-3">
                        <div className="mt-2">
                            <span>Trạng thái</span>
                            <select className="custom-select selectStatus" name="status"onChange={this.handleChange} value={this.state.status}>
                                <option value={false}>Chưa hoàn thành</option>
                                {OptionStatusTaskDone}
                            </select>
                        </div>
                   </div>
                 
                </div>
                <div className="btnGroup">
                    <button type="submit" className="btn btn-success mr-2"onClick={(e)=>this.save_Task(e)}>Lưu lại</button>
                    <button  type="button"className="btn btn-warning" onClick={ this.clearTask } >Hủy bỏ</button>
                </div> 
             </form>
            {this.isDisplayForm}
        </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
   return {
       getTaskEditing:state.GetItemEditing,
       isDisplayForm:state.DisplayForm,
       checkOptionStatusDone:state.checkOptionStatusDone
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTask:(task) => {
             dispatch(actions.saveTask(task))
        },
        closeForm:() => {
            dispatch(actions.closeForm())
       },
        UpDateTimeDone:(id) => {
            dispatch(actions.updateTimeTaskDone(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);

