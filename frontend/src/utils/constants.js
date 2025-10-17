export const TASK_STATUS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

export const TASK_STATUS_OPTIONS = [
  { value: "To Do", label: "To Do", color: "bg-gray-500" },
  { value: "In Progress", label: "In Progress", color: "bg-blue-500" },
  { value: "Done", label: "Done", color: "bg-green-500" },
];

export const SORT_OPTIONS = [
  { value: "deadline_asc", label: "Deadline (Oldest First)" },
  { value: "deadline_desc", label: "Deadline (Newest First)" },
  { value: "created_desc", label: "Recently Created" },
  { value: "created_asc", label: "Oldest Created" },
];
