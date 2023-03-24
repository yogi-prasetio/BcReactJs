import React, { useState } from 'react'
import UserApi from '../../api/UserApi'

export default function UserCreateForm(props) {
    const [value, setValue] = useState({
        username: undefined,
        password: undefined
    })
    const HandleChange = name => event => {
        setValue({ ...value, [name]: event.target.value })
    }
    const onSubmit = async()=> {
        const payload = {
            username: (value.username),
            password: (value.password)
        }
        await UserApi.create(payload)
        .then(()=>{
            props.setRefresh(true)
            window.alert('Data Success Insert')
        })
    }
    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>UserName : </label>
                    <input type='text' placeholder='Username' onChange={HandleChange('username')}></input>
                </div>
                <div>
                    <label>Password : </label>
                    <input type='password' placeholder='Password' onChange={HandleChange('password')}></input>
                </div>
                <div>                    
                    <button onClick={()=>props.setDisplay(false)}>Cancel</button>
                    <button type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    )
}