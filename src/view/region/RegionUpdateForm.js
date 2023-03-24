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
        <div>
            <h2>Edit Region</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Region ID :</label>
                    <input type='text' defaultValue={region.regionId} disabled></input>
                </div>
                <di>
                    <label>Region Name : </label>
                    <input type='text' defaultValue={region.regionName} onChange={HandleChange('name')}></input>
                </di>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
