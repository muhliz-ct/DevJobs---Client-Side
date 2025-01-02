import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface userState {
    username: string | null,
    email: string | null
}


const initialState: userState = {
    username : null,
    email : null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        login:(state, action: PayloadAction<{username: string , email: string}>)=>{
            state.username = action.payload.username,
            state.email = action.payload.email
        },
        logout:(state)=>{
            state.username = null;
            state.email = null;
            localStorage.removeItem('access-token');
        }
    }

})


export default userSlice.reducer
export const {login, logout} = userSlice.actions