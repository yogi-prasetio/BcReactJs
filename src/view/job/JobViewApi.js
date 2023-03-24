import React, { useEffect, useState } from 'react'
import JobApi from '../../api/JobApi'
import JobCreateForm from './JobCreateForm'
import JobUpdateForm from './JobUpdateForm'

export default function JobViewApi() {
    const [job, setJob] = useState([])
    const [refresh,setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()
    useEffect(() => {
        JobApi.read().then(data => {
            setJob(data)
        })
        setRefresh(false)
    }, [refresh])
    const onDelete = async(id) => {
        JobApi.deleted(id).then(()=> {
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
            { displayEdit ? <JobUpdateForm
                id={id}
                setRefresh={setRefresh} /> :
                display ? <JobCreateForm
                    setRefresh={setRefresh}
                    setDisplay={setDisplay}
                /> :
                <>
                    <h2>List Job</h2>
                    <button onClick={() => setDisplay(true)}>Add Job</button>
                    <table>
                        <th>Job ID</th>
                        <th>Job Title</th>
                        <th>Min Salary</th>
                        <th>Max Salary</th>
                        <th>Action</th>
                        <tbody>
                            {
                                job && job.map(val => (
                                    <tr key={val.jobId}>
                                        <td>{val.jobId}</td>
                                        <td>{val.jobTitle}</td>
                                        <td>{val.minSalary}</td>
                                        <td>{val.maxSalary}</td>
                                        <td>
                                        <button onClick={() => onClick(val.jobId)}> Update </button>
                                            <button onClick={()=>onDelete(val.jobId)}> Delete </button>
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