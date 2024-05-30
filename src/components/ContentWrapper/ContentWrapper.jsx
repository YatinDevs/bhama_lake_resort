import React from "react";

function ContentWrapper({ children, className }) {
  return (
    <div className={`w-full max-w-[960px] mx-auto my-0  py-0 ` + className}>
      {children}
    </div>
  );
}

export default ContentWrapper;
