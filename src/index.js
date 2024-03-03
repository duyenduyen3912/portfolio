import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";

import App from "./App";

ReactDOM.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#8CCDB0",
        colorPrimaryBorder: "#F6D6D6",
        colorPrimaryHover: "#F6D6D6",
      },
    }}
  >
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
