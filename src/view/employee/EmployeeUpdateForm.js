import React, { useEffect, useState } from 'react'
import EmployeeApi from '../../api/EmployeeApi'

export default function EmployeeUpdateForm(props) {
    const [employee, setEmployee] = useState([])
    const [values, setValue] = useState({
        id: undefined,
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        phone: undefined,
        hire: undefined,
        salary: undefined
    })

    useEffect(() => {
        EmployeeApi.getOne(props.id).then(data => {
            setEmployee(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValue({ ...values, [name]: event.target.value })
    }
    const onEdit = async () =>{
        const payload = {
            id: (props.id),
            firstName: (values.firstName),
            lastName: (values.lastName),
            email: (values.email),
            phone: (values.phone),
            hire: (values.hire),
            salary: (values.salary)
        }
        await EmployeeApi.update(payload).then(()=>{
            props.setRefresh(true)
            window.alert('Data Successfully Updated')
        })
    }
    return (
        <div>
            <h2>Edit Employee</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Employee ID :</label>
                    <input type='text' defaultValue={employee.employeeId} disabled></input>
                </div>
                <div>
                    <label>First Name : </label>
                    <input type='text' defaultValue={employee.firstName} onChange={HandleChange('firstName')}></input>
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type='text' defaultValue={employee.lastName} onChange={HandleChange('lastName')}></input>
                </div>
                <div>
                    <label>Email : </label>
                    <input type='text' defaultValue={employee.email} onChange={HandleChange('email')}></input>
                </div>
                <div>
                    <label>Phone Number : </label>
                    <input type='text' defaultValue={employee.phoneNumber} onChange={HandleChange('phone')}></input>
                </div>
                <div>
                    <label>Hire Date : </label>
                    <input type='date' defaultValue={employee.hireDate} onChange={HandleChange('hire')}></input>
                </div>
                <div>
                    <label>Salary : </label>
                    <input type='number' defaultValue={employee.salary} onChange={HandleChange('salary')}></input>
                </div>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
