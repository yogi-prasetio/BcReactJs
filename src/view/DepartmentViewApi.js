import React, { useEffect, useState } from 'react'
import DepartmentApi from '../api/DepartmentApi'

export default function DepartmentViewApi() {
    const [department, setDepartment] = useState([])
    const [refresh,setRefresh] = useState(false)
    useEffect(() => {
        DepartmentApi.list().then(data => {
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
    return (
        <div>
            <h2>List Department</h2>
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
                                    <button onClick={()=>onDelete(dep.departmentId)}> Delete Department </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
