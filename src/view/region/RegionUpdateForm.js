import React, { useEffect, useState } from 'react'
import RegionApi from '../../api/RegionApi'

export default function RegionUpdateForm(props) {
    const [region, setRegion] = useState([])
    const [values, setValue] = useState({
        id: undefined,
        name: undefined
    })

    useEffect(() => {
        RegionApi.getOne(props.id).then(data => {
            setRegion(data)
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
        await RegionApi.update(payload).then(()=>{
            props.setRefresh(true)
            window.alert('Data Successfully Updated')
        })
    }
    return (
        <div class="container">
          <div class="mb-3 mt-3">
            <h4>Edit Region</h4>
            <hr aria-setsize={2} />
          </div>
            <form onSubmit={onEdit}>
                <div class="mb-3">
                    <label>Region ID :</label>
                    <input type='text' class='form-control' defaultValue={region.regionId} disabled></input>
                </div>
                <div class="mb-3">
                    <label>Region Name : </label>
                    <input type='text' class='form-control' defaultValue={region.regionName} onChange={HandleChange('name')}></input>
                </div>
                <div class="mb-3 text-end">                    
                    <button class='btn btn-secondary' style={{ marginRight: "1rem" }} onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button class='btn btn-primary' type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
