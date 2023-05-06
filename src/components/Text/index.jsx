import React from "react";

const variantClasses = {
  h1: "font-bold text-5xl sm:text-[38px] md:text-[44px]",
  h2: "font-bold sm:text-4xl md:text-[38px] text-[40px]",
  h3: "md:text-3xl sm:text-[28px] text-[32px]",
  h4: "font-bold text-3xl sm:text-[26px] md:text-[28px]",
  h5: "text-2xl md:text-[22px] sm:text-xl",
  h6: "text-xl",
  body1: "text-lg",
  body2: "text-base",
  body3: "font-medium sm:text-5xl md:text-5xl text-[102px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
