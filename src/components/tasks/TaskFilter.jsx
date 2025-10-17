import React from "react";
import { TASK_STATUS_OPTIONS, SORT_OPTIONS } from "../../utils/constants";
import { Filter, ArrowUpDown } from "lucide-react";

const TaskFilter = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Status Filter */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Filter size={16} className="mr-2" />
            Filter by Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange("status", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="">All Status</option>
            {TASK_STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <ArrowUpDown size={16} className="mr-2" />
            Sort by
          </label>
          <select
            value={filters.sort}
            onChange={(e) => onFilterChange("sort", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskFilter;
