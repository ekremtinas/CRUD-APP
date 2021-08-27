export const AppReducer =  (state, action) => {

    switch (action.type) {
        case 'INITIAL_DATA':
            const data = []
            action.payload.forEach((app) => {
                data.unshift(app);
            })
            return {
                users: data
            }

        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => {
                    return(
                        user._id !== action.payload
                    )
                })
            }
        case 'ADD_USER':
            return{
                users: [action.payload, ...state.users]
            }

        case 'EDIT_USER':
            const updateUser = action.payload;
            const updateUsers = state.users.map(user => {
                if(user._id === updateUser._id){
                    return updateUser; 
                }

                return user
            })
            return{
                users: updateUsers
            }
        default:
            return state
    }
}; 