import React from 'react'

const Header = ({setQuery}) => {

const handleChange=(e)=>{
    setQuery(e.target.value)
}

  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
        <h2>List Of Countries</h2>
        <input type=''placeholder='Search....' onChange={handleChange}/>
    </div>
  )
}

export default Header