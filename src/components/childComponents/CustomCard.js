import React from "react";

function CustomCard(myProps){
    return(
        <div className="card">
            <div className="card-header">{myProps.header}</div>
            <div className="card-body">
                <h3>{myProps.body}</h3>
            </div>
        </div>
    )
}

export default CustomCard;