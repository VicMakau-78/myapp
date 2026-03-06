
import './App.css';
// Importing the Firstcomponent and Secondcomponent from the components folder
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Notfound from './components/Notfound';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Importing the Contactuscomponent and Aboutcomponent from the Assignment folder
import Contactuscomponent from './Assignment/Contactuscomponent';
import Aboutcomponent from './Assignment/Aboutcomponent';

function App() {
  return (
    <Router>
    <div className="App">

    <nav>
      <Link to="/first" className='navlinks'>Firstcomponent</Link>
      <Link to="/second" className='navlinks'>Secondcomponent</Link>
      <Link to="/third" className='navlinks'>Thirdcomponent</Link>
      <Link to="/fourth" className='navlinks'>Fourthcomponent</Link>
      <Link to="/fifth" className='navlinks'>Fifthcomponent</Link>
      <Link to="/sixth" className='navlinks'>Sixthcomponent</Link>
      <Link to="/contactus" className='navlinks'>Contactuscomponent</Link>
      <Link to="/about" className='navlinks'>Aboutcomponent</Link>
    </nav>

      <header className="App-header">
        <h1>Welcome to learning reactjs</h1>
        <h2>React is fun</h2>

        
      </header>
      {/*Below we render/display/show our components */}
      <Routes>
        <Route path="/first" element={<Firstcomponent/>}/>
        <Route path="/second" element={<Secondcomponent/>}/>
        <Route path="/third" element={<Thirdcomponent/>}/>
        <Route path="/fourth" element={<Fourthcomponent/>}/>
        <Route path="/fifth" element={<Fifthcomponent/>}/>
        <Route path="/sixth" element={<Sixthcomponent/>}/>
        <Route path="/contactus" element={<Contactuscomponent/>}/>
        <Route path="/about" element={<Aboutcomponent/>}/>
        <Route path="*" element={<Notfound/>}/>

        </Routes>
    </div>
    </Router>
  );
}

export default App;
//  jsx - JavaScript XML, is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is commonly used in React applications to define the structure and appearance of user interfaces. JSX allows developers to create components that can be easily rendered and updated based on changes in data or user interactions.

// npm start => node package module
// npx       => node package execute

// App.js is our root component