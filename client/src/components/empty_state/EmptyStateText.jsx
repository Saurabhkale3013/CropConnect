// import React from "react";

// const EmptyStateText = ({ text = "No Data Available", marginY=0 }) => {
//   return <div className={`text-xs md:text-sm lg:text-base w-11/12 mx-auto text-gray-500 font-medium text-center ${marginY}`}>{text}</div>;
// };

// export default EmptyStateText;



import React from "react";
import PropTypes from "prop-types"; // ✨ Importing PropTypes

const EmptyStateText = ({ text = "No Data Available", marginY = 0 }) => {
  return (
    <div
      className={`text-xs md:text-sm lg:text-base w-11/12 mx-auto text-gray-500 font-medium text-center ${marginY}`}
    >
      {text}
    </div>
  );
};

// ✨ PropTypes added here
EmptyStateText.propTypes = {
  text: PropTypes.string, // Ensures text is a string, default is "No Data Available"
  marginY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Ensures marginY can be a string or number
};

export default EmptyStateText;

