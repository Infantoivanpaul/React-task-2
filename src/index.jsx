import React from "react";
import ReactDOMClient from "react-dom/client";
import { Admin } from "./screens/Admin";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Admin />);
