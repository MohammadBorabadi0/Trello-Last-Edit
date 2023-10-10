import { useState } from "react";
import { Id, Task } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GrEdit } from "react-icons/gr";
import Modal from "./Modal";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const [showCardOptions, setShowCardOptions] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
        p-1.5 h-fit items-center flex text-left rounded-xl border-2 border-blue-500  cursor-grab relative
      "
      />
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-white text-black px-4 py-1.5 h-fit items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-blue-500 cursor-grab relative"
      >
        <input
          className="
        h-fit
        w-full border-none rounded bg-transparent focus:outline-none
        "
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="bg-white text-gray-600 px-4 py-1.5 h-fit items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-blue-500 cursor-grab relative task"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <p className="w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {task.content}
      </p>

      {mouseIsOver && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowCardOptions(true);
          }}
          className="text-black absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded opacity-60 hover:opacity-100"
        >
          <GrEdit />
        </button>
      )}
      {showCardOptions && (
        <Modal
          showCardOptions={showCardOptions}
          setShowCardOptions={setShowCardOptions}
          deleteTask={deleteTask}
          setEditMode={setEditMode}
          task={task}
        />
      )}
    </div>
  );
}

export default TaskCard;

// deleteTask(task.id);
