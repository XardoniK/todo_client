import React from "react";
import {render, fireEvent} from "./test-utils";
import TodoGroupAddField from "../components/todo_group/TodoGroupAddField";

it('renders correctly', () => {
	const {queryByTestId, queryByPlaceholderName} = render(<TodoGroupAddField/>)

	expect(queryByTestId('todo-group-add-button')).toBeTruthy()
	expect(queryByTestId('todo-group-add-input')).toBeTruthy()
});

describe('TodoGroupAddField', () => {
	describe('', () => {
		it('updates on change', () => {
			const {queryByTestId} = render(<TodoGroupAddField/>)

			const input = queryByTestId('todo-group-add-input')

			fireEvent.change(input, {target: {value: "sprawdzam"}})

			expect(input.value).toBe('sprawdzam')
		})
	})
})

