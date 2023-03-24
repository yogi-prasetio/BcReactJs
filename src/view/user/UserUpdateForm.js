import React, { useEffect, useState } from 'react'
import UserApi from '../../api/UserApi'

export default function UserUpdateForm(props) {
    const [user, setUser] = useState([])
    const [values, setValue] = useState({
        id: undefined,
        username: undefined,
        password: undefined
    })

    useEffect(() => {
        UserApi.getOne(props.id).then(data => {
            setUser(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValue({ ...values, [name]: event.target.value })
    }
    const onEdit = async () =>{
        const payload = {
            id: (props.id),
            username : (values.username),
            password : (values.password)
        }
        await UserApi.update(payload).then(()=>{
            props.setRefresh(true)
            window.alert('Data Successfully Updated')
        })
    }
    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>User ID :</label>
                    <input type='text' defaultValue={user.UserId} disabled></input>
                </div>
                <div>
                    <label>Username : </label>
                    <input type='text' defaultValue={user.username} onChange={HandleChange('username')}></input>
                </div>
                <div>
                    <label>Password : </label>
                    <input type='password' defaultValue={user.password} onChange={HandleChange('password')}></input>
                </div>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
