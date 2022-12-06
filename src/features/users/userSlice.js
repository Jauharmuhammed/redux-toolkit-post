import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1, name:'Jauhar Mahammed'},
    {id:2, name:'Shaikh Zayid'},
    {id:3, name:'Anas'},
    {id:4, name:'Althaf Muhammed'},
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{

    }
})

export const allUsers = (state) => state.users

export default userSlice.reducer