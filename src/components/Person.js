import React from 'react'

function Person({ person }) {
  return (
    <div>
        <h2>
            I am {person.name}
            {person.age ? ` and my age is ${person.age}` : null}
        </h2>
    </div>
  )
}

export default Person
