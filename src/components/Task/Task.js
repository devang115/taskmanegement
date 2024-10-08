import React from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { deleteTaskAction, updateTaskStatus } from "../../redux/action/task";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    if (task.status === "incomplete") {
      dispatch(updateTaskStatus(task.id, "completed"));
    } else if (task.status === "completed") {
      dispatch(updateTaskStatus(task.id, "incomplete"));
    }
  };

  const handleDelete = () => {
    dispatch(deleteTaskAction(task.id));
  };

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames={`task-transition-${task.status}`}
    >
      <div className={`task ${task.status}`}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <div>
          {task.status !== "deleted" && (
            <button onClick={handleComplete}>
              {task.status === "incomplete" ? "Complete" : "Undo"}
            </button>
          )}
          {task.status !== "deleted" && (
            <button onClick={handleDelete}>Delete</button>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Task;