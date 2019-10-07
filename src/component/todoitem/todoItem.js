import React from "react";
import './todoitem.css';
import {Header, Item, ListContent, ListDescription} from "semantic-ui-react";

function TodoItem(props) {
    return (
        <Item>
            <ListContent>
                <Header>{props.todo.name}</Header>
                <ListDescription>Whats!</ListDescription>
            </ListContent>
        </Item>
    );
}

export default TodoItem;
