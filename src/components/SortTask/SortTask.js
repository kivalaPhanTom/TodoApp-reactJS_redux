import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../redux/2Actions'
import './index.css'
class SortTask extends Component {
    constructor(props) {
        super(props);
        this.state={
            sortSignal:0
        }
    }
    handleChange=(e)=>{
       this.setState({
           sortSignal:e.target.value
       })
      this.props.getSortSignal(e.target.value)
    }
   
    render() {
      
        return (
            <div>
                 <select className="custom-select select_method_sort" onChange={this.handleChange} value={this.state.status}>
                    <option value={0}>Xếp theo thứ tự mặc định</option>
                    <option value={1}>Sắp xếp theo thứ tự A tới Z</option>
                    <option value={2}>Sắp xếp theo thứ tự Z tới A</option>
                    <option value={3}>Hoàn thành</option>
                    <option value={4}>Chưa hoàn thành</option>         
                </select>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
     return {
        getSortSignal:(sortSignal) => {
          dispatch(actions.sortTask(sortSignal))
        }
     }
  }
export default connect(mapStateToProps,mapDispatchToProps)(SortTask);

