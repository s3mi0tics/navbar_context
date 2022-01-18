import React, { useContext } from 'react'
import MyContext from '../context/MyContext'


const Navbar = () => {
    
    const context = useContext(MyContext);
    const {val, setVal} = context
    
    return (
        <div className= "d-flex justify-content-end" style={{width: "100%", height: "50px", backgroundColor: "lightblue"}}>
            <h1>hi {val}</h1>
        </div>
    )
}

export default Navbar
