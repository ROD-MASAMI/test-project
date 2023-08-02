import React from "react";

export const CustomButton = (props) => {
  const { Length, Title } = props;
  return (
    <div
      style={{
        // width: Length,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "lightgreen",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <span>{Title}</span>
    </div>
  );
};
