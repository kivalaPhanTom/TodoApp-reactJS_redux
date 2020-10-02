import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/2Actions';
import check from '../../img/check.svg'
import checkDone from '../../img/check-done.svg'
import './index.css'

class TaskItem extends Component {
    deleteTask=()=>{
       this.props.DeleteTask(this.props.task.id)
     }
     editTask=()=>{
        this.props.GetEdiTask(this.props.task)
        this.props.openForm()
        this.props.CheckOptionStatusDone(this.props.task.id)
      }
      changeStatus=()=>{
          this.props.ChangeStatus(this.props.task.id)
          this.props.UpDateTimeDone(this.props.task.id)
      }
      
    upDateTimeDone=()=>{
         
        var timeDone=null
        if(this.props.task.timeDone ==="" || this.props.task.timeDone ===null ) // kiểm tra xem timeDone có tồn tại không, nếu không thì ko in ra
        {
            return timeDone
        }else{// kiểm tra xem timeDone có tồn tại không, nếu có thì in ra
             timeDone= "Kết thúc: " + this.props.task.timeDone
             return timeDone
        }
      }
    render() {
       
        var url=check;
        var status=""
        var TaskDone = ""
        var TimeExcute=""
        if(this.props.task.status === false) //nếu trạng thái = false, thì hiện nút chưa hoàn thành
        {
            status= <img src={url} width={30} height={30} className="imgCheck btn-status" onClick={this.changeStatus} alt="checkDone"></img>
        }
        else{//nếu trạng thái khác false, thì hiện nút hoàn thành
            url=checkDone
            status= <img src={url} width={30} height={30} className="imgCheck btn-status"onClick={this.changeStatus} alt="checkDone"></img>
            TaskDone = "taskDone" //nếu task hoàn thành rồi thì task đó sẽ bị làm mờ, và bị gạch đi
            TimeExcute="timeExcute"
        }
       
        return (
            <tr>
                <th scope="row"><p>{this.props.index}</p></th>
                <td className={TaskDone}><p>{this.props.task.name}</p></td>
                <td className={TimeExcute}>
                    Bắt đầu: {this.props.task.timeCreate}<br/>
                    {this.upDateTimeDone()}
                </td>

                <td className="tdStatus"> {status}</td>
                <td>
                    <div className="row">
                        <div className="btn-group" role="group" >
                            <button type="button" className="btn btn-secondary "onClick={this.editTask}>Sửa</button>
                            <button type="button" className="btn btn-warning " onClick={this.deleteTask}>Xóa</button>
                        </div>
                    </div>
                </td>
            </tr>
            
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        DeleteTask:(id)=>{
            dispatch(actions.deleteTask(id))
        },
        GetEdiTask:(task)=>{
            dispatch(actions.getTaskEditing(task))
        }, 
        openForm:() => {
            dispatch(actions.openForm())
        },
        ChangeStatus:(id) => {
            dispatch(actions.changeStatus(id))
        },
        UpDateTimeDone:(id) => {
            dispatch(actions.updateTimeTaskDone(id))
        },
        CheckOptionStatusDone: (id) => {
            dispatch(actions.checkDisplayOptionTaskDone(id))
          }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);

