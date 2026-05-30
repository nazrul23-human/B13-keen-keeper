import { useContext, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter(item => item.type === filter);

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-6">
        Timeline
      </h1>

      {/* Filter Timeline */}
<div className="">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="select select-bordered w-full md:w-56"
    >
      <option value="All">Filter Timeline</option>
      <option value="Call">Call</option>
      <option value="Text">Text</option>
      <option value="Video">Video</option>
    </select>

  </div>
</div>

      {/* Timeline List */}
      <div className="space-y-4">
        {filteredTimeline.length === 0 ? (
          <p>No interactions yet.</p>
        ) : (
          filteredTimeline.map(item => (
            <div
              key={item.id}
              className="bg-white shadow rounded-xl p-5"
            >
              <h2 className="font-bold text-lg">
                {item.title}
              </h2>

              <p className="text-gray-500">
                {item.date}
              </p>

              <p className="mt-2">
                Type: {item.type}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;