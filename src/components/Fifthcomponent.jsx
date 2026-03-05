import { useState } from "react";

const Fifthcomponent = () => {
    // The useState() hook enables to create dynamic websites whereby it usually has the start/initial state followed by a state that get show when some effectx happen on our website.

    const [number,setNumber] = useState(10);
    return(
        <div className="Fifthcomponent">

            {/* Below we bind our value for number */}
            <h1>Welcome to my Fifth component</h1>

            <h2>Current number is {number}</h2>

            {/* Call the setNumber function to update the number after a click effect. */}
            <button onClick={ () => setNumber(20)}>Click to Update the number</button>

        </div>
    )
}

export default Fifthcomponent;

// assignment
// Create a Sixthcomponent.jsx. Inside of it, have the useState with the initial value of weight being 50kgs, have a button to update the weight to 55kgs when the button is clicked. Render the component on App.js

// Research on routing in Reactjs.