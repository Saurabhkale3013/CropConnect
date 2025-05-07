// import React from "react";
// import Spinner from "../loading/Spinner";

// const SubmitButton = ({ bgColor, hoverBgColor, text, isLoading }) => {
//   return (
//     <button
//       type="submit"
//       className={`w-full flex justify-center items-center text-white ${bgColor} hover:${hoverBgColor} font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
//     >
//       {isLoading && <Spinner width="w-5" color="#ffffff" />}
//       {text}
//     </button>
//   );
// };

// export default SubmitButton;



import React from "react";
import PropTypes from "prop-types"; // ✨ Importing PropTypes
import Spinner from "../loading/Spinner";

const SubmitButton = ({ bgColor, hoverBgColor, text, isLoading }) => {
  return (
    <button
      type="submit"
      className={`w-full flex justify-center items-center text-white ${bgColor} hover:${hoverBgColor} font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
    >
      {isLoading && <Spinner width="w-5" color="#ffffff" />}
      {text}
    </button>
  );
};

// ✨ PropTypes added here
SubmitButton.propTypes = {
  bgColor: PropTypes.string.isRequired, // Ensures bgColor is a required string
  hoverBgColor: PropTypes.string.isRequired, // Ensures hoverBgColor is a required string
  text: PropTypes.string.isRequired, // Ensures text is a required string
  isLoading: PropTypes.bool.isRequired, // Ensures isLoading is a required boolean
};

export default SubmitButton;
