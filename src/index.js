import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Task from './Task';

const firstNumberTask = 1;

class Task {
    constructor(number) {
        this.number = number;
        this.label = `Task number ${this.number}`;
        this.id = this.randomNumber();
    }
    randomNumber() { Math.floor(Date.now() / 1000 * Math.random()) };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addTask: [],
            numberAddTask: firstNumberTask,
        };
    }

    createTask = () => {
        const numberAddTask = this.state.numberAddTask;
        this.setState({
            numberAddTask: this.state.numberAddTask + 1,
            addTask: this.state.addTask.concat(new Task(numberAddTask))
        });
    };

    removeTask = () => {
        this.state.addTask.pop()
        if (this.state.numberAddTask > firstNumberTask) {
            this.setState({
                numberAddTask: this.state.numberAddTask - 1
            })
        }
    };

    clearTask = () => {
        this.setState({
            addTask: [],
            numberAddTask: firstNumberTask
        })
    };

    render() {
        const todo = (oneTask) => {
            return (
                <p className='list-element' key={Math.floor(Date.now() * Math.random())}>{oneTask.label}</p>
            )
        };

        const renderTodo = this.state.addTask.map(todo);

        return (
            <>
                <div className='wrap'>
                    <a href="#" className='btn add' onClick={this.createTask} >Add</a>
                    <a href="#" className='btn remove' onClick={this.removeTask} >Remove</a>
                    <a href="#" className='btn clear' onClick={this.clearTask} >Clear</a>
                </div >
                <div className='list'>{renderTodo}</div>
            </>
        );
    }
}

ReactDOM.render(< App />, document.getElementById('root'));