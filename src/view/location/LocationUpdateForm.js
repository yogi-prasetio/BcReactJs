import React, { useEffect, useState } from 'react'
import LocationApi from '../../api/LocationApi'

export default function LocationUpdateForm(props) {
    const [location, setLocation] = useState([])
    const [values, setValue] = useState({
        id: undefined,
        street: undefined,
        postal: undefined,
        city: undefined,
        state: undefined
    })

    useEffect(() => {
        LocationApi.getOne(props.id).then(data => {
            setLocation(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValue({ ...values, [name]: event.target.value })
    }
    const onEdit = async () =>{
        const payload = {
            id: (props.id),
            street : (values.street),
            postal : (values.postal),
            city : (values.city),
            state : (values.state)
        }
        await LocationApi.update(payload).then(()=>{
            props.setRefresh(true)
            window.alert('Data Successfully Updated')
        })
    }
    return (
        <div class="container">
          <div class="mb-3 mt-3">
            <h4>Edit Location</h4>
            <hr aria-setsize={2} />
          </div>
            <form onSubmit={onEdit}>
                <div class="mb-3">
                    <label>Location ID :</label>
                    <input type='text' class='form-control' defaultValue={location.locationId} disabled></input>
                </div>
                <div class="mb-3">
                    <label>Street Address : </label>
                    <input type='text' class='form-control' defaultValue={location.streetAddress} onChange={HandleChange('street')}></input>
                </div>
                <div class="mb-3">
                    <label>Postal Code : </label>
                    <input type='text' class='form-control' defaultValue={location.postalCode} onChange={HandleChange('postal')}></input>
                </div>
                <div class="mb-3">
                    <label>City : </label>
                    <input type='text' class='form-control' defaultValue={location.city} onChange={HandleChange('city')}></input>
                </div>
                <div class="mb-3">
                    <label>State Province : </label>
                    <input type='text' class='form-control' defaultValue={location.stateProvince} onChange={HandleChange('state')}></input>
                </div>
                <div class="mb-3 text-end">                    
                    <button class='btn btn-secondary' style={{ marginRight: "1rem" }} onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button class='btn btn-primary' type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
