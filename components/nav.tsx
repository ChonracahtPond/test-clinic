import React from "react"

export default function NavComponent() {
    return (
        <nav className="nav">
            <a href="index"
                className="site-title">CLINIC</a>

            <div className="dropdown">
                <span>Mouse over me</span>
                <div className="dropdown-content">
                    <p className=" ">Hello World!</p>
                    <p className="">Hello World!</p>
                    <p className="">Hello World!</p>
                </div>
            </div>

            <ul>

                <li>
                    <a className="mr-4" href="index">Pricing</a>

                    <a className="mr-4" href="index">About</a>

                </li>



            </ul>
        </nav>
    )
}