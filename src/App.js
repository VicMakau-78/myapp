
import './App.css';
// Importing the Firstcomponent and Secondcomponent from the components folder
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';
// Importing the Contactuscomponent and Aboutcomponent from the Assignment folder
import Contactuscomponent from './Assignment/Contactuscomponent';
import Aboutcomponent from './Assignment/Aboutcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to learning reactjs</h1>
        <h2>React is fun</h2>

        
      </header>
      {/*Below we render/display/show our components */}
        <Firstcomponent />
        <Secondcomponent />
        <Thirdcomponent />
        <Fourthcomponent/>
        <Fifthcomponent/>
        <Sixthcomponent/>
      {/* Importing and using the Contactuscomponent(Below we render/display/show our contact us component) */}
        <Contactuscomponent />
      {/* Importing and using the Aboutcomponent(Below we render/display/show our about us component) */}
        <Aboutcomponent />
    </div>
  );
}

export default App;
//  jsx - JavaScript XML, is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is commonly used in React applications to define the structure and appearance of user interfaces. JSX allows developers to create components that can be easily rendered and updated based on changes in data or user interactions.

// npm start => node package module
// npx       => node package execute

// App.js is our root component