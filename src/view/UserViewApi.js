import React, { useEffect, useState } from 'react'
import UserApi from '../api/UserApi'

export default function UserViewApi() {
    const [user, setUser] = useState([])
    const [refresh,setRefresh] = useState(false)
    useEffect(() => {
        UserApi.list().then(data => {
            setUser(data)
        })
        setRefresh(false)
    }, [refresh])
    const onDelete = async(id) => {
        UserApi.deleted(id).then(()=> {
            window.alert('Data Successfully Delete')
            setRefresh(true)
        })
    }
    return (
        <div>
            <h2>List User</h2>
            <table>
                <th>User ID</th>
                <th>Username</th>
                <th>Action</th>
                <tbody>
                    {
                        user && user.map(usr => (
                            <tr key={usr.id}>
                                <td>{usr.id}</td>
                                <td>{usr.username}</td>
                                <td>
                                    <button onClick={()=>onDelete(usr.id)}> Delete User </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
