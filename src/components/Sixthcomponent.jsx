import { useState } from "react";

const Sixthcomponent = () => {

     const [weight, setNumber] = useState(50)
    return(
       
        <div className="Sixthcomponent">
            <h1>This is my Sixth component</h1>
            <h2>The weight measured is: {weight} kgs</h2>
            
            <button onClick={ () => setNumber(55)}>Click to update the Weight</button>
        </div>
    )
}

export default Sixthcomponent;