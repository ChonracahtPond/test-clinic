import React from "react"

export default function NavComponent() {
    return (
        <nav className="nav">
            <a href="/"
                className="site-title">CLINIC</a>

            <div className="dropdown">
                <span>Mouse over me</span>
                <div className="dropdown-content">
                    <p className=" text-black">Hello World!</p>
                    <p className="text-black">Hello World!</p>
                    <p className="text-black">Hello World!</p>
                </div>
            </div>
            <ul>

                <li>
                    <a className="mr-4" href="/pricing">Pricing</a>

                    <a className="mr-4" href="/about">About</a>

                </li>



            </ul>
        </nav>
    )
}