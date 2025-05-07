// import React from "react";
// import BoxSkeleton from "./BoxSkeleton";

// const GraphSkeleton = ({ noOfBoxes = 4 }) => {
//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-4 px-4">
//         {Array(noOfBoxes)
//           .fill(0)
//           .map((box, index) => (
//             <BoxSkeleton
//               key={index}
//               width={"w-full"}
//               radius={"rounded"}
//               height={"h-[320px]"}
//             />
//           ))}
//       </div>
//     </>
//   );
// };

// export default GraphSkeleton;






import React from "react";
import PropTypes from "prop-types"; // ✨ Import PropTypes
import BoxSkeleton from "./BoxSkeleton";

const GraphSkeleton = ({ noOfBoxes = 4 }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-4 px-4">
        {Array(noOfBoxes)
          .fill(0)
          .map((box, index) => (
            <BoxSkeleton
              key={index}
              width={"w-full"}
              radius={"rounded"}
              height={"h-[320px]"}
            />
          ))}
      </div>
    </>
  );
};

GraphSkeleton.propTypes = {
  noOfBoxes: PropTypes.number, // Number of graph skeletons (default is 4)
};

export default GraphSkeleton;
