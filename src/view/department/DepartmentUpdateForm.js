import React, { useEffect, useState } from 'react'
import DepartmentApi from '../../api/DepartmentApi'

export default function DepartmentUpdateForm(props) {
    const [department, setDepartment] = useState([])
    const [values, setValue] = useState({
        id: undefined,
        name: undefined
    })

    useEffect(() => {
        DepartmentApi.getOne(props.id).then(data => {
            setDepartment(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValue({ ...values, [name]: event.target.value })
    }
    const onEdit = async () =>{
        const payload = {
            id: (props.id),
            name : (values.name)
        }
        await DepartmentApi.update(payload).then(()=>{
            props.setRefresh(true)
            window.alert('Data Successfully Updated')
        })
    }
    return (
        <div>
            <h2>Edit Department</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Department ID :</label>
                    <input type='text' defaultValue={department.departmentId} disabled></input>
                </div>
                <di>
                    <label>Department Name : </label>
                    <input type='text' defaultValue={department.departmentName} onChange={HandleChange('name')}></input>
                </di>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
