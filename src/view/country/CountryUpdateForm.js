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
        <div class="container">
          <div class="mb-3 mt-3">
            <h4>Edit Country</h4>
            <hr aria-setsize={2} />
          </div>
            <form onSubmit={onEdit}>
                <div class="mb-3">
                    <label>Country ID :</label>
                    <input type='text' class='form-control' defaultValue={country.countryId} disabled></input>
                </div>
                <div class="mb-3">
                    <label>Country Name : </label>
                    <input type='text' class='form-control' defaultValue={country.countryName} onChange={HandleChange('name')}></input>
                </div>
                <div class="mb-3 text-end">
                    <button class='btn btn-secondary' style={{ marginRight: "1rem" }} onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button class='btn btn-primary' type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
