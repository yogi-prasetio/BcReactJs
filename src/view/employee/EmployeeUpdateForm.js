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
        <div class="container">
          <div class="mb-3 mt-3">
            <h4>Edit Employee</h4>
            <hr aria-setsize={2} />
          </div>
            <form onSubmit={onEdit}>
                <div class="mb-3">
                    <label>Employee ID :</label>
                    <input type='text' class='form-control' defaultValue={employee.employeeId} disabled></input>
                </div>
                <div class="mb-3">
                    <label>First Name : </label>
                    <input type='text' class='form-control' defaultValue={employee.firstName} onChange={HandleChange('firstName')}></input>
                </div>
                <div class="mb-3">
                    <label>Last Name : </label>
                    <input type='text' class='form-control' defaultValue={employee.lastName} onChange={HandleChange('lastName')}></input>
                </div>
                <div class="mb-3">
                    <label>Email : </label>
                    <input type='text' class='form-control' defaultValue={employee.email} onChange={HandleChange('email')}></input>
                </div>
                <div>
                    <label>Phone Number : </label>
                    <input type='text' class='form-control' defaultValue={employee.phoneNumber} onChange={HandleChange('phone')}></input>
                </div>
                <div class="mb-3">
                    <label>Hire Date : </label>
                    <input type='date' class='form-control' defaultValue={employee.hireDate} onChange={HandleChange('hire')}></input>
                </div>
                <div class="mb-3">
                    <label>Salary : </label>
                    <input type='number' class='form-control' defaultValue={employee.salary} onChange={HandleChange('salary')}></input>
                </div>
                <div class="mb-3 text-end">       
                    <button class='btn btn-secondary' style={{ marginRight: "1rem" }} onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button class='btn btn-primary' type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
