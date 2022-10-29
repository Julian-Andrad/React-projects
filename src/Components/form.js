import React from "react"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Form = React.forwardRef((props, ref) => {
return (
        <div className="form-container">
            <form className="form" onSubmit={props.onClick}>
                <input className="form-input" ref={ref} type="text" placeholder="Procurar Cidade" ></input>
                <button className="form-btn"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
            </form>
            
        </div>
    )
})

export default Form 


