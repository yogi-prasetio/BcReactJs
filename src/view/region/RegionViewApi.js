import React, { useEffect, useState } from 'react'
import RegionApi from '../../api/RegionApi'
import RegionCreateForm from './RegionCreateForm'
import RegionUpdateForm from './RegionUpdateForm'

export default function RegionViewApi() {
    const [region, setRegion] = useState([])
    const [refresh,setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()
    useEffect(() => {
        RegionApi.read().then(data => {
            setRegion(data)
        })
        setRefresh(false)
    }, [refresh])
    const onDelete = async(id) => {
        RegionApi.deleted(id).then(()=> {
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
            { displayEdit ? <RegionUpdateForm
                id={id}
                setRefresh={setRefresh} /> :
                display ? <RegionCreateForm
                    setRefresh={setRefresh}
                    setDisplay={setDisplay}
                /> :
                <>
                    <h2>List Region</h2>
                    <button onClick={() => setDisplay(true)}>Add Region</button>
                    <table>
                        <th>Region ID</th>
                        <th>Region Name</th>
                        <th>Action</th>
                        <tbody>
                            {
                                region && region.map(reg => (
                                    <tr key={reg.regionId}>
                                        <td>{reg.regionId}</td>
                                        <td>{reg.regionName}</td>
                                        <td>
                                            <button onClick={() => onClick(reg.regionId)}> Update </button>
                                            <button onClick={()=>onDelete(reg.regionId)}> Delete </button>
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