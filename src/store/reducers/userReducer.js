export default function userReducer(state = {name:'obed'}, action) {
	switch (action.type) {
		case 'LOG_IN':
			return Object.assign( {}, state, {token: action.token}) 
		case 'LOAD_USER':
			return Object.assign( {}, state, {
				name: action.user.name,
				_id: action.user._id,
				email: action.user.email
			})
		case 'LOG_OUT':
			return {}
		default:
			return state
	}
}