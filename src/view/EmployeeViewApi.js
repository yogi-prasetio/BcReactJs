import React, { useEffect, useState } from 'react'
import EmployeeApi from '../api/EmployeeApi'

export default function EmployeeViewApi() {
    const [employee, setEmployee] = useState([])
    const [refresh,setRefresh] = useState(false)
    useEffect(() => {
        EmployeeApi.list().then(data => {
            setEmployee(data)
        })
        setRefresh(false)
    }, [refresh])
    const onDelete = async(id) => {
        EmployeeApi.deleted(id).then(()=> {
            window.alert('Data Successfully Delete')
            setRefresh(true)
        })
    }
    return (
        <div>
            <h2>List Employee</h2>
            <table>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Hire Date</th>
                <th>Salary</th>
                <th>Action</th>
                <tbody>
                    {
                        employee && employee.map(emp => (
                            <tr key={emp.employeeId}>
                                <td>{emp.employeeId}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td>{emp.phoneNumber}</td>
                                <td>{emp.hireDate}</td>
                                <td>{emp.Salary}</td>
                                <td>
                                    <button onClick={()=>onDelete(emp.employeeId)}> Delete Employee </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
