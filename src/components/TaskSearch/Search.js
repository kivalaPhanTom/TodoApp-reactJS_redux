import React, { Component } from 'react';
import * as actions from '../../redux/2Actions'
import {connect} from 'react-redux'
import './index.css'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyword:''
        }
    }
    
    getKeyWordSearch=(event)=>{
        this.setState({
            keyword:event.target.value
        })
        this.props.GetKeyWordSearch(event.target.value)  
    }
    Search=()=>{
        this.props.GetKeyWordSearch(this.state.keyword)  
    }
    render() {
       
        return (
            <div className="input-group mb-3 component_search">  
                <input  type="text" value={this.state.keyword} onChange={(event)=>this.getKeyWordSearch(event)} className="form-control input_Seacrh" placeholder="Tìm kiến công việc của bạn" />
                <div className="input-group-append ">
                    <span className="input-group-text button_Search" id="basic-addon2" onClick={this.Search}>Tìm kiếm</span>
                </div>
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
         GetKeyWordSearch:(keywordSearch) => {
              dispatch(actions.searchTask(keywordSearch))
         }
        
     }
 }
 export default connect(mapStateToProps,mapDispatchToProps)(Search);

