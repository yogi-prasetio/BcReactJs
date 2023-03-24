import React, { useState } from 'react'
import JobApi from '../../api/JobApi'

export default function JobCreateForm(props) {
    const [value, setValue] = useState({
        id: undefined,
        job_title: undefined,
        min_salary: undefined,
        max_salary: undefined
    })
    const HandleChange = name => event => {
        setValue({ ...value, [name]: event.target.value })
    }
    const onSubmit = async()=> {
        const payload = {
            id: (value.id),
            job_title: (value.job_title),
            min_salary: (value.min_salary),
            max_salary: (value.max_salary)
        }
        await JobApi.create(payload)
        .then(()=>{
            props.setRefresh(true)
            window.alert('Data Success Insert')
        })
    }
    return (
        <div>
            <h2>Add Job</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Job id : </label>
                    <input type='text' placeholder='Job ID' onChange={HandleChange('id')}></input>
                </div>
                <div>
                    <label>Job Title : </label>
                    <input type='text' placeholder='Job Title' onChange={HandleChange('job_title')}></input>
                </div>
                <div>
                    <label>Min Salary : </label>
                    <input type='number' placeholder='Min Salary' onChange={HandleChange('min_salary')}></input>
                </div>
                <div>
                    <label>Max Salary : </label>
                    <input type='number' placeholder='Max Salary' onChange={HandleChange('max_salary')}></input>
                </div>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    )
}