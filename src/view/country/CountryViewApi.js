import React, { useEffect, useState } from 'react'
import CountryApi from '../../api/CountryApi'
import CountryCreateForm from './CountryCreateForm'
import CountryUpdateForm from './CountryUpdateForm'

export default function CountryViewApi() {
    const [country, setCountry] = useState([])
    const [refresh,setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()
    useEffect(() => {
        CountryApi.read().then(data => {
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
    const onClick = (id) => {
        setDisplayEdit(true)
        setId(id)
    }
    return (
        <div>
            { displayEdit ? <CountryUpdateForm
                id={id}
                setRefresh={setRefresh} /> :
                display ? <CountryCreateForm
                    setRefresh={setRefresh}
                    setDisplay={setDisplay}
                /> :
                <>
                    <h2>List Country</h2>
                     <button onClick={() => setDisplay(true)}>Add Country</button>
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
                                            <button onClick={() => onClick(coun.countryId)}> Update </button>
                                            <button onClick={()=>onDelete(coun.countryId)}> Delete  </button>
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