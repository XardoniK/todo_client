import * as R from "ramda";
import {TODO_LISTS} from "../../constants";

export const todoListsSave = (state, action) => {

	return {
		...state,
		[TODO_LISTS]: action[TODO_LISTS],
	};
}
