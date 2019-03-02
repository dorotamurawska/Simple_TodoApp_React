import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Task from './Task';


class Task {
    constructor(number) {
        this.number = number;
        this.label = "Task number " + this.number;
        this.id = Math.floor(Date.now() / 1000 * Math.random());
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addTask: [],
            numberAddTask: 1
        };
        this.createTask = this.createTask.bind(this);  
        this.removeTask = this.removeTask.bind(this);  
        this.clearTask = this.clearTask.bind(this);   
    }

    createTask() {
        const numberAddTask = this.state.numberAddTask;
        this.setState({
            numberAddTask: this.state.numberAddTask + 1,
            addTask: this.state.addTask.concat(new Task(numberAddTask))
        })
    };

    removeTask() {
        this.state.addTask.pop()
        if (this.state.numberAddTask > 1) {
            this.setState({
            numberAddTask: this.state.numberAddTask - 1
            })
        }
    };

    clearTask() {
        this.setState({
            addTask: [],
            numberAddTask: 1
        })
    };

    render() {

        const todo = (oneTask) => {
            return React.createElement('p',
                { key: Math.floor(Date.now() * Math.random()) },
                oneTask.label
            )
        };
        
        const renderTodo = this.state.addTask.map(todo);


        return ( 
            <div >
            <a href="#" onClick={this.createTask} >Add</a> 
            <a href="#" onClick={this.removeTask} >Remove</a> 
            <a href="#" onClick={this.clearTask} >Clear</a>
            <div className="wrap">{renderTodo}</div>
            </div >
        );
    }



}


ReactDOM.render( < App / > , document.getElementById('root'));