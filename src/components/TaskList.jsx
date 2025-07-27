import { useState } from "react";
import classes from "../styles/TaskList.module.css";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  function addTask() {
    if (task.trim() === "") return;
    const newTask = {
      name: task,
      id: crypto.randomUUID(),
      completed: false,
      priority: "",
      date: "",
    };
    setTasks((prev) => [...prev, newTask]);
    setTask("");
  }

  function handleSelect(id) {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  }

  function handleDelete(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setSelectedIds((prevSelected) =>
      prevSelected.filter((selectedId) => selectedId !== id)
    );
  }

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id === over.id) return;

    setTasks((prevTasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(prevTasks, originalPos, newPos);
    });
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <div className={classes.primaryContainer}>
      <div className={classes.inputGroup}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add a task</button>
      </div>{" "}
      <div className={tasks.length !== 0 ? classes.taskListContainer : ""}>
        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                handleSelect={handleSelect}
                isSelected={selectedIds.includes(task.id)}
                handleDelete={handleDelete}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>{" "}
    </div>
  );
};

export default TaskList;
