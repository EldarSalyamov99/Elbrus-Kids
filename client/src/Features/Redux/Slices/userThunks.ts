import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { UpdateUserType } from '../../../Types/userTypes';

 const updateUserThunk = createAsyncThunk<UpdateUserType>('users/updateUser', (formData) =>
  axios.patch<UpdateUserType>(`/users/${formData.id}`, formData).then((res) => res.data)
);

export default updateUserThunk;