import React from "react";
// FORWARD REFRENCE HOOK

// production grade apps
// example - we are making a login app and we need to have its input refrence at some other place so we need to use this hook

// we are making a common button which we can use anywhre
export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  // rest of all the properties we spread and we took it
  ...props
  // all additional properties will be taken up
}) {
  return (
    // we have written { } so that it will be taken by the user itself
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
