import React from 'react';
import TodoItem from "../todoitem/todoitem";
import './todolist.css';
import {List} from "semantic-ui-react";

class TodoList extends React.Component {
    render() {
        return (
            <List>
                {this.renderItems(this.props.items)}
            </List>
        );
    }
    renderItems = items => items.map(item => <TodoItem todo={item}/>);
}

export default TodoList;
