export default function CardContent({ icon, title, count }) {
  return (
    <div className="flex rounded-lg bg-gray-300 animate-pulse w-3/12 p-4 h-fit min-w-sm">
      <div className="flex space-x-4 py-6 flex-nowrap w-full h-full">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
