import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from './Dashboard'
import CounterHook from './CounterHook'
import RegionViewApi from './view/region/RegionViewApi'
import CountryViewApi from './view/country/CountryViewApi'
import LocationViewApi from './view/location/LocationViewApi'
import DepartmentViewApi from './view/department/DepartmentViewApi'
import EmployeeViewApi from './view/employee/EmployeeViewApi'
import JobViewApi from './view/job/JobViewApi'
import UserViewApi from './view/user/UserViewApi'

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
                { path: 'job', element: <JobViewApi /> },
                { path: 'user', element: <UserViewApi /> },
            ]
        },
        {
            path: '*', element: <Navigate to='/404' replace />
        }
    ]
    )
}
