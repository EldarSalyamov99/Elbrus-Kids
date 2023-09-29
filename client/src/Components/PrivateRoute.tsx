import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';



type PrivateRouterProps = {
    children?: React.ReactElement
    isAllowed: boolean;
    redirectTo?: string
}
export default function PrivateRoute({
    children,
    isAllowed,
    redirectTo = '/',
  }: PrivateRouterProps): JSX.Element {
    if(!isAllowed) {
        return <Navigate to={redirectTo} />
    }
  return children || <Outlet />
}
