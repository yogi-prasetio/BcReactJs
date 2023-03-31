import React, { useState } from 'react'
import CountryApi from '../../api/CountryApi'

export default function CountryCreateForm(props) {
    const [value, setValue] = useState({
        id: undefined,
        name: undefined
    })
    const HandleChange = name => event => {
        setValue({ ...value, [name]: event.target.value })
    }
    const onSubmit = async()=> {
        const payload = {
            id: (value.id),
            name: (value.name)
        }
        await CountryApi.create(payload)
        .then(()=>{
            props.setRefresh(true)
            window.alert('Data Success Insert')
        })
    }
    return (
        <div class="container">
          <div class="mb-3 mt-3">
            <h4>Add Country</h4>
            <hr aria-setsize={2} />
          </div>
            <form onSubmit={onSubmit}>
                <div class="mb-3">
                    <label>Country ID : </label>
                    <input type='text' placeholder='Country ID' class='form-control' onChange={HandleChange('id')}></input>
                </div>
                <div class="mb-3">
                    <label>Country Name : </label>
                    <input type='text' placeholder='Country Name' class='form-control' onChange={HandleChange('name')}></input>
                </div>
                <div class="mb-3 text-end">
                    <button class='btn btn-secondary' style={{ marginRight: "1rem" }} onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button class='btn btn-primary submit' type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    )
}
