import React, {useState} from "react";
import cricketerContext from "./context";


const Provider = (props) =>{
   
    let [cricketer, setCricketer] = useState({
        name: "Sachin Tendulkar",
        age: 50,
        country: "India",
        highestScore: 200,
    });


    //  let obj = {cricketer:cricketer, setCricketer: setCricketer}

     return(

        <cricketerContext.Provider value={{cricketer:cricketer, setCricketer: setCricketer}}>
            {props.children}
        </cricketerContext.Provider>


     )



}

export default Provider;