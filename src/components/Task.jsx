import React from "react";
import "../index.css";

const Task = ({ task, toggleStatus }) => {
  return (
    <tr className={`task ${task.assignee.toLowerCase()}`}>
      <td>No: {task.id}</td>
      <td>Task Description: {task.description}</td>
      <td>Assignee: {task.assignee}</td>
      <td>{task.status === "Pending" ? `Deadline: ${task.deadline}` : ""}</td>
      <td>Status: {task.status}</td>
      <td>
        <button onClick={() => toggleStatus(task.id)}>Toggle Status</button>
      </td>
    </tr>
  );
};

export default Task;
