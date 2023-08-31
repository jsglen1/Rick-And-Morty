'use client'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {


    return (
        <nav className="bg-gray-800 py-4 px-4 flex items-center justify-between">

            <div className="flex justify-start gap-2">

                <h1 className="text-white hover:text-gray-300 transition">
                    <Link to={"/"} className="text-white hover:text-gray-300 transition">
                        NEXT JS
                    </Link>

                </h1>

            </div>

            <ul className="flex justify-end">

                <button
                    className="text-white hover:text-gray-300 transition block md:hidden text-2xl"
                >

                </button>

                <div className="hidden md:flex gap-2">

                    {/* 
                    <li >
                    <Link to={"/profile"} className="text-white hover:text-gray-300 transition">
                    Profile
                    </Link>
                    </li>
                     */}

                </div>

            </ul>

        </nav>
    );
}