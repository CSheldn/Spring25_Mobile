import { useState } from 'react';
import "./App.css";

function NavBar() {
    const [status, setStatus] = useState(true)

    return (
        <>
        <nav>
            <ul class="menu">
                <li class="menu-title">
                    <label class="react-title">Assignment 1</label>
                </li>
                <li class="justify-end">
                    <button onClick={() => setStatus(!status)}>{status ? "Logout" : "Login"}</button>
                </li>
            </ul>
        </nav>
        </>
    )
};

export default NavBar;