import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from './Dashboard'
import CounterHook from './CounterHook'
import RegionViewApi from './view/RegionViewApi'
import CountryViewApi from './view/CountryViewApi'
import LocationViewApi from './view/LocationViewApi'
import DepartmentViewApi from './view/DepartmentViewApi'
import EmployeeViewApi from './view/EmployeeViewApi'
import UserViewApi from './view/UserViewApi'

export default function Route() {
    return useRoutes([
        {
            path: '/',
            element: <Dashboard />,
            children: [
                { path: 'counter', element: <CounterHook /> },
                { path: 'region', element: <RegionViewApi /> },
                { path: 'country', element: <CountryViewApi /> },
                { path: 'location', element: <LocationViewApi /> },
                { path: 'department', element: <DepartmentViewApi /> },
                { path: 'employee', element: <EmployeeViewApi /> },
                { path: 'user', element: <UserViewApi /> },
            ]
        },
        {
            path: '*', element: <Navigate to='/404' replace />
        }
    ]
    )
}
