// import React from "react";

// const FormHeading = ({ type, isSignInForm }) => {
//   return (
//     <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//       {isSignInForm?"Sign In to":"Create"}{" "}
//       <span
//         className={`${type === "seller" ? "text-green-700" : "text-blue-600"}`}
//       >
//         {type === "user" ? "User" : "Seller"}
//       </span>{" "}
//       account
//     </h2>
//   );
// };

// export default FormHeading;




import React from "react";
import PropTypes from "prop-types"; // ✨ Importing PropTypes

const FormHeading = ({ type, isSignInForm }) => {
  return (
    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      {isSignInForm ? "Sign In to" : "Create"}{" "}
      <span className={`${type === "seller" ? "text-green-700" : "text-blue-600"}`}>
        {type === "user" ? "User" : "Seller"}
      </span>{" "}
      account
    </h2>
  );
};

// ✨ PropTypes added here
FormHeading.propTypes = {
  type: PropTypes.oneOf(["user", "seller"]).isRequired, // Ensures type is either "user" or "seller"
  isSignInForm: PropTypes.bool.isRequired, // isSignInForm is a required boolean
};

export default FormHeading;

