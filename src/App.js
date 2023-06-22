import React from "react";
import Hello from "./Components/Hello";
import Cry from "./Components/PropDrilling";


const App = () => {


   return(
       <div>
                 <Cry name="Abhishek" age={10}/>
                {/* <Hello />  */}
       </div>
   )
}

export default App;