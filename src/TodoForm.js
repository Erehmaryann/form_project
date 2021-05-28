import { Paper, TextField } from "@material-ui/core";
import React from "react";
import useInputState from "./hooks/useInputState";

export default function TodoForm({ addTodo }) {
  const [item, handleItemChange, resetItem] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(item);
          resetItem();
        }}
      >
        <TextField
          value={item}
          name={item}
          onChange={handleItemChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
        {/* <button></button> */}
      </form>
    </Paper>
  );
}
