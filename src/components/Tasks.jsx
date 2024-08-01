import React, { useState, useEffect } from "react";
import Task from "./Task";
import SearchFilter from "./SearchFilter";
import "../index.css";

const Tasks = () => {
  const initialTasks = () => {
    const assignees = ["John", "Jane", "Mike", "Lisa"];
    const tasks = [];
    const currentDate = new Date();
    const randomDays = () => Math.floor(Math.random() * 30);

    for (let i = 1; i <= 10; i++) {
      const status = i <= 6 ? "Pending" : "Completed";
      const deadline =
        status === "Pending"
          ? new Date(
              currentDate.getTime() + randomDays() * 24 * 60 * 60 * 1000
            ).toLocaleDateString()
          : null;
      tasks.push({
        id: i,
        description: `Task ${i}`,
        assignee: assignees[Math.floor(Math.random() * assignees.length)],
        deadline,
        status,
      });
    }
    return tasks;
  };

  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    setFilteredTasks(
      tasks.filter(
        (task) =>
          task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.assignee.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, tasks]);

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending",
            }
          : task
      )
    );
  };

  return (
    <div>
      <div className="header">
        <h1>Welcome to my Task Manager</h1>
      </div>
      <div class="container">
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <table className="tasks-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Description</th>
              <th>Assignee</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <Task key={task.id} task={task} toggleStatus={toggleStatus} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
