/**
 * INIT action
 * @property {string} type `@@INIT`
 */
export const initAction = {
	type: '@@INIT'
}

/**
 * LOGIN action
 * @property {string} type - `LOGIN`
 * @property {string} uid	- `abc-123`
 */
export const loginAction = {
	type: 'LOGIN',
	uid: 'abc-123'
}

/**
 * LOGOUT action
 * @property {string} type	- `LOGOUT`
 */
export const logoutAction = {
	type: 'LOGOUT'
}