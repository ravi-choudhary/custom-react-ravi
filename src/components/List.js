import React from "react";
export default function List(props){
    return <div className="list">
        <div className="image-panel"><img src={props.imgURL} alt=""/></div>
        <div className="description-panel">
            <h1>{props.headingTEXT}</h1>
            <p>{props.paraTEXT}</p>
        </div>
    </div>

}