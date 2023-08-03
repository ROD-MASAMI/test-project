import React from "react";

export const CustomButton = (props) => {
  const { Length, Title, color, onPress } = props;
  return (
    <div
      onClick={onPress}
      style={{
        // width: Length,
        padding: 15,
        borderRadius: 10,
        backgroundColor: color,
        justifyContent: "center",
        display: "flex",
      }}
    >
      <span>{Title}</span>
    </div>
  );
};
