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
        <div>
            <h2>Edit Location</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Location ID :</label>
                    <input type='text' defaultValue={location.locationId} disabled></input>
                </div>
                <div>
                    <label>Street Address : </label>
                    <input type='text' defaultValue={location.streetAddress} onChange={HandleChange('street')}></input>
                </div>
                <div>
                    <label>Postal Code : </label>
                    <input type='text' defaultValue={location.postalCode} onChange={HandleChange('postal')}></input>
                </div>
                <div>
                    <label>City : </label>
                    <input type='text' defaultValue={location.city} onChange={HandleChange('city')}></input>
                </div>
                <div>
                    <label>State Province : </label>
                    <input type='text' defaultValue={location.stateProvince} onChange={HandleChange('state')}></input>
                </div>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
