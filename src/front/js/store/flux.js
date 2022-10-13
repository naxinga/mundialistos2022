const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			email: null,
			nickname: null,
			password: null,
		},
		actions: {
			
		}
	};
};

export default getState;