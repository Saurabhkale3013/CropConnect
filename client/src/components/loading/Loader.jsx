// import PulseLoader from "react-spinners/PulseLoader";
// import React from "react";

// function Loader(props) {
//   return (
//     <PulseLoader 
//       color={props.color}
//       loading="true"
//       size={props.size}
//       margin={2}
//       aria-label="Loading Spinner"
//       data-testid="loader"
//     />
//   );
// }

// export default Loader;



import PulseLoader from "react-spinners/PulseLoader";
import React from "react";
import PropTypes from "prop-types"; // ✨ Import PropTypes

function Loader(props) {
  return (
    <PulseLoader 
      color={props.color}
      loading="true"
      size={props.size}
      margin={2}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

// ✨ PropTypes added for validation
Loader.propTypes = {
  color: PropTypes.string.isRequired,  // Ensures color is a required string
  size: PropTypes.number.isRequired,   // Ensures size is a required number
};

export default Loader;
