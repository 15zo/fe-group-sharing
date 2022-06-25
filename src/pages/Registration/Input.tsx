import React from "react";

function Input({ ...props }) {
  return (
    <input
      {...props}
      style={{
        fontFamily: "Pretendard",
        fontWeight: 400,
        fontSize: "13px",
        height: "40px",
        lineHeight: "20px",
        padding: "11px 16px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        letterSpacing: "0.4px",
        color: "#808080",
        width: "100%",
      }}
    />
  );
}

export default Input;
