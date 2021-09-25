import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav id="nav">
        <center><h2 id="navtext">{props.scranble}</h2></center>
      </nav>
    </div>
  )
}
