import {graphQLRequest} from "../../grapql/graphql";
import {todoDataGetQuery} from "../../grapql/queries";
import {todoItemsSave} from "./todo_item";
import {todoListsSave} from "./todo_list";
import {todoGroupsSave} from "./todo_group";

export const todoDataGet = () => {
	return async (dispatch) => {
		const data = await graphQLRequest(todoDataGetQuery);

		if (data) {
			dispatch(todoItemsSave(data));
			dispatch(todoListsSave(data));
			dispatch(todoGroupsSave(data));
		}

		// if (data && data.todoLists) {
		// 	dispatch(todoListsSave(data.todoLists));
		// }
	}
}
