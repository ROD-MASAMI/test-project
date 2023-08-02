import React from "react";

export const TextInputs = (props) => {
  const { length, Placeholder, Label } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 15,
        width: "80%",
        padding: 5,
      }}
    >
      <span style={{ marginBottom: 5 }}>{Label}</span>
      <input
        placeholder={Placeholder}
        style={{
          color: "black",
          width: length,
          border: "1px",
          borderRadius: 10,
          padding: 10,
          backgroundColor: "white",
        }}
      />
    </div>
  );
};
