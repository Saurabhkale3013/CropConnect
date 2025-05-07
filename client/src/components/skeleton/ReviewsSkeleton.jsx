// import React from "react";
// import BoxSkeleton from "./BoxSkeleton";

// const ReviewsSkeleton = ({ noOfBoxes = 2 }) => {
//   return (
//     <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-8">
//       {Array(noOfBoxes)
//         .fill(0)
//         .map((box, index) => (
//           <BoxSkeleton
//             key={index}
//             height={"h-[100px] md:h-[220px]"}
//             width={"w-full"}
//           />
//         ))}
//     </div>
//   );
// };

// export default ReviewsSkeleton;






import React from "react";
import PropTypes from "prop-types"; // ✨ Import PropTypes
import BoxSkeleton from "./BoxSkeleton";

const ReviewsSkeleton = ({ noOfBoxes = 2 }) => {
  return (
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-8">
      {Array(noOfBoxes)
        .fill(0)
        .map((box, index) => (
          <BoxSkeleton
            key={index}
            height={"h-[100px] md:h-[220px]"}
            width={"w-full"}
          />
        ))}
    </div>
  );
};

ReviewsSkeleton.propTypes = {
  noOfBoxes: PropTypes.number, // Number of review skeleton cards (default is 2)
};

export default ReviewsSkeleton;
