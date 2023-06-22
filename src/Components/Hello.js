
import React, {useContext} from "react";
import cricketerContext from "../context/context";


const Hello = () => {
    //   let {name, age, country, highestScore} =   useContext(cricketerContext)

     let {cricketer, setCricketer} = useContext(cricketerContext)

    return(
        <div>
             <h1>Accessing Values</h1>

                <h1>Player Name: {cricketer.name}</h1>
                <h2>Player Age: {cricketer.age}</h2>
                <h3>Player Country: {cricketer.country}</h3>
                <h4>Player Highest Score: {cricketer.highestScore}</h4>
                <button 
                 onClick={()=>setCricketer({...cricketer, highestScore: 248})}
                >Update HighestScore</button>
               

        </div>
    )
}

export default Hello;




// <cricketerContext.Consumer>
// {
//     (player) =>(
//          <h1>Player Name: {player}</h1>
//     )
// }
// </cricketerContext.Consumer>