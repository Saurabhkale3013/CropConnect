// import React from "react";
// import BoxSkeleton from "./BoxSkeleton";

// const TextSkeleton = ({
//   noOfRows = 6,
//   fontSizeHeightMd = "h-[16px]",
//   fontSizeHeight = "h-[14px]",
//   width = "w-full",
// }) => {
//   return (
//     <div className={`grid  gap-1.5 ${width}`}>
//       {Array(noOfRows)
//         .fill(0)
//         .map((_, index) => (
//           <BoxSkeleton
//             key={index}
//             width={"w-full"}
//             radius={"rounded"}
//             height={`${fontSizeHeightMd} md:${fontSizeHeight}`}
//           />
//         ))}
//     </div>
//   );
// };

// export default TextSkeleton;








import React from "react";
import PropTypes from "prop-types"; // ✨ Import PropTypes
import BoxSkeleton from "./BoxSkeleton";

const TextSkeleton = ({
  noOfRows = 6,
  fontSizeHeightMd = "h-[16px]",
  fontSizeHeight = "h-[14px]",
  width = "w-full",
}) => {
  return (
    <div className={`grid gap-1.5 ${width}`}>
      {Array(noOfRows)
        .fill(0)
        .map((_, index) => (
          <BoxSkeleton
            key={index}
            width={"w-full"}
            radius={"rounded"}
            height={`${fontSizeHeightMd} md:${fontSizeHeight}`}
          />
        ))}
    </div>
  );
};

// Adding prop validation
TextSkeleton.propTypes = {
  noOfRows: PropTypes.number,             // Number of rows to display
  fontSizeHeightMd: PropTypes.string,     // Font size height for medium screens (default: "h-[16px]")
  fontSizeHeight: PropTypes.string,       // Font size height for small screens (default: "h-[14px]")
  width: PropTypes.string,                // Width of the skeleton (default: "w-full")
};

export default TextSkeleton;
