export { authReducer as default };

const authReducer = (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				uid: action.uid
			};
		case 'LOGOUT': {
			return {};
		}
		default:
			return state;
	}
};