import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-sm" };
const variants = {
  fill: {
    green_500: "bg-green-500 text-white-A700",
    bluegray_800: "bg-bluegray-800",
    blue_A201: "bg-blue-A201 text-white-A700",
    green_50: "bg-green-50 text-green-500",
    blue_50: "bg-blue-50 text-blue-A201",
  },
  outline: { blue_A201: "border border-blue-A201 border-solid text-blue-A201" },
};
const sizes = {
  xs: "p-[3px]",
  sm: "p-[7px]",
  md: "p-2.5",
  lg: "p-[15px]",
  xl: "p-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "green_500",
    "bluegray_800",
    "blue_A201",
    "green_50",
    "blue_50",
  ]),
};

export { Button };
