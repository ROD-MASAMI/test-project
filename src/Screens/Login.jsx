import React from "react";
import BG from "../assets/Images/BG.jpg";
import { TextInputs } from "../Components/Inputs";
import { CustomButton } from "../Components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "blueviolet",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "60%",
          flexDirection: "row",
          display: "flex",
          border: "1px solid black",
          justifyContent: "space-between",
        }}
      >
        <img src={BG} alt="" style={{ flex: 1 }} />
        <div
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            backgroundColor: "#e5f1de",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: 20 }}>
            <h2>WELCOME</h2>
          </span>
          <TextInputs length={"90%"} Placeholder="Enter Email" Label="Email" />
          <TextInputs
            length={"90%"}
            Placeholder="Enter Password"
            Label="Password"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
              marginTop: 10,
            }}
          >
            <span>Forgot Password?</span>
            <CustomButton
              onPress={() => navigate("/Home")}
              Length="10%"
              Title="Login"
              color="lightgreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
