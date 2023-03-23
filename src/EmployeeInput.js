import React from 'react'

export default function EmployeeInput(props) {
    return (
        <div>
            <form onSubmit={props.OnSubmit}>
                <div>
                    <label>Full Name :</label>
                    <input type='text' placeholder='Full Name' onChange={props.HandleOnChange('fullname')}></input>
                </div>
                <div>
                    <label>Salary :</label>
                    <input type='text' placeholder='Salary' onChange={props.HandleOnChange('salary')}></input>
                </div>
                <div>
                    <button type='submit'> Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>cancel</button>
                </div>
            </form >
        </div >
    )
}
