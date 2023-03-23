import React, { useEffect, useState } from 'react'
import CountryApi from '../api/CountryApi'

export default function CountryViewApi() {
    const [country, setCountry] = useState([])
    const [refresh,setRefresh] = useState(false)
    useEffect(() => {
        CountryApi.list().then(data => {
            setCountry(data)
        })
        setRefresh(false)
    }, [refresh])
    const onDelete = async(id) => {
        CountryApi.deleted(id).then(()=> {
            window.alert('Data Successfully Delete')
            setRefresh(true)
        })
    }
    return (
        <div>
            <h2>List Country</h2>
            <table>
                <th>Country ID</th>
                <th>Country Name</th>
                <th>Action</th>
                <tbody>
                    {
                        country && country.map(coun => (
                            <tr key={coun.countryId}>
                                <td>{coun.countryId}</td>
                                <td>{coun.countryName}</td>
                                <td>
                                    <button onClick={()=>onDelete(coun.countryId)}> Delete Country </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
