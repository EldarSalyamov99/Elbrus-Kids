import type { PayloadAction} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { AuthUserType, UserType } from "../../../Types/userTypes";


const initialState: AuthUserType ={
    status: 'fetching'
}
export const userSlice = createSlice({
    name: 'user', 
    initialState: initialState as AuthUserType,
    reducers:{
        setUser:(state, action: PayloadAction<UserType>) =>({
            status: 'success',
            user: action.payload,
        }),
        setUserErr: (state) =>({
            status: 'failed',
        }),
    },
   
});

export default userSlice.reducer;
export const {setUser, setUserErr} = userSlice.actions;