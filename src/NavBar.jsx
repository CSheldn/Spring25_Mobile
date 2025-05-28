import { useState } from 'react';
import "./App.css";

function NavBar() {
    const [status, setStatus] = useState(true)

    return (
        <nav>
            <ul class="py">
                <li>
                    <h1>Assignment 1</h1>
                </li>
                <li class="justify-end">
                    <button onClick={() => setStatus(!status)}>{status ? "Logout" : "Login"}</button>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;