import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default function NotFound() {
    return (
        <div className="page home">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link className="go-home" to="/">Return to Home</Link>
        </div>
    )
}
