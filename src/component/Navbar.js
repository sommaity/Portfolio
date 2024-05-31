import React from "react";
import {
    NavLink,
} from "react-router-dom";
const Navbar = ()=>{
    return(
                <div
                    style={{
                        display: "flex",
                        background: "black",
                        padding: "5px 0 5px 5px",
                        fontSize: "20px",
                    }}
                >
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/about"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                            About
                        </NavLink>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/portfolio"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                            Portfolio
                        </NavLink>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/contact"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
                

    );
}
export default Navbar;