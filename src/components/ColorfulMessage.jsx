import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    //color=coler の場合は省略できる
    color,
    fontsize: "18pt"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
