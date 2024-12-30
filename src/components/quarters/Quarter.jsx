import CreateTaskButton from '../tasks/CreateTaskButton';
import TaskCard from '../tasks/TaskCard';
import QuarterHeader from './QuarterHeader';

export default function Quarter({ title, date, tasks }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm w-[350px]">
      <QuarterHeader title={title} date={date} />
      
      {tasks.length === 0 ? (
        <div className="text-gray-500 text-base mb-4 opacity-60">
          No Task Available
        </div>
      ) : (
        tasks.map((task, index) => (
          <TaskCard key={index} title={task.title} progress={task.progress} />
        ))
      )}

      <CreateTaskButton />
    </div>
  );
}