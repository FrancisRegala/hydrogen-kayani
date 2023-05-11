import { Link } from '@remix-run/react';
import Logo from '../../public/images/kayani_header_logo.png';
import HeaderTop from './HeaderTop';

export function Layout({children, title}) {
    return (
      <>
        <div className='block sm:hidden'>
          <HeaderTop />
          <header
            role="banner"
            className={`flex items-center py-2 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm pl-200`}
          >
            <div className="flex grid grid-cols-3 gap-4 px-6">
              <div>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </div>
              <div>
                <a className="font-bold text-2xl" href="/">
                  <img src={Logo} alt="harry potter" />
                </a>
              </div>
              <div className='float-right'>
                <div className="flex flex-nowrap float-right">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </header>
          <main
            role="main"
            id="mainContent"
            className="flex-grow"
          >
            {children ? children : null}
          </main>
          
        </div>

        <div className="flex flex-col min-h-screen antialiased bg-neutral-50 hidden sm:block">
          <HeaderTop />
          <header
            role="banner"
            className={`flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm pl-200`}
          >
            <div className="flex gap-12">
              <a className="font-bold text-2xl" href="/">
                <img src={Logo} alt="harry potter" />
              </a>
              
            </div>
            <div className="float-right">
              <div className="flex flex-nowrap">
                <div className="flex flex-nowrap pr-6">
                  <Link to="/shop" className="px-4">SHOP</Link>
                  <div className="px-4">COLLECTIONS</div>
                  <div className="px-4">ABOUT US</div>
                </div>
                <div className="flex flex-nowrap">
                  <div className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <div className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div className="px-2">
                    <div className="flex flex-nowrap">
                      <span className='pr-2'>CART</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                      <span className='pl-2'>0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
    
          <main
            role="main"
            id="mainContent"
            className="flex-grow"
          >
            {children ? children : null}
          </main>

          <div
            role="banner"
            className={`flex py-2 backdrop-blur-lg top-0 justify-between leading-none gap-4 antialiased transition shadow-sm`}
            style={{ background: '#B2967D', color: '#F0F0F0', fontFamily: 'Unna', fontStyle: 'normal', fontWeight: '700', fontSize: '24px', lineHeight: '495px', }}
          >
            <div className="px-200">
              <div className="grid grid-cols-2 gap-4 py-8">
                <div className="grid grid-cols-1 gap-4 content-center max-w-6xl py-8">
                  <div className="landing-text">
                    <span>Elevate your style game and shop Kayani's unique collection today!</span>
                  </div>
                  <div className="flex flex-col pt-8 mt-8" style={{ paddingRight: '80px' }}>
                    <div>
                      <button type="button"
                        className="font-medium float-right text-white border border-white focus:ring-4 focus:outline-none focus:ring-white-300 font-medium text-white px-5 py-2.5 text-center mb-2 dark:border-white dark:text-white dark:focus:ring-white-800">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                      </button>
                    </div>
                    <div>
                      <span className="float-right text-lg">Shop Now</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 content-center">
                  <div className="image_footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  