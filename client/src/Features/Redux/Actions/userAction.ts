import { createAsyncThunk } from "@reduxjs/toolkit";
import { authCheckService } from "../../../Services/authService";


// eslint-disable-next-line import/prefer-default-export
export const userCheckActionThunk = createAsyncThunk('/user/userCheckActionThunk', async () =>{
    try{
        const data = await authCheckService();
        return data
    }catch(err){
        return Promise.reject(err)
    }
})