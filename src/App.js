import React from 'react'
// import Resturant from './components/Basics/Resturant'

// const App = () => {
//   return (

//   )<Resturant/>
// }
// export default App

// import './App.css';
// import Login from './Login';
// import SignUp from './SignUp';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/Basics/Login'
import Resturant from './components/Basics/Resturant'
import SignUp from './components/Basics/SignUp'
import Checkout from './components/Basics/Checkout'
import Confirmation from './components/Basics/Confirmation'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Login />]} />
          <Route path="/login" element={[<Login />]} />
          <Route path="/Resturant" element={[<Resturant />]} />
          <Route path="/SignUp" element={[<SignUp />]} />
          <Route path="/Checkout" element={[<Checkout />]} />
          <Route path="/Confirmation" element={[<Confirmation />]} />
        </Routes>
      </div>
    </Router>

    );
}

export default App;
