import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const FIRST_NUMBER_TASK = 1;

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
            nextTaskNumber: FIRST_NUMBER_TASK,
        };
    }

    createTask = () => {
        const nextTaskNumber = this.state.nextTaskNumber;
        this.setState({
            nextTaskNumber: nextTaskNumber + 1,
            addTask: this.state.addTask.concat(new Task(nextTaskNumber))
        });
    };

    removeTask = () => {
        let nextTaskNumber = this.state.nextTaskNumber;
        const removeTask = this.state.addTask;
        nextTaskNumber = nextTaskNumber > FIRST_NUMBER_TASK ? nextTaskNumber - 1 : FIRST_NUMBER_TASK
        this.setState({
            nextTaskNumber: nextTaskNumber,
            addTask: removeTask.splice(0, removeTask.length - 1),
        })
    };

    clearTask = () => {
        this.setState({
            addTask: [],
            nextTaskNumber: FIRST_NUMBER_TASK
        })
    };

    render() {
        const renderTodo = this.state.addTask.map((item, id) => <li className='list-element' key={id}>{item.label}</li>);
        return (
            <>
                <div className='wrap'>
                    <button className='btn add' onClick={this.createTask} >Add</button>
                    <button className='btn remove' onClick={this.removeTask} >Remove</button>
                    <button className='btn clear' onClick={this.clearTask} >Clear</button>
                </div >
                <ul className='list'>{renderTodo}</ul>
            </>
        );
    }
}

ReactDOM.render(< App />, document.getElementById('root'));