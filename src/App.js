/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
*/

import HelloWorld from "./labs/a6/hello-world.js";
import Labs from "./labs/index.js"
import Tuiter from "./tuiter/index.js";

//React Router allows us to have multiple 'pages'
import {BrowserRouter, Link} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index element={<Labs/>}/>
          <Route path="/hello" element={<HelloWorld/>}/>
          <Route path="/tuiter" element={<Tuiter/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
