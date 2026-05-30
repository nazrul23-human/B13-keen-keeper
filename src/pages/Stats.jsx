import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  const callCount = timeline.filter(
    (item) => item.type === "Call"
  ).length;

  const textCount = timeline.filter(
    (item) => item.type === "Text"
  ).length;

  const videoCount = timeline.filter(
    (item) => item.type === "Video"
  ).length;

  const totalInteractions =
    callCount + textCount + videoCount;

  const data = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#7C3AED", "#1F5B4A", "#34A853"];

  return (
    <div className="max-w-6xl mx-auto py-10">

      <h1 className="text-5xl font-bold mb-2 text-[#244D3F]">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-3xl shadow-md p-6">

        <h2 className="text-2xl font-semibold mb-6">
          By Interaction Type
        </h2>

        <div className="h-[400px]">

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>

              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={110}
                paddingAngle={8}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                <tspan
                  x="50%"
                  dy="-10"
                  className="text-3xl font-bold"
                >
                  {totalInteractions}
                </tspan>

                <tspan
                  x="50%"
                  dy="25"
                  className="text-sm"
                >
                  Total
                </tspan>
              </text>

            </PieChart>
          </ResponsiveContainer>

        </div>

        {/* Legend */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">

          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#7C3AED]"></div>
            <span className="font-medium">
              Text ({textCount})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#1F5B4A]"></div>
            <span className="font-medium">
              Call ({callCount})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#34A853]"></div>
            <span className="font-medium">
              Video ({videoCount})
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Stats;