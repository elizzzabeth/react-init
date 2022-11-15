import React from "react";
import PropTypes from "prop-types";

const HeartIcon = ({ color = "#9AB3C2", width = 19, height = 17 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 19 17">
      <path
        fill={color}
        d="M18.75 5.518c.562 5.07-7.313 10.706-9 10.706-2.25 0-9.563-6.198-9-10.706.539-4.324 5.625-6.199 9-2.818 3.374-3.38 8.437-2.254 9 2.818z"
      ></path>
    </svg>
  );
};

HeartIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

export default HeartIcon;
