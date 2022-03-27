import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/tuiter/explore.css'
import './components/tuiter/home.css'


import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index";
import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           exact={true}
                           element={<Labs/>}/>
                    <Route path="/tuiter/home"
                           exact={true}
                           element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore"
                           exact={true}
                           element={<ExploreScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}





export default App;





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }