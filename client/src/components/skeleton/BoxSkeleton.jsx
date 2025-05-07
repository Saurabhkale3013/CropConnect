// import React from "react";

// function BoxSkeleton({ height, width, paddingX, paddingY, radius}) {
//   return (
//     <div
//       className={`bg-gray-300 ${radius} ${paddingX} ${paddingY} ${height} ${width} animate-pulse`}
//     ></div>
//   );
// }

// export default BoxSkeleton;












import React from "react";
import PropTypes from "prop-types"; // ✨ Import PropTypes

function BoxSkeleton({ height, width, paddingX, paddingY, radius }) {
  return (
    <div
      className={`bg-gray-300 ${radius} ${paddingX} ${paddingY} ${height} ${width} animate-pulse`}
    ></div>
  );
}

BoxSkeleton.propTypes = {
  height: PropTypes.string.isRequired,   // Height class (like 'h-6', 'h-10')
  width: PropTypes.string.isRequired,    // Width class (like 'w-full', 'w-32')
  paddingX: PropTypes.string,            // Optional padding on x-axis
  paddingY: PropTypes.string,            // Optional padding on y-axis
  radius: PropTypes.string,              // Optional border-radius class
};

export default BoxSkeleton;
