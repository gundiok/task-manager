import React from "react";
import { FiCircle, FiStar, FiTrash2 } from "react-icons/fi";
import { FaDotCircle } from "react-icons/fa";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import classes from "../styles/TaskItem.module.css";

const TaskItem = ({ task, handleSelect, isSelected, handleDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div className={classes.container}>
      <span
        className={classes.dragHandle}
        {...listeners}
        style={{ cursor: "grab" }}
      >
        ☰
      </span>
      <li
        ref={setNodeRef}
        {...attributes}
        style={style}
        className={classes.taskItem}
      >
        <span
          onClick={(e) => {
            handleSelect(task.id);
            e.stopPropagation();
          }}
          className={classes.circle}
        >
          {isSelected ? <FaDotCircle size={20} /> : <FiCircle size={20} />}
        </span>
        <span className={classes.taskText}>{task.name}</span>
        {isSelected && (
          <span
            className={classes.deleteIcon}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(task.id);
            }}
          >
            <FiTrash2 size={20} />
          </span>
        )}
        <span className={classes.star}>
          <FiStar size={20} />
        </span>
      </li>
    </div>
  );
};

export default TaskItem;
