import React, { useEffect, useState } from 'react'
import UserApi from '../../api/UserApi'
import UserCreateForm from './UserCreateForm'
import UserUpdateForm from './UserUpdateForm'

export default function UserViewApi() {
    const [user, setUser] = useState([])
    const [refresh,setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()
    useEffect(() => {
        UserApi.read().then(data => {
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
    const onClick = (id) => {
        setDisplayEdit(true)
        setId(id)
    }
    return (
        <div>
            { displayEdit ? <UserUpdateForm
                id={id}
                setRefresh={setRefresh} /> :
                display ? <UserCreateForm
                    setRefresh={setRefresh}
                    setDisplay={setDisplay}
                /> :
                <>
                    <h2>List User</h2>
                    <button onClick={() => setDisplay(true)}>Add User</button>
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
                                            {/* <button onClick={() => onClick(usr.id)}> Update </button> */}
                                            <button onClick={()=>onDelete(usr.id)}> Delete </button>
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