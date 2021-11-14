import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { moviesApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";

const store = configureStore({
	reducer: {
		[moviesApi.reducerPath]: moviesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(moviesApi.middleware),
});

// enable listener behavior for the store
setupListeners(store.dispatch);

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
