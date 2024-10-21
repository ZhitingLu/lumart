"use client";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // toggle menu open/close
    }
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                    <a href="/">LuMart</a>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="/">Home</a>
                    <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="/cart">Cart</a>
                </nav>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
                            />
                        </svg>
                    </button>

                </div>
            </div>
            <nav
                className={`md:hidden ${isOpen ? "block" : "hidden"} bg-blue-700`}
            >
                <a href="/" className="block px-4 py-2 text-white hover:bg-blue-500">
                    Home
                </a>
                <a href="/cart" className="block px-4 py-2 text-white hover:bg-blue-500">
                    Cart
                </a>
            </nav>
        </header >
    );
}

export default Header;