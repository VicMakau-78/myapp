const Thirdcomponent = () => {
    // Variable enables us to create dynamic websites. (It means the contents of the website will be changing over time.)
    // Below we declare some variables. Note: variables are ususally declared just before the return statement in ReactJS
    let name = "Victor"
    let age = "Age"
    let message = "Message"


    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my Third component</h1>
            {/* {Below we bind our variables. We use the variables we had declred before} */}
            <h5>My name is: {name}</h5>
            <h5>My age is: {age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}


export default Thirdcomponent;