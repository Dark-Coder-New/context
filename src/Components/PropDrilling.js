import React from "react";
let name = "Abhishek";
let age = 10;

const Smile = ({name, age}) => {

    return(
        <div>
            <h1>Smile Component</h1>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
        </div>
    )
}

const Laugh = ({name, age}) => {
          
        return(
            <div>
                <h1>Laugh Component</h1>
                <Smile name={name} age={age}/>
            </div>
        )
}

const Cry = ({name, age}) => {
    return(
        <div>
            <h1>Cry Component</h1>
            <Laugh name={name} age={age}/>
        </div>
    )
}

export default Cry;