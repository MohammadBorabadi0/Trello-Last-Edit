import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Column, Id, Task } from "../types";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import { BiPlus } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Modal from "./Modal";
import { useColumnStore } from "../store/Store";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;

  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}: Props) {
  const [editMode, setEditMode] = useState(false);
  const [showColumnOptions, setShowColumnOptions] = useState(false);

  const { addColumn, columns } = useColumnStore((state) => state);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      opacity-40
      border-2
      border-pink-500
      bg-gray-400
      w-[275px]
      min-h-[100px]
      max-h-fit
      rounded-md
      flex
      flex-col
      "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
      bg-[#F1F2F4]
      w-[275px]
      h-fit
      max-h-[500px]
      shadow-lg
      rounded-md
      flex
      flex-col
    `}
    >
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className="
        text-md
        h-[60px]
        cursor-grab
        rounded-md
        rounded-b-none
        p-3
        font-bold
      bg-[#F1F2F4]
      text-black
        flex
        items-center
        justify-between
        relative
      "
      >
        <div className="flex items-center gap-2">
          {!editMode && column.title}
          {editMode && (
            <input
              className="h-full bg-white focus:border-blue-500 border-2 rounded-lg outline-none px-2 py-1"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowColumnOptions(true);
          }}
          className="rounded p-2"
        >
          <FiMoreHorizontal />
        </button>
        {showColumnOptions && (
          <Modal
            showColumnOptions={showColumnOptions}
            setShowColumnOptions={setShowColumnOptions}
            deleteColumn={deleteColumn}
            setEditMode={setEditMode}
            column={column}
          />
        )}
      </div>

      {/* Column task container */}
      <div className="flex flex-grow flex-col gap-3 p-2 bg-[#F1F2F4] overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
      {/* Column footer */}
      <button
        className="flex bg-[#F1F2F4] text-black gap-2 items-center border rounded-b-md px-4 py-3"
        onClick={() => {
          createTask(column.id);
        }}
      >
        <BiPlus />
        Add task
      </button>
      <button onClick={() => addColumn({ id: "1", title: "Todo" })}>
        Add Column
      </button>
      {JSON.stringify(columns)}
    </div>
  );
}

export default ColumnContainer;

// onClick={() => {
//   deleteColumn(column.id);
// }}
