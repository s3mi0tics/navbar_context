import React, { useState, useContext } from 'react'
import MyContext from '../context/MyContext'

const Form = () => {
    const context = useContext(MyContext);
    const {val, setVal} = context
    console.log(context)
    
    const [name, setName] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault();
        setVal(name)
        setName("")
    }


    return (
        <div className="m-3">
            <form className="row g-3 justify-content-center align-items-center"
            onSubmit = {submitHandler}
            >
                <div className= "col-md-2">
                    <label className="form-label flex2" htmlFor="mom">Your Name:</label>
                </div>
                <div className= "col-md-3">
                    <input className="form-control flex-2" type="text" name="mom" id="mom" 
                    onChange ={(e) => setName(e.target.value) }
                    />
                </div>
                <div className= "col-md-3">
                <button className="btn btn-success m-3">Name</button>
                </div>
            </form>
        </div>
    )
}

export default Form
