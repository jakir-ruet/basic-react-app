import React from "react";
import CustomCard from "./childComponents/CustomCard";


function HelloReact(props){
    const eleProps = <CustomCard cardHeader="cardHeader" cardBody="cardBody"/>
    return(
        <div>
           <h1>hello {props.name} & age is {props.age}</h1>
            {eleProps}
        </div>
    )
}
export default HelloReact;