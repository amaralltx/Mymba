// src/components/layout/Navbar/Navbar.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import githubIcon from "../../../assets/icons/github.svg";
import Logo from "../../../components/Logo/Logo.jsx";
export default function Navbar() {
    const location = useLocation();

    return (
        <aside className="min-w-87 bg-primary text-white px-12 py-14 sticky top-0 h-screen">
            <nav>
                <Logo />
                <ul className="text-nav mt-25 flex flex-col gap-8">
                    <li>
                        <NavLink
                            to="/"
                            className={`relative inline-block group`}
                        >
                            <span
                                className={`absolute left-0 bottom-1 w-0 h-1 bg-gradient-to-r from-green to-blue transition-all duration-300 group-hover:w-full
                                            ${
                                                location.pathname === "/"
                                                    ? "w-full"
                                                    : ""
                                            }`}
                            ></span>
                            <span className="relative z-10">HOME</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/explore"
                            className={`relative inline-block group`}
                        >
                            <span
                                className={`absolute left-0 bottom-1 w-0 h-1 bg-gradient-to-r from-green to-blue transition-all duration-300 group-hover:w-full
                                            ${
                                                location.pathname === "/explore"
                                                    ? "w-full"
                                                    : ""
                                            }`}
                            ></span>
                            <span className="relative z-10">
                                CONHEÇA NOSSA FAUNA
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/discover"
                            className={`relative inline-block group`}
                        >
                            <span
                                className={`absolute left-0 bottom-1 w-0 h-1 bg-gradient-to-r from-green to-blue transition-all duration-300 group-hover:w-full
                                            ${
                                                location.pathname ===
                                                "/discover"
                                                    ? "w-full"
                                                    : ""
                                            }`}
                            ></span>
                            <span className="relative z-10">
                                DESCUBRA NOSSO PASSADO
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={`relative inline-block group`}
                        >
                            <span
                                className={`absolute left-0 bottom-1 w-0 h-1 bg-gradient-to-r from-green to-blue transition-all duration-300 group-hover:w-full
                                            ${
                                                location.pathname === "/about"
                                                    ? "w-full"
                                                    : ""
                                            }`}
                            ></span>
                            <span className="relative z-10">SOBRE</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="absolute bottom-13 left-11">
                    <a href="https://github.com/amaralltx/Mymba">
                        <img
                            src={githubIcon}
                            alt=""
                            className="w-14 h-14 transition-all duration-300 hover:scale-105"
                        />
                    </a>
                </div>
            </nav>
        </aside>
    );
}
