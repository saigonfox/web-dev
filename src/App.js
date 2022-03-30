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
import Tuiter from "./components/tuiter";
import ProfileScreen from "./components/tuiter/ProfileScreen/index";
import EditProfileScreen from "./components/tuiter/ProfileScreen/EditProfileScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<Labs />} />
                        <Route path="labs"
                               exact={true}
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route path=""
                                   element={<HomeScreen/>}/>
                            <Route path="home"
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element={<ProfileScreen/>}/>
                            <Route path="profile/editprofile"
                                   element={<EditProfileScreen/>}/>
                            ...
                        </Route>
                    </Route>
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