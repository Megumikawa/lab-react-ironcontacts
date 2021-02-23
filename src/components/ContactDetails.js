import React from 'react'

function ContactDetails(props) {
  return (
    <div>
      <img src={props.picture} />
      <p>{props.name}</p>
      <p>{props.popularity}</p>
      <button onClick={() => { props.onDelete(props.id)  }} >Delete</button>
    </div>
  )
}

export default ContactDetails