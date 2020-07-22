export const todoAddQuery = `
	mutation todoAdd($name: String!, $todoGroupID: ID!) {
		todoAdd(name: $name, todoGroupID: $todoGroupID) {
			id
		}
	}
`;

export const todoRemoveQuery = `
	mutation todoRemove($id: ID) {
		todoRemove(id: $id) {
			id
		}
	}             
`;

export const todoListGetQuery = `
	query {
		todoList {
			id
			name
			todoGroupID
		}
	}
`;

export const todoGroupListGetQuery = `
	query {
		todoGroupList {
			id
			name
			todos {
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
