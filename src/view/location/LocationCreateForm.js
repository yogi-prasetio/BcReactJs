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
        <div class="container">
          <div class="mb-3 mt-3">
            <h4>Add Location</h4>
            <hr aria-setsize={2} />
          </div>
            <form onSubmit={onSubmit}>
                <div class="mb-3">
                    <label>Street Address : </label>
                    <input type='text' class='form-control' placeholder='Street Address' onChange={HandleChange('street')}></input>
                </div>
                <div class="mb-3">
                    <label>Postal Code : </label>
                    <input type='text' class='form-control' placeholder='Postal Code' onChange={HandleChange('postal')}></input>
                </div>
                <div class="mb-3">
                    <label>City : </label>
                    <input type='text' class='form-control' placeholder='City' onChange={HandleChange('city')}></input>
                </div>
                <div class="mb-3">
                    <label>State Province : </label>
                    <input type='text' class='form-control' placeholder='State Province' onChange={HandleChange('state')}></input>
                </div>
                <div class="mb-3 text-end">                    
                    <button class='btn btn-secondary' style={{ marginRight: "1rem" }} onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button class='btn btn-primary' type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    )
}