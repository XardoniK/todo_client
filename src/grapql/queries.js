export const todoAddQuery = `
	mutation todoAdd($name: String!) {
		todoAdd(name: $name) {
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
		}
	}
`;

export const todoGroupListGetQuery = `
	query {
		todoGroupList {
			id
			name
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
