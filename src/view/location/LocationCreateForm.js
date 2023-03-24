import React, { useState } from 'react'
import LocationApi from '../../api/LocationApi'

export default function LocationCreateForm(props) {
    const [value, setValue] = useState({
        street: undefined,
        postal: undefined,
        city: undefined,
        state: undefined
    })
    const HandleChange = name => event => {
        setValue({ ...value, [name]: event.target.value })
    }
    const onSubmit = async()=> {
        const payload = {
            street: (value.street),
            postal: (value.postal),
            city: (value.city),
            state: (value.state)
        }
        await LocationApi.create(payload)
        .then(()=>{
            props.setRefresh(true)
            window.alert('Data Success Insert')
        })
    }
    return (
        <div>
            <h2>Add Location</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Street Address : </label>
                    <input type='text' placeholder='Street Address' onChange={HandleChange('street')}></input>
                </div>
                <div>
                    <label>Postal Code : </label>
                    <input type='text' placeholder='Postal Code' onChange={HandleChange('postal')}></input>
                </div>
                <div>
                    <label>City : </label>
                    <input type='text' placeholder='City' onChange={HandleChange('city')}></input>
                </div>
                <div>
                    <label>State Province : </label>
                    <input type='text' placeholder='State Province' onChange={HandleChange('state')}></input>
                </div>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    )
}