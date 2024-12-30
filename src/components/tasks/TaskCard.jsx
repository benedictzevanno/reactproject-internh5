import { MoreHorizontal } from 'lucide-react';

export default function TaskCard({ title, progress }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 -ml-2 w-[320px]">
      <div className="text-[#1a1528] text-base font-semibold mb-3 leading-relaxed">
        {title}
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-2.5">
        <img
          src="/Vector.png"
          alt="Bag Store"
          className="w-4 h-4"
        />
          <span className="text-gray-500 text-xs">{progress}%</span>
        </div>
        <MoreHorizontal className="w-7 h-7 text-gray-500 cursor-pointer hover:text-gray-700" />
      </div>
    </div>
  );
}