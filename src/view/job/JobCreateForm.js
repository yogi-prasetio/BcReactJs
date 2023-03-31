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
        <div class="container">
          <div class="mb-3 mt-3">
            <h4>Add Job</h4>
            <hr aria-setsize={2} />
          </div>
            <form onSubmit={onSubmit}>
                <div class="mb-3">
                    <label>Job id : </label>
                    <input type='text' class='form-control' placeholder='Job ID' onChange={HandleChange('id')}></input>
                </div>
                <div class="mb-3">
                    <label>Job Title : </label>
                    <input type='text' class='form-control' placeholder='Job Title' onChange={HandleChange('job_title')}></input>
                </div>
                <div class="mb-3">
                    <label>Min Salary : </label>
                    <input type='number' class='form-control' placeholder='Min Salary' onChange={HandleChange('min_salary')}></input>
                </div>
                <div class="mb-3">
                    <label>Max Salary : </label>
                    <input type='number' class='form-control' placeholder='Max Salary' onChange={HandleChange('max_salary')}></input>
                </div>
                <div class="mb-3 text-end">
                    <button class='btn btn-secondary' style={{ marginRight: "1rem" }} onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button class='btn btn-primary' type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    )
}