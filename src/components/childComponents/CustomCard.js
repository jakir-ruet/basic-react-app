import React from "react";

function CustomCard(myProps){
    return(
        <div className="card">
            <div className="card-header">{myProps.cardHeader}</div>
            <div className="card-body">
                <h3>{myProps.cardBody}</h3>
            </div>
        </div>
    )
}

export default CustomCard;