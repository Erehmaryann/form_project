import React from "react";
import EditTodoForm from "./EditTodoForm";
import useToggleState from "./hooks/useToggleState";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons/";

export default function Todo({
  task,
  completed,
  removeTodo,
  toggleTodo,
  editTodo,
  id,
}) {
  const [isEditing, toggle] = useToggleState();
  return (
    <div>
      <ListItem style={{ color: "red", height: "64px" }}>
        {isEditing ? (
          <div style={{ width: "100%", height: "100%" }}>
            <EditTodoForm
              editTodo={editTodo}
              id={id}
              task={task}
              toggleEditForm={toggle}
            />
          </div>
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggleTodo(id)}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                <Delete />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggle}>
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </div>
  );
}
