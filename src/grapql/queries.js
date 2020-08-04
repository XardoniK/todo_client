export const todoDataGetQuery = `
	query {
		todoLists {
			id
			name
			todoGroupID
			todoItems {
				id
			}
		}
		todoItems {
			id
			name
			checked
			todoListID
		}
		todoGroups {
			id
			name
			todoLists {
				id
			}
		}
	}
`;

export const todoItemAddQuery = `
	mutation todoItemAdd($name: String!, $todoListID: ID!) {
		todoItemAdd(name: $name, todoListID: $todoListID) {
			id
			todoListID
		}
	}
`;

export const todoItemRemoveQuery = `
	mutation todoItemRemove($id: ID) {
		todoItemRemove(id: $id) {
			id
		}
	}             
`;

export const todoItemSetCheckedQuery = `
	mutation todoItemSetChecked($id: ID!) {
		todoItemSetChecked(id: $id) {
			id
		}
	}
`;

export const todoListAddQuery = `
	mutation todoListAdd($name: String!, $todoGroupID: ID) {
		todoListAdd(name: $name, todoGroupID: $todoGroupID) {
			id
			todoGroupID
		}
	}
`;

export const todoListRemoveQuery = `
	mutation todoListRemove($id: ID!) {
		todoListRemove(id: $id) {
			id
		}
	}
`;

export const todoGroupAddQuery = `
	mutation todoGroupAdd($name: String!) {
		todoGroupAdd(name: $name) {
			id
		}
	}
`;

export const todoGroupRemoveQuery = `
	mutation todoGroupRemove($id: ID!) {
		todoGroupRemove(id: $id) {
			id
		}
	}
`;
