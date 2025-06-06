// src/components/layout/Navbar/Navbar.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import githubIcon from "../../../assets/icons/github.svg";
import Logo from "../../Logo/Logo.jsx";
export default function Navbar() {
    const location = useLocation();

    return (
        <aside className="min-w-92 bg-primary text-white px-12 py-14 sticky top-0 h-screen">
            <nav>
                <Logo />
                <ul className="text-nav mt-25 flex flex-col gap-6">
                    <li>
                        <NavLink
                            to="/"
                            className={`relative inline-block group ${
                                location.pathname === "/" ? "font-bold" : ""
                            }`}
                        >
                            <span className="absolute left-0 bottom-1 w-0 h-1 bg-gradient-to-r from-green to-blue transition-all duration-300 group-hover:w-full"></span>
                            <span className="relative z-10">HOME</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/map"
                            className={`relative inline-block group ${
                                location.pathname === "/map" ? "font-bold" : ""
                            }`}
                        >
                            <span className="absolute left-0 bottom-1 w-0 h-1 bg-gradient-to-r from-green to-blue transition-all duration-300 group-hover:w-full"></span>
                            <span className="relative z-10">
                                CONHEÇA NOSSA FAUNA
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/species"
                            className={`relative inline-block group ${
                                location.pathname === "/species"
                                    ? "font-bold"
                                    : ""
                            }`}
                        >
                            <span className="absolute left-0 bottom-1 w-0 h-1 bg-gradient-to-r from-green to-blue transition-all duration-300 group-hover:w-full"></span>
                            <span className="relative z-10">
                                DESCUBRA NOSSO PASSADO
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={`relative inline-block group ${
                                location.pathname === "/about"
                                    ? "font-bold"
                                    : ""
                            }`}
                        >
                            <span className="absolute left-0 bottom-1 w-0 h-1 bg-gradient-to-r from-green to-blue transition-all duration-300 group-hover:w-full"></span>
                            <span className="relative z-10">SOBRE</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="absolute bottom-10 left-6">
                    <a href="https://github.com/amaralltx/">
                        <img
                            src={githubIcon}
                            alt=""
                            className="w-14 h-14 transition-all duration-300 hover:scale-105"
                        />
                    </a>
                    <p className="text-[14px]">
                        Este site está licenciado sob <br />
                        <a
                            href="https://creativecommons.org/licenses/by/4.0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue hover:underline"
                        >
                            Creative Commons 4.0 (CC BY 4.0)
                        </a>
                        .
                    </p>
                </div>
            </nav>
        </aside>
    );
}
