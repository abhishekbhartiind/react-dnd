import React from 'react'

const Card = (props) => {
    return (
        <div style={{
            width:"100px", 
            boxShadow: "1px 1px 3px #888888",
            display: "flex",
            padding:"5px"}}
        >
            {props.children}
        </div>
    )
}

export default Card