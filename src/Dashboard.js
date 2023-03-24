import React from 'react'
import './App.css';
import { Outlet } from 'react-router-dom'

const navigate = [
    { name: 'Dashboard ', href: '/', current: true },
    { name: 'Region ', href: 'region', current: false },
    { name: 'Country ', href: 'country', current: false },
    { name: 'Location ', href: 'location', current: false },
    { name: 'Department ', href: 'department', current: false },
    { name: 'Employee ', href: 'employee', current: false },
    { name: 'Job ', href: 'job', current: false },
    { name: 'User ', href: 'user', current: false }
]
export default function Dashboard() {
    return (
        <div>            
            {navigate.map((item) => {
                return (
                    <a key={item.name} href={item.href}>{item.name}</a>
                )
            })}
            <header>                
                <ul>
                    <li>{navigate.name}</li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}