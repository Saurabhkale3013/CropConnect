import React,{ useEffect } from "react";
import PropTypes from "prop-types"; 

const FormSwitch = ({type, isSignInForm, setIsSignInForm}) => {

  return (
    <p className="text-sm text-center font-medium text-gray-500 dark:text-gray-400">
      {isSignInForm?"Don’t have an account yet?":"Already have an account?"}{" "}
      <a
        className={`font-medium ${
          type === "seller" ? "text-green-700" : "text-blue-600"
        } hover:underline cursor-pointer`}
        onClick={() => setIsSignInForm((prev)=>!prev)}
      >
        {isSignInForm?"Create an account":"Sign In"}
      </a>
    </p>
  );
};


FormSwitch.propTypes = {
  type: PropTypes.oneOf(["seller", "buyer"]).isRequired, // Ensures type is either "seller" or "buyer"
  isSignInForm: PropTypes.bool.isRequired,  // isSignInForm is a required boolean
  setIsSignInForm: PropTypes.func.isRequired, // setIsSignInForm is a required function
};

export default FormSwitch;
