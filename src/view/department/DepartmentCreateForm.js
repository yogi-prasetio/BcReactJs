import React, { useState } from 'react'
import DepartmentApi from '../../api/DepartmentApi'

export default function DepartmentCreateForm(props) {
    const [value, setValue] = useState({
        name: undefined
    })
    const HandleChange = name => event => {
        setValue({ ...value, [name]: event.target.value })
    }
    const onSubmit = async()=> {
        const payload = {
            name: (value.name)
        }
        await DepartmentApi.create(payload)
        .then(()=>{
            props.setRefresh(true)
            window.alert('Data Success Insert')
        })
    }
    return (
        <div>
            <h2>Add Department</h2>
            <form onSubmit={onSubmit}>
                <di>
                    <label>Department Name : </label>
                    <input type='text' placeholder='Department name' onChange={HandleChange('name')}></input>
                </di>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    )
}