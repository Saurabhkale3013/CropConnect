// import React from "react";
// import {
//   BarChart,
//   Bar,
//   Rectangle,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { captializeFirstLetter } from "../../utils/helper/captializeFirstLetter";

// const BarGraph = ({ data, color, xKey, yKey, title = "Graph Title" }) => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <h2 className={`text-center font-semibold mb-4`}>{title}</h2>
//       <BarChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis
//           dataKey={xKey}
//           axisLine={{ stroke: color, strokeWidth: 2 }}
//           tick={{ fill: color, fontSize: "12px" }}
//           tickFormatter={(tick) => captializeFirstLetter(tick)}
//         />
//         <YAxis
//           axisLine={{ stroke: color, strokeWidth: 2 }}
//           tick={{ fill: color, fontSize: "12px" }}
//           tickFormatter={(tick) => `Rs.${tick}`}
//         />
//         <Bar
//           dataKey={yKey}
//           fill={color}
//           //   activeBar={<Rectangle fill="pink" stroke="blue" />}
//         />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default BarGraph;




import React from "react";
import PropTypes from "prop-types"; // ✨ Import PropTypes
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { captializeFirstLetter } from "../../utils/helper/captializeFirstLetter";

const BarGraph = ({ data, color, xKey, yKey, title }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <h2 className={`text-center font-semibold mb-4`}>{title}</h2>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={xKey}
          axisLine={{ stroke: color, strokeWidth: 2 }}
          tick={{ fill: color, fontSize: "12px" }}
          tickFormatter={(tick) => captializeFirstLetter(tick)}
        />
        <YAxis
          axisLine={{ stroke: color, strokeWidth: 2 }}
          tick={{ fill: color, fontSize: "12px" }}
          tickFormatter={(tick) => `Rs.${tick}`}
        />
        <Bar
          dataKey={yKey}
          fill={color}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

// ✨ PropTypes added here
BarGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // Ensures data is an array of objects
  color: PropTypes.string.isRequired, // Ensures color is a string
  xKey: PropTypes.string.isRequired, // Ensures xKey is a string
  yKey: PropTypes.string.isRequired, // Ensures yKey is a string
  title: PropTypes.string, // Ensures title is a string
};

// Default props
BarGraph.defaultProps = {
  title: "Graph Title", // Default value for title
};

export default BarGraph;
