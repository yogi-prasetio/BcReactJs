import React from 'react'

export default function Child(props) {
  return (
    <div>
        <h1>first name : {props.FirstName} </h1>
        <h1>last name : {props.LastName}</h1>
    </div>
  )
}
