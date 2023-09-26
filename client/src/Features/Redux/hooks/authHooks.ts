import type React from 'react';
import { logoutService, signInService, signUpService } from '../../../Services/authService';
import { setUser, setUserErr } from '../Slices/userSlice';
import { useAppDispatch } from './reduxHooks';
import type { UserFormType } from '../../../Types/userTypes';

export default function authHooks(): {
  signUpActionHandler: (data: UserFormType) => Promise<void>;
  signInActionHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  signOutActionHandler: (e: React.MouseEvent<HTMLElement>) => Promise<void>;
} {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();

  const signUpActionHandler = async (data: UserFormType): Promise<void> => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('password', data.password);
      const data1 = await signUpService(formData);
      dispatch(setUser(data1));
    } catch (err) {
      dispatch(setUserErr());
    }
  };

  const signInActionHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = await signInService(formData);
      dispatch(setUser(data));
    } catch (err) {
      dispatch(setUserErr());
    }
  };

  const signOutActionHandler = async (e: React.MouseEvent<HTMLElement>): Promise<void> => {
    try {
      e.preventDefault();
      await logoutService();
      dispatch(setUserErr());
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return {
    signUpActionHandler,
    signInActionHandler,
    signOutActionHandler,
  };
}
