// import React from "react";

// const InputTag = ({
//   label,
//   type,
//   placeholder,
//   outlineColor,
//   value,
//   setFormData,
//   toUpdate
// }) => {
//   return (
//     <div>
//       <label className="block mb-2 text-sm font-medium text-gray-900">
//         {label}
//       </label>
//       <input
//         type={type}
//         className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm ${outlineColor} rounded-lg block w-full p-2.5`}
//         placeholder={placeholder}
//         value={value}
//         onChange={(e) => {
//           setFormData((prev) => {
//             return {
//               ...prev,
//               [toUpdate]: e.target.value,
//             };
//           });
//         }}
//         required
//       />
//     </div>
//   );
// };

// export default InputTag;




import React from "react";
import PropTypes from "prop-types"; // ✨ Import PropTypes

const InputTag = ({
  label,
  type,
  placeholder,
  outlineColor,
  value,
  setFormData,
  toUpdate,
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm ${outlineColor} rounded-lg block w-full p-2.5`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setFormData((prev) => {
            return {
              ...prev,
              [toUpdate]: e.target.value,
            };
          });
        }}
        required
      />
    </div>
  );
};

// ✨ PropTypes added for validation
InputTag.propTypes = {
  label: PropTypes.string.isRequired, // Ensures label is a required string
  type: PropTypes.string.isRequired, // Ensures type is a required string
  placeholder: PropTypes.string, // Ensures placeholder is a string (optional)
  outlineColor: PropTypes.string, // Ensures outlineColor is a string (optional)
  value: PropTypes.string.isRequired, // Ensures value is a required string
  setFormData: PropTypes.func.isRequired, // Ensures setFormData is a required function
  toUpdate: PropTypes.string.isRequired, // Ensures toUpdate is a required string
};

export default InputTag;

