import { Link } from '@remix-run/react';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header
                role="banner"
                className={`bg-[#F9EDEB] md:bg-white flex items-center py-2 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm px-6 md:px-[80px] lg:px-[120px] xl:px-[200px]`}
                >
                <div className="flex grid grid-cols-3 md:grid-cols-2 gap-4 w-full">
                    <button data-collapse-toggle="navbar-default" type="button" onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center text-sm rounded-lg md:hidden"
                        aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6 md:w-10 md:h-10 md:pt-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                        </svg>
                    </button>

                    <div>
                    <a className="text-[32px] md:text-[48px]" href="/">
                        KAYANI
                    </a>
                    </div>
                    <div className='float-right w-full'>
                    <Link to="/cart" className="flex flex-nowrap float-right block md:hidden">
                        <svg className="w-6 h-6 md:w-10 md:h-10 md:pt-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </Link>
                    <div className="flex flex-nowrap float-right hidden md:block ">
                        <div className="flex flex-nowrap pr-6 pt-4 md:text-sm">
                        <Link to="/shop" className="px-2">SHOP</Link>
                        <Link to="/collection" className="px-2">COLLECTIONS</Link>
                        <Link to="/about" className="px-2">ABOUT</Link>

                        <div className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                        <Link to="/my-account" className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </Link>
                        <Link to="/cart" className="px-2">
                            <div className="flex flex-nowrap">
                            <span className='pr-2'>CART</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span className='pl-2'>0</span>
                            </div>
                        </Link>
                        </div>
                        <div className="flex flex-nowrap">
                        
                        </div>
                    </div>
                    </div>
                </div>
            </header>
            {/* // header submenu */}
            <div className={`md:hidden absolute pt-12 pl-2 rounded-md shadow-lg ${isOpen ? "block" : "hidden"}`}>
                <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-700" onClick={() => setIsOpen(false)}>
                    <Link to="/shop" className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg">SHOP</Link>
                    <Link to="/collection" className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg">COLLECTION</Link>
                    <Link to="/about" className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg">ABOUT</Link>
                    <Link to="/my-account" className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg">MY ACCOUNT</Link>
                </div>
            </div>
        </>
    )
}