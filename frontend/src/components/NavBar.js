import React from "react";

function NavBar() {
    return(
        <nav className="bg-white fixed w-full z-30 top-0 ">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="/"><img className="hidden lg:block h-12"  src={process.env.PUBLIC_URL + "/assets/img/logos.svg"} alt="Elearn"/></a>
                            <a href="/"><h2 className="text-3xl font-extrabold tracking-widest text-gray-900 rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Elearn</h2></a>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 space-y-2">
                                <a href="/home" className="text-blue-900 hover:text-blue-700 px-3 pb-2 pt-4 rounded-md text-sm font-medium">Home</a>
                                <a href="/explore" className="text-blue-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Explore</a>
                                <a href="/courses" className="text-blue-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                                <a href="/forum" className="text-blue-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Forum</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <div className="ml-3 relative">
                            <div>
                                <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src={process.env.PUBLIC_URL + "/assets/img/bprofile.svg"} alt=""/>
                                </button>
                            </div>
                            {/* <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="/" className="bg-blue-900 hover:bg-blue-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="/" className="text-gray-400 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Explore</a>
                    <a href="/" className="text-gray-400 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Courses</a>
                    <a href="/" className="text-gray-400 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Forum</a>
                </div>
            </div>
            <hr className="border-b border-gray-900 opacity-10 my-0 py-0" />
        </nav>
    )
}
export default NavBar;