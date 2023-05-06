import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder20: "rounded-[20px]",
  icbCircleBorder16: "rounded-[16px]",
};
const variants = {
  FillGray900: "bg-gray_900 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_900",
  icbFillGray9000c: "bg-gray_900_0c",
  icbFillWhiteA700: "bg-white_A700",
};
const sizes = { sm: "p-[15px]", smIcn: "p-[5px]", mdIcn: "p-2.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
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
  shape: PropTypes.oneOf(["icbCircleBorder20", "icbCircleBorder16"]),
  variant: PropTypes.oneOf([
    "FillGray900",
    "FillWhiteA700",
    "icbFillGray9000c",
    "icbFillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
