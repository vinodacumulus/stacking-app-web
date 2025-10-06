import { useState } from "react";
import { List } from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
}

const INITIAL_TASKS: Task[] = [
  {
    id: "analytics",
    title: "Bring full analytics on your spend",
    description: "Description optional",
    points: 100,
    completed: false,
  },
  {
    id: "autofill",
    title: "Set up autofill",
    description: "Description optional",
    points: 100,
    completed: false,
  },
];

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string) => void;
}

function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2 flex-1">
        <div className="flex flex-col py-2 px-1">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggle(task.id)}
              className={`w-4 h-4 rounded-full border border-stack-text-secondary flex items-center justify-center ${
                task.completed ? "bg-stack-bg-brand" : "bg-white"
              }`}
            >
              {task.completed && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </button>
            <span className="text-stack-text-default font-sans text-base font-bold leading-[140%]">
              {task.title}
            </span>
          </div>
        </div>
        <span className="text-stack-text-secondary font-sans text-base font-normal leading-[140%]">
          {task.description}
        </span>
      </div>
      <div className="text-black font-sans text-base font-bold leading-[140%]">
        {task.points} pts
      </div>
    </div>
  );
}

export function StackTasks() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const handleToggleTask = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="flex flex-col min-w-[240px] p-6 gap-4 rounded-stack-md border border-stack-text-secondary bg-white">
      {/* Header */}
      <div className="flex items-center gap-2 w-full">
        <div className="flex items-start gap-2">
          <List size={32} className="text-black" />
          <span className="text-stack-text-default font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
            Stack tasks
          </span>
        </div>
        <span className="text-stack-text-secondary font-sans text-base font-normal leading-[140%] max-w-[1087px]">
          Follow these steps to collect points and redeem for cash or prizes
        </span>
      </div>

      {/* Task List */}
      <div className="flex flex-col gap-2 w-full">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={handleToggleTask} />
        ))}
      </div>
    </div>
  );
}
