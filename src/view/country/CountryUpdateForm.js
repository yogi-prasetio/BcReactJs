import React, { useEffect, useState } from 'react'
import CountryApi from '../../api/CountryApi'

export default function CountryUpdateForm(props) {
    const [country, setCountry] = useState([])
    const [values, setValue] = useState({
        id: undefined,
        name: undefined
    })

    useEffect(() => {
        CountryApi.getOne(props.id).then(data => {
            setCountry(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValue({ ...values, [name]: event.target.value })
    }
    const onEdit = async () =>{
        const payload = {
            id: (props.id),
            name : (values.name)
        }
        await CountryApi.update(payload).then(()=>{
            props.setRefresh(true)
            window.alert('Data Successfully Updated')
        })
    }
    return (
        <div>
            <h2>Edit Country</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Country ID :</label>
                    <input type='text' defaultValue={country.countryId} disabled></input>
                </div>
                <di>
                    <label>Country Name : </label>
                    <input type='text' defaultValue={country.countryName} onChange={HandleChange('name')}></input>
                </di>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
