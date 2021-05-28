import {
  Paper,
  List,
  // ListItem,
  Divider,
  // ListItemText,
} from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => {
            return (
              <div style={{ width: "100%" }}>
                <Todo
                  {...todo}
                  key={todo.id}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
                />
                {i < todos.length - 1 && <Divider />}
              </div>
            );
          })}
        </List>
      </Paper>
    );
  return null;
}
