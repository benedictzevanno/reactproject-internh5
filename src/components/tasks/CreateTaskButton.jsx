import { Plus } from 'lucide-react';

export default function CreateTaskButton() {
  return (
    <button className="flex items-center text-black text-base font-light">
      <Plus className="w-5 h-5 mr-2 text-purple-600" />
      <span>Create new task</span>
    </button>
  );
}