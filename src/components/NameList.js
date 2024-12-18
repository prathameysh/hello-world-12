import React from 'react'
import Person from './Person'  // Import the Person component

function NameList() {
    const names = [
        {id:'1',name: 'Bruce', age: '30', skill: 'Vue'},
        {id:'2',name: 'Clark'},
        {id:'3',name: 'Diana'}
    ]

    // Map over 'names' array and pass each 'person' object to the 'Person' component
    const personList = names.map(person => <Person key={person.name} person={person} />)

    return (<div>{personList}</div>)
}

export default NameList
