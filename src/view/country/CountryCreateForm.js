import React, { useState } from 'react'
import CountryApi from '../../api/CountryApi'

export default function CountryCreateForm(props) {
    const [value, setValue] = useState({
        id: undefined,
        name: undefined
    })
    const HandleChange = name => event => {
        setValue({ ...value, [name]: event.target.value })
    }
    const onSubmit = async()=> {
        const payload = {
            id: (value.id),
            name: (value.name)
        }
        await CountryApi.create(payload)
        .then(()=>{
            props.setRefresh(true)
            window.alert('Data Success Insert')
        })
    }
    return (
        <div>
            <h2>Add Country</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Country ID : </label>
                    <input type='text' placeholder='Country ID' onChange={HandleChange('id')}></input>
                </div>
                <div>
                    <label>Country Name : </label>
                    <input type='text' placeholder='Country Name' onChange={HandleChange('name')}></input>
                </div>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    )
}
