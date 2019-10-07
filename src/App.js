import React, {Component} from 'react';
import './App.css';
import Toolbar from "./component/toolbar";
import logo from './logo.svg';
import TodoList from "./component/todolist/todolist";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {name: 'Test Item'},
                {name: 'Test Item 2'}
            ]
        };
    }
    render() {
        return (
            <div className="App">
                <Toolbar logo={logo}/>
                <div className="container">
                    <TodoList items={this.state.todoList} />
                </div>
            </div>
        );
    }
}

export default App;
