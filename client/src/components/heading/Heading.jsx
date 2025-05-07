// import React from "react";

// const Heading = ({
//   text,
//   marginY = "my-6 md:my-8",
//   textAlign = "text-center",
//   paddingX = "px-4",
// }) => {
//   return (
//     <h1
//       className={`leading-none ${textAlign} tracking-tight text-gray-900 text-xl md:text-2xl lg:text-3xl font-medium ${marginY} ${paddingX}`}
//     >
//       {text}
//     </h1>
//   );
// };

// export default Heading;




import React from "react";
import PropTypes from "prop-types"; // ✨ Import PropTypes

const Heading = ({
  text,
  marginY = "my-6 md:my-8",
  textAlign = "text-center",
  paddingX = "px-4",
}) => {
  return (
    <h1
      className={`leading-none ${textAlign} tracking-tight text-gray-900 text-xl md:text-2xl lg:text-3xl font-medium ${marginY} ${paddingX}`}
    >
      {text}
    </h1>
  );
};

// ✨ PropTypes added here
Heading.propTypes = {
  text: PropTypes.string.isRequired, // Ensures text is a required string
  marginY: PropTypes.string, // Ensures marginY is a string
  textAlign: PropTypes.string, // Ensures textAlign is a string
  paddingX: PropTypes.string, // Ensures paddingX is a string
};

// Default props
Heading.defaultProps = {
  marginY: "my-6 md:my-8", // Default value for marginY
  textAlign: "text-center", // Default value for textAlign
  paddingX: "px-4", // Default value for paddingX
};

export default Heading;
