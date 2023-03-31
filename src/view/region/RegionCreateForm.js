import React, { useState } from 'react'
import RegionApi from '../../api/RegionApi'

export default function RegionCreateForm(props) {
    const [value, setValue] = useState({
        name: undefined
    })
    const HandleChange = name => event => {
        setValue({ ...value, [name]: event.target.value })
    }
    const onSubmit = async()=> {
        const payload = {
            name: (value.name)
        }
        await RegionApi.create(payload)
        .then(()=>{
            props.setRefresh(true)
            window.alert('Data Success Insert')
        })
    }
    return (
        <div class="container">
          <div class="mb-3 mt-3">
            <h4>Add Region</h4>
            <hr aria-setsize={2} />
          </div>
            <form onSubmit={onSubmit}>
                <div class="mb-3">
                    <label>Region Name : </label>
                    <input type='text' class='form-control' placeholder='region name' onChange={HandleChange('name')}></input>
                </div>
                <div class="mb-3 text-end">
                    <button class='btn btn-secondary' style={{ marginRight: "1rem" }} onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button class='btn btn-primary' type='submi'>Simpan</button>
                </div>
            </form>
        </div>
    )
}