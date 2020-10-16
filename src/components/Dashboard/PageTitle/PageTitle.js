import React from 'react'

const pageTitle = (props) => {
  return (
    <div>
      <h1 className='mt-3'>{props.text}</h1>
      <hr/>
    </div>
  )
}

export default pageTitle
