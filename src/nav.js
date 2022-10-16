/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
*/

import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    )
}

export default Nav;