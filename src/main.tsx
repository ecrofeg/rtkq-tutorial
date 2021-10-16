import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
	reducer: {},
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<div className="layout">
				<App />
			</div>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);