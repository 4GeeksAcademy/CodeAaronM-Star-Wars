import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			let text =
				"This key will be overwritten because state.store does not reflect anything that is not hardcoded.";
			setState({ store: { ...state.store, temp: text }, actions: state.actions });
			setState({ store: { ...state.store, contacts: [1, 2, 3, 4, 5] }, actions: state.actions });
			setTimeout(() => console.log("APPCONTEXT", state.store), 2000);
		}, []);

		return (
			<Context.Provider value={{ state, setState }}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
