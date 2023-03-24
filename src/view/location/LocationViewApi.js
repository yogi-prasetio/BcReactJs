import React, { useEffect, useState } from 'react'
import LocationApi from '../../api/LocationApi'
import LocationCreateForm from './LocationCreateForm'
import LocationUpdateForm from './LocationUpdateForm'

export default function LocationViewApi() {
    const [location, setLocation] = useState([])
    const [refresh,setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()
    useEffect(() => {
        LocationApi.read().then(data => {
            setLocation(data)
        })
        setRefresh(false)
    }, [refresh])
    const onDelete = async(id) => {
        LocationApi.deleted(id).then(()=> {
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
            { displayEdit ? <LocationUpdateForm
                id={id}
                setRefresh={setRefresh} /> :
                display ? <LocationCreateForm
                    setRefresh={setRefresh}
                    setDisplay={setDisplay}
                /> :
                <>
                    <h2>List Location</h2>
                    <button onClick={() => setDisplay(true)}>Add Location</button>
                    <table>
                        <th>Location ID</th>
                        <th>Street Address</th>
                        <th>Postal Code</th>
                        <th>City</th>
                        <th>State Province</th>
                        <th>Action</th>
                        <tbody>
                            {
                                location && location.map(loca => (
                                    <tr key={loca.locationId}>
                                        <td>{loca.locationId}</td>
                                        <td>{loca.streetAddress}</td>
                                        <td>{loca.postalCode}</td>
                                        <td>{loca.city}</td>
                                        <td>{loca.stateProvince}</td>
                                        <td>
                                        <button onClick={() => onClick(loca.locationId)}> Update </button>
                                            <button onClick={()=>onDelete(loca.locationId)}> Delete </button>
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