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
        <div class="container">
          <div class="mb-3 mt-3">
            <h4>Add Employee</h4>
            <hr aria-setsize={2} />
          </div>
            <form onSubmit={onSubmit}>
                <div class="mb-3">
                    <label>First Name : </label>
                    <input type='text' class='form-control' placeholder='First Name' onChange={HandleChange('firstName')}></input>
                </div>
                <div class="mb-3">
                    <label>Last Name : </label>
                    <input type='text' class='form-control' placeholder='Last Name' onChange={HandleChange('lastName')}></input>
                </div>
                <div class="mb-3">
                    <label>Email : </label>
                    <input type='text' class='form-control' placeholder='Email' onChange={HandleChange('email')}></input>
                </div>
                <div class="mb-3">
                    <label>Phone Number : </label>
                    <input type='text' class='form-control' placeholder='Phone Number' onChange={HandleChange('phone')}></input>
                </div>
                <div class="mb-3">
                    <label>Hire Date : </label>
                    <input type='date' class='form-control' placeholder='Hire Date' onChange={HandleChange('hire')}></input>
                </div>
                <div class="mb-3">
                    <label>Salary : </label>
                    <input type='number' class='form-control' placeholder='Salary' onChange={HandleChange('salary')}></input>
                </div>
                <div class="mb-3 text-end">
                    <button class='btn btn-secondary' style={{ marginRight: "1rem" }} onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button class='btn btn-primary' type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    )
}