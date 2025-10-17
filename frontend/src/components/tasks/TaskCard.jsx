import React from "react";
import { Edit, Trash2, Calendar, Clock } from "lucide-react";
import { TASK_STATUS_OPTIONS } from "../../utils/constants";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const statusColor =
    TASK_STATUS_OPTIONS.find((s) => s.value === task.status)?.color ||
    "bg-gray-500";

  const formatDate = (dateString) => {
    if (!dateString) return "No deadline";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const isOverdue = () => {
    if (!task.deadline) return false;
    return new Date(task.deadline) < new Date() && task.status !== "Done";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-5 border border-gray-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">
          {task.title}
        </h3>
        <div className="flex gap-2 ml-2">
          <button
            onClick={() => onEdit(task)}
            className="text-blue-600 hover:text-blue-700 p-1 hover:bg-blue-50 rounded"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={() => onDelete(task.task_id)}
            className="text-red-600 hover:text-red-700 p-1 hover:bg-red-50 rounded"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Description */}
      {task.description && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Status Badge */}
        <span
          className={`${statusColor} text-white text-xs px-3 py-1 rounded-full font-medium`}
        >
          {task.status}
        </span>

        {/* Deadline */}
        <div
          className={`flex items-center text-sm ${
            isOverdue() ? "text-red-600" : "text-gray-500"
          }`}
        >
          <Calendar size={14} className="mr-1" />
          {formatDate(task.deadline)}
        </div>
      </div>

      {/* Overdue Warning */}
      {isOverdue() && (
        <div className="mt-3 flex items-center text-red-600 text-xs bg-red-50 px-3 py-2 rounded">
          <Clock size={14} className="mr-1" />
          This task is overdue
        </div>
      )}
    </div>
  );
};

export default TaskCard;
