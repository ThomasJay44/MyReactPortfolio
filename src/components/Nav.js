import React from 'react'

const Nav = ({setCurrentPage}) => {

    const arr = ["About", "Contact", "Page3", "Page4"]

  return (
    <ul>
        {arr.map(topic => (
            <li onClick={()=> setCurrentPage(topic)} key={topic}>{topic}</li>
        ))}
    </ul>
  )
}

export default Nav