import React, { useEffect, useState } from 'react'
import LocationApi from '../api/LocationApi'

export default function LocationViewApi() {
    const [location, setLocation] = useState([])
    const [refresh,setRefresh] = useState(false)
    useEffect(() => {
        LocationApi.list().then(data => {
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
    return (
        <div>
            <h2>List Location</h2>
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
                                    <button onClick={()=>onDelete(loca.locationId)}> Delete Location </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
