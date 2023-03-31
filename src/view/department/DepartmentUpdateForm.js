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
        <div class="container">
          <div class="mb-3 mt-3">
            <h4>Edit Department</h4>
            <hr aria-setsize={2} />
          </div>
            <form onSubmit={onEdit}>
                <div class="mb-3">
                    <label>Department ID :</label>
                    <input type='text' class='form-control' defaultValue={department.departmentId} disabled></input>
                </div>
                <div class="mb-3">
                    <label>Department Name : </label>
                    <input type='text' class='form-control' defaultValue={department.departmentName} onChange={HandleChange('name')}></input>
                </div>
                <div class="mb-3 text-end">
                    <button class='btn btn-secondary' style={{ marginRight: "1rem" }} onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button class='btn btn-primary' type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
