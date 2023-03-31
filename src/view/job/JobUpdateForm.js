import React, { useEffect, useState } from 'react'
import JobApi from '../../api/JobApi'

export default function JobUpdateForm(props) {
    const [job, setJob] = useState([])
    const [values, setValue] = useState({
        id: undefined,
        job_title: undefined,
        min_salary: undefined,
        max_salary: undefined,
    })

    useEffect(() => {
        JobApi.getOne(props.id).then(data => {
            setJob(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValue({ ...values, [name]: event.target.value })
    }
    const onEdit = async () =>{
        const payload = {
            id: (props.id),
            job_title : (values.job_title),
            min_salary : (values.min_salary),
            max_salary : (values.max_salary)
        }
        await JobApi.update(payload).then(()=>{
            props.setRefresh(true)
            window.alert('Data Successfully Updated')
        })
    }
    return (
        <div class="container">
          <div class="mb-3 mt-3">
            <h4>Edit Job</h4>
            <hr aria-setsize={2} />
          </div>
            <form onSubmit={onEdit}>
                <div class="mb-3">
                    <label>Job ID :</label>
                    <input type='text' class='form-control' defaultValue={job.jobId} disabled></input>
                </div>
                <div class="mb-3">
                    <label>Job Title : </label>
                    <input type='text' class='form-control' defaultValue={job.jobTitle} onChange={HandleChange('job_title')}></input>
                </div>
                <div class="mb-3">
                    <label>Min Salary : </label>
                    <input type='number' class='form-control' defaultValue={job.minSalary} onChange={HandleChange('min_salary')}></input>
                </div>
                <div class="mb-3">
                    <label>Max Salary : </label>
                    <input type='number' class='form-control' defaultValue={job.maxSalary} onChange={HandleChange('max_salary')}></input>
                </div>
                <div class="mb-3 text-end">                    
                    <button class='btn btn-secondary' style={{ marginRight: "1rem" }} onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button class='btn btn-primary' type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
