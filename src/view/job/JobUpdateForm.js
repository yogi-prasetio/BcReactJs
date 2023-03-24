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
        <div>
            <h2>Edit Job</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Job ID :</label>
                    <input type='text' defaultValue={job.jobId} disabled></input>
                </div>
                <div>
                    <label>Job Title : </label>
                    <input type='text' defaultValue={job.jobTitle} onChange={HandleChange('job_title')}></input>
                </div>
                <div>
                    <label>Min Salary : </label>
                    <input type='number' defaultValue={job.minSalary} onChange={HandleChange('min_salary')}></input>
                </div>
                <div>
                    <label>Max Salary : </label>
                    <input type='number' defaultValue={job.maxSalary} onChange={HandleChange('max_salary')}></input>
                </div>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
