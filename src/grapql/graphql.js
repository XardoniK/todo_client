import axios from 'axios';

const GRAPHQL_API_URL = '//localhost:4000/graphql';

export const graphQLRequest = async (query, variables) => {
	try {
		const response = await axios.post(GRAPHQL_API_URL, {
			query,
			variables
		});

		console.log(response);

		return response.data.data;
	} catch (e) {
		console.log(e);

		return null;
	}
};

export const graphQLMutation = async (query, variables) => {
	try {
		const response = await axios.post(GRAPHQL_API_URL, {
			query,
			variables,
		});
	} catch (e) {
		console.log(e);
	}
};
