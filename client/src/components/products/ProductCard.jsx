import React from "react";
import PropTypes from "prop-types"; // ✨ Imported PropTypes
import { addProductData } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductCard({ data, addOverlay = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToDetailsPage = () => {
    dispatch(addProductData(data));
    navigate(`details/${data._id}`);
  };

  return (
    <div
      className="w-full cursor-pointer"
      onClick={() => {
        if (addOverlay) return;
        goToDetailsPage();
      }}
    >
      <div className="relative h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        {addOverlay && (
          <div className="absolute inset-0 bg-black opacity-70 rounded-lg z-20 flex justify-center items-center">
            <span className="text-white text-center text-sm px-4 md:text-base">
              Not Within Delivery Radius
            </span>
          </div>
        )}

        <div className="relative z-10">
          <img
            className="lg:h-48 h-28 w-full object-cover object-center"
            src={data.image}
            alt="product"
          />
          <div className="px-3 md:px-6 pt-3 md:pt-6 pb-1 md:pb-4">
            <h1 className="title-font text-base md:text-lg font-medium text-gray-900 mb-1">
              {data.name}
            </h1>
            <h2 className="text-xs mb-1 md:mb-2 font-medium text-gray-400">
              BRAND: {data.brand}
            </h2>
            <p className="mb-1 text-sm md:text-base text-red-500 font-semibold">
              Rs.{data.pricePerUnit}/{data.measuringUnit}
            </p>
            <h2 className="text-xs title-font font-medium text-gray-400 mb-2">
              Minimum Order Quantity: {data.minimumOrderQuantity}
              {data.measuringUnit}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✨ PropTypes added here
ProductCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    pricePerUnit: PropTypes.number.isRequired,
    measuringUnit: PropTypes.string.isRequired,
    minimumOrderQuantity: PropTypes.number.isRequired,
    // location: PropTypes.shape({
    //   latitude: PropTypes.number,
    //   longitude: PropTypes.number,
    // }),
  }).isRequired,
  addOverlay: PropTypes.bool,
};

export default ProductCard;
