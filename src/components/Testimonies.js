import React from 'react'

function Testimonies({quote,name}) {
  return (
    <div className='testimonies'>
      <h2> <q>{quote} </q></h2>
      <h4> {name} </h4>
    </div>
  )
}

export default Testimonies