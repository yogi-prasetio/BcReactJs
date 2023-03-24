import React, { useState } from 'react'
import EmployeeApi from '../../api/EmployeeApi'

export default function EmployeeCreateForm(props) {
    const [value, setValue] = useState({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        phone: undefined,
        hire: undefined,
        salary: undefined
    })
    const HandleChange = name => event => {
        setValue({ ...value, [name]: event.target.value })
    }
    const onSubmit = async()=> {
        const payload = {
            firstName: (value.firstName),
            lastName: (value.lastName),
            email: (value.email),
            phone: (value.phone),
            hire: (value.hire),
            salary: (value.salary)
        }
        await EmployeeApi.create(payload)
        .then(()=>{
            props.setRefresh(true)
            window.alert('Data Success Insert')
        })
    }
    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>First Name : </label>
                    <input type='text' placeholder='First Name' onChange={HandleChange('firstName')}></input>
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type='text' placeholder='Last Name' onChange={HandleChange('lastName')}></input>
                </div>
                <div>
                    <label>Email : </label>
                    <input type='text' placeholder='Email' onChange={HandleChange('email')}></input>
                </div>
                <div>
                    <label>Phone Number : </label>
                    <input type='text' placeholder='Phone Number' onChange={HandleChange('phone')}></input>
                </div>
                <div>
                    <label>Hire Date : </label>
                    <input type='date' placeholder='Hire Date' onChange={HandleChange('hire')}></input>
                </div>
                <div>
                    <label>Salary : </label>
                    <input type='number' placeholder='Salary' onChange={HandleChange('salary')}></input>
                </div>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    )
}