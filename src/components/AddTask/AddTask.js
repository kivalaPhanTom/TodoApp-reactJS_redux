import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../redux/2Actions'
class AddTask extends Component {
    openForm=()=>{
        this.props.openForm()
        this.props.onClearTask({
          id:"",
          name:"",
          status:false,
          timeCreate:"",
          timeDone:""
      })
      var id=""
      this.props.CheckOptionStatusDone(id)
      }
    render() {
        return (
            <button type="button" className="btn btn-success" onClick={this.openForm}>Thêm công việc</button>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
  
        isDisplayForm:state.DisplayForm
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
     return {
        openForm:() => {
          dispatch(actions.openForm())
        },
        onClearTask: (task) => {
          dispatch(actions.getTaskEditing(task))
        },
        CheckOptionStatusDone: (id) => {
          dispatch(actions.checkDisplayOptionTaskDone(id))
        }
     }
  }
export default connect(mapStateToProps,mapDispatchToProps)(AddTask);
  

