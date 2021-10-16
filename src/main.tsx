import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { moviesApi } from "./api";

const store = configureStore({
	reducer: {
		[moviesApi.reducerPath]: moviesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(moviesApi.middleware),
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
