import React from "react";
import {render as rtlRender} from '@testing-library/react';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import combined_reducers from "../redux/combined_reducers";

function render(
	ui,
	{
		initialState,
		store = createStore(combined_reducers),
		...renderOptions
	} = {}
) {
	function Wrapper({children}) {
		return <Provider store={store}>{children}</Provider>
	}

	return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

export * from '@testing-library/react'

export {render}
