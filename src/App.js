import React, { Component } from 'react';
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import Search from './components/TaskSearch/Search'
import AddTask from './components/AddTask/AddTask';
import SortTask from './components/SortTask/SortTask';
import './App.css'
import logoTodo from './img/Todo_icon_2019.svg.png'
class App extends Component {
 
  render() {
    return (
      <div className="container">
         <div className="mt-5 mb-5 text-center">
           <h1 className="text-center titleTodo"><img src={logoTodo} className="logoTodo"></img>Quản lý công việc của tôi</h1>
         </div>
         <hr />
          <Search></Search>
          <div className="row ">
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 componentAdd">
               <AddTask></AddTask>
            </div>
            <div className="col-lg-7 col-md-5 col-sm-5 col-xs-12 ">
               <SortTask></SortTask>
            </div>
          </div>
          <div className="row mt-4">
                 <TaskForm></TaskForm>
                 <TaskList></TaskList>
          </div>
      </div>
    );
  }
}
export default App;


