export const todoItemsGetQuery = ``;

export const todoItemAddQuery = `
	mutation todoItemAdd($name: String!, $todoGroupID: ID!) {
		todoAdd(name: $name, todoGroupID: $todoGroupID) {
			id
		}
	}
`;

export const todoItemRemoveQuery = `
	mutation todoItemRemove($id: ID) {
		todoRemove(id: $id) {
			id
		}
	}             
`;

export const todoItemSetCheckedQuery = `
	mutation todoItemSetChecked($id: ID!) {
		todoSetChecked(id: $id) {
			id
		}
	}
`;

export const todoListsGetQuery = `
	query {
		todoLists {
			id
			name
			todoGroupID
			todoItems {
				id
				name
				checked
			}
		}
	}
`

export const todoGroupsGetQuery = `
	query {
		todoGroups {
			id
			name
			todoLists {
				id
				name
			}
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

export const clearDBQuery = `
	mutation clearDB {
		clearDB {
			id
		}
	}
`;
