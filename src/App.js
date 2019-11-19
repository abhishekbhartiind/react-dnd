import React, {Component} from 'react';
import initialState from './initialState';
import TaskList from './Components/TaskList'
import './App.css';

class App extends Component {
  state = initialState

  //Move task when dropped
  onDrop = (item, targetId) => {
    this.setState(state => {
      return {
        tasks: [
          ...state.tasks.filter(task => task.id !== item.id),
          {
            ...item, listId: targetId
          }
        ]
      }
    })
  }

  //render each list
  renderList = () => {
    const {lists, tasks} = this.state
    return lists.map(list => (
      <TaskList
        key={list}
        id={list}
        tasks={tasks.filter(t => t.listId === list)}
        onDrop={this.onDrop}
      />
    ))
  }

  render(){
    return (
      <div style={{display: "flex", minHeight: "200px"}}>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
