import Sidebar from './components/layout/Sidebar';
import Quarter from './components/quarters/Quarter';
import { roadmapData } from './data/roadmapData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="ml-[120px] p-8 max-w-[1400px] mr-auto">
        <h1 className="text-[#1a1528] text-2xl mb-8 font-medium">
          Product Roadmap
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-28 max-w-full">
          {roadmapData.map((quarter, index) => (
            <Quarter
              key={index}
              title={quarter.title}
              date={quarter.date}
              tasks={quarter.tasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;