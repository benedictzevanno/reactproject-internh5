export default function QuarterHeader({ title, date }) {
    return (
      <div className="mb-4">
        <div className="text-gray-500 text-sm mb-1">{title}</div>
        <div className="text-[#1a1528] text-base font-medium">{date}</div>
      </div>
    );
}