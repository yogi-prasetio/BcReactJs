import React, { Component } from 'react'
import ChildClass from './ChildClass'
export default class ParentClass extends Component {
    state = {
        firstname : 'naufal',
        lastname : 'firdaus'
    }
  render() {
    return (
      <div>
        <ChildClass
            firstname = {this.state.firstname}
            lastname = {this.state.lastname}
        />
      </div>
    )
  }
}
