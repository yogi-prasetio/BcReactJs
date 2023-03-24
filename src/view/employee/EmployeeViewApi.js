import React, { useEffect, useState } from 'react'
import EmployeeApi from '../../api/EmployeeApi'
import EmployeeCreateForm from './EmployeeCreateForm'
import EmployeeUpdateForm from './EmployeeUpdateForm'

export default function EmployeeViewApi() {
    const [employee, setEmployee] = useState([])
    const [refresh,setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()
    useEffect(() => {
        EmployeeApi.read().then(data => {
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
    const onClick = (id) => {
        setDisplayEdit(true)
        setId(id)
    }
    return (
        <div>
            { displayEdit ? <EmployeeUpdateForm
                id={id}
                setRefresh={setRefresh} /> :
                display ? <EmployeeCreateForm
                    setRefresh={setRefresh}
                    setDisplay={setDisplay}
                /> :
                <>
                    <h2>List Employee</h2>
                    <button onClick={() => setDisplay(true)}>Add Employee</button>
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
                                        <button onClick={() => onClick(emp.employeeId)}> Update </button>
                                            <button onClick={()=>onDelete(emp.employeeId)}> Delete </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    </>
            }
        </div>
    )
}