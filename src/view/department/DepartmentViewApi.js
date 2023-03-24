import React, { useEffect, useState } from 'react'
import DepartmentApi from '../../api/DepartmentApi'
import DepartmentCreateForm from './DepartmentCreateForm'
import DepartmentUpdateForm from './DepartmentUpdateForm'

export default function DepartmentViewApi() {
    const [department, setDepartment] = useState([])
    const [refresh,setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()
    useEffect(() => {
        DepartmentApi.read().then(data => {
            setDepartment(data)
        })
        setRefresh(false)
    }, [refresh])
    const onDelete = async(id) => {
        DepartmentApi.deleted(id).then(()=> {
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
            { displayEdit ? <DepartmentUpdateForm
                id={id}
                setRefresh={setRefresh} /> :
                display ? <DepartmentCreateForm
                    setRefresh={setRefresh}
                    setDisplay={setDisplay}
                /> :
                <>
                    <h2>List Department</h2>
                    <button onClick={() => setDisplay(true)}>Add Department</button>
                    <table>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Action</th>
                        <tbody>
                            {
                                department && department.map(dep => (
                                    <tr key={dep.departmentId}>
                                        <td>{dep.departmentId}</td>
                                        <td>{dep.departmentName}</td>
                                        <td>
                                            <button onClick={() => onClick(dep.departmentId)}> Update </button>
                                            <button onClick={()=>onDelete(dep.departmentId)}> Delete  </button>
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