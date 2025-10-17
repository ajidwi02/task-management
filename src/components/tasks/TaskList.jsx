import React from "react";
import TaskCard from "./TaskCard";
import { Inbox } from "lucide-react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16">
        <Inbox size={64} className="mx-auto text-gray-300 mb-4" />
        <h3 className="text-xl font-medium text-gray-600 mb-2">
          No tasks found
        </h3>
        <p className="text-gray-500">Create your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.task_id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
