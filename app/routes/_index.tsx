import { Link } from "@remix-run/react";

export function meta() {
    return [
      {title: 'Hydrogen'},
      {description: 'A custom storefront powered by Hydrogen'},
    ];
}
  
export default function Index() {
    return (
    <>
      <div className='' style={{ background: '#F9EDEB' }}>
        {/* Step Up Your Style with Kayani - SM */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-4 py-8 my-8">
            <div className="text-4xl text-center px-12">
              Step Up Your Style with Kayani
            </div>
          </div>
          <div className="grid grid-cols-2 content-center px-4 pb-8">
            <div className="image-half-circle-sm h-[383px] w-[191px]"></div>
            <div className="image-half-circle1-sm h-[383px] w-[191px]"></div>
          </div>
          <div className="grid grid-cols-1 gap-4 px-6">
            <div className="text-center text-lg">
              Shop Kayani's Exclusive Collection for Unique and Trendy Clothing That Will Make You Stand Out
            </div>
          </div>
          <div className="flex flex-col py-10 mb-8 text-center">
            <div>
              <Link type="button" to="/shop"
                className="font-medium text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2 text-center dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
              </Link>
            </div>
            <div>
              <span className="text-lg">Shop Now</span>
            </div>
          </div>
        </div>
        {/* Step Up Your Style with Kayani - MD */}
        <div className="hidden md:block pt-8">
          <div className="grid grid-cols-2 gap-8 px-6 lg:px-[100px]">
            <div className="grid grid-cols-1 gap-4 content-center w-11/12">
              <div className="text-4xl xl:text-7xl">
                Step Up Your Style with Kayani
              </div>
              <div className="text-xl text-justify">
                Shop Kayani's Exclusive Collection for Unique and Trendy Clothing That Will Make You Stand Out
              </div>
              <div className="flex flex-col pt-8">
                <div>
                  <Link type="button" to="/shop"
                    className="font-medium float-right text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                  </Link>
                </div>
                <div>
                  <span className="float-right text-lg">Shop Now</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 content-center">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="image-half-circle h-[328px] lg:h-[378px] xl:h-[585px] 2xl:h-[784px]"></div>
                <div className="image-half-circle1 h-[328px] lg:h-[378px] xl:h-[585px] 2xl:h-[784px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Shop Bestsellers */}
        <div className="md:grid md:grid-cols-3 md:gap-4 md:px-6 py-4 my-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="girl1 h-[639px] md:h-[345px] lg:h-[478px] xl:h-[675px]">
              <div className="relative h-full w-full">
                <div className="absolute inset-x-0 bottom-0 h-26 mb-8">
                  <div className="grid grid-cols-1 content-center text-center">
                    <span className="grid grid-cols-1 text-white text-4xl mb-4">Bestsellers</span>
                    <button className="grid grid-cols-1 bg-white text-xl hover:bg-gray-100 text-gray-800 font-semibold py-4 px-8 border border-gray-400 rounded shadow my-4 w-[250px] place-self-center">
                      Shop Bestsellers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 py-4 md:py-0">
            <div className="girl2 h-[639px] md:h-[345px] lg:h-[478px] xl:h-[675px]">
              <div className="relative h-full w-full">
                <div className="absolute inset-x-0 bottom-0 h-26 mb-8">
                  <div className="grid grid-cols-1 content-center text-center">
                    <span className="grid grid-cols-1 text-white text-4xl mb-4">New Arrivals</span>
                    <button className="grid grid-cols-1 bg-white text-xl hover:bg-gray-100 text-gray-800 font-semibold py-4 px-8 border border-gray-400 rounded shadow my-4 w-[250px] place-self-center">
                      Shop Arrivals
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="girl3 h-[639px] md:h-[345px] lg:h-[478px] xl:h-[675px]">
              <div className="relative h-full w-full">
                <div className="absolute inset-x-0 bottom-0 h-26 mb-8">
                  <div className="grid grid-cols-1 content-center text-center">
                    <span className="grid grid-cols-1 text-white text-4xl mb-4">Dress Collection</span>
                    <button className="grid grid-cols-1 bg-white text-xl hover:bg-gray-100 text-gray-800 font-semibold py-4 px-8 border border-gray-400 rounded shadow my-4 w-[250px] place-self-center">
                      Shop Dress
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* See What's Trending - SM */}
        <div className="block md:hidden grid grid-cols-1 gap-4 mt-8" style={{ backgroundColor: '#D5D5D7' }}>
          <div className="girl-sm"></div>
        </div>
        <div className="block md:hidden grid grid-cols-1 gap-4 content-center py-8 px-6" style={{ backgroundColor: '#D5D5D7' }}>
          <div className="text-[30px] pt-4 text-bold">
            See What's Trending
          </div>
          <div className="text-md">
            Check out KAYANI's must-have featured product! Designed with the modern woman in mind, it's a unique and eye-catching piece that combines trendiness with timelessness. Feel confident and powerful with this high-quality item, perfect for any occasion from a night out to a formal event.
          </div>
          <div className="flex flex-col py-2 text-center">
            <div>
              <Link type="button" to="/shop"
                className="font-medium text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2 text-center dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
              </Link>
            </div>
            <div>
              <span className="text-md">Shop Now</span>
            </div>
          </div>
        </div>
        {/* See What's Trending - MD */}
        <div className="hidden md:block grid grid-cols-1 gap-4">
          <div className="girl h-[344px] lg:h-[455px] xl:h-[828px] content-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4 content-center">
                
              </div>
              <div className="grid grid-cols-1 gap-4 content-center h-[344px] content-center xl:pt-8 xl:mt-8">
                <div className="text-2xl xl:text-6xl text-bold">
                  <strong>See What's Trending</strong>
                </div>
                <div className="text-sm xl:text-lg text-justify w-5/6">
                  Check out KAYANI's must-have featured product! Designed with the modern woman in mind, it's a unique and eye-catching piece that combines trendiness with timelessness. Feel confident and powerful with this high-quality item, perfect for any occasion from a night out to a formal event.
                </div>
                <div className="flex flex-col pt-2 w-5/6">
                  <div>
                    <Link type="button" to="/shop"
                      className="font-medium float-right text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                  </div>
                  <div>
                    <span className="float-right text-lg">Shop Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Arrivals - SM */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-4 content-center pt-8 mt-8">
            <div className="text-4xl text-center text-bold pb-4">
              <strong>New Arrivals</strong>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 pb-4">
            <div className="looks1-sm mx-4"></div>
          </div>
          <div className="grid grid-cols-1 gap-4 pb-4 justify-items-center w-full">
            <div>
              <button type="button"
                className="font-medium text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center m-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
              </button>
              <button type="button"
                className="font-medium text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center m-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
              </button>
            </div>
          </div>
        </div>

        {/* New Arrivals - MD */}
        <div className="hidden md:block pt-8 mt-8 px-6" style={{ background: '#F9EDEB' }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-4xl pt-2">
              <span>Looks You'll Love</span>
            </div>
            <div className="float-right">
              <div>
                <button type="button"
                  className="font-medium float-right text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center m-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
                <button type="button"
                  className="font-medium float-right text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center m-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="looks1 h-[316px] xl:h-[600px]"></div>
            <div className="looks2 h-[316px] xl:h-[600px]"></div>
            <div className="looks3 h-[316px] xl:h-[600px]"></div>
            <div className="looks4 h-[316px] xl:h-[600px]"></div>
          </div>
        </div>

        {/* Fashion That Is Always Relevant */}
        <div className="grid grid-cols-1 gap-4 pt-8 pb-2 mt-8 pl-6 pr-8 mr-8">
          <div className="text-4xl text-bold">
            Fashion That Is Always Relevant
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-6 md:pb-6">
          <div className="fashion-sm mt-8 h-[205px] md:h-[398px] xl:h-[584px]"></div>
          <div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <div>
                    <Link type="button" to="/shop"
                      className="font-medium float-right text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-4 text-center mb-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-12">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                  </div>
                  <div>
                    <span className="float-right text-md">Shop Now</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pb-4 mb-4">
                <div className="girl-brown-sm h-[122px] md:h-[241px] lg:h-[318px] xl:h-[502px]"></div>
                <div className="girl-green-sm h-[122px] md:h-[241px] lg:h-[318px] xl:h-[483px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Elevate your style game and shop Kayani's unique collection today - SM */}
        <div className="block md:hidden">
          <div
              role="banner"
              className={`py-2 backdrop-blur-lg top-0 justify-between leading-none gap-4 antialiased transition shadow-sm`}
              style={{ background: '#B2967D', color: '#F0F0F0', fontFamily: 'Unna', fontStyle: 'normal', fontWeight: '300' }}
            >
              <div className="grid grid-cols-1 gap-4 px-8 py-8">
                <div className="text-[30px] text-white text-center">
                  <span>Elevate your style game and shop Kayani's unique collection today!</span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 content-center px-4 pb-8">
                <div className="image_footer_sm"></div>
              </div>
              <div className="flex flex-col text-center pb-8">
                <div>
                  <Link type="button" to="/shop"
                    className="font-medium text-white border border-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center dark:border-white dark:text-white dark:focus:ring-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                  </Link>
                </div>
                <div>
                  <span className="text-lg">Shop Now</span>
                </div>
              </div>
          </div>
        </div>

        {/* Elevate your style game and shop Kayani's unique collection today - MD */}
        <div className="hidden md:block">
          <div
              role="banner"
              className={`flex p-4 backdrop-blur-lg top-0 justify-between leading-none gap-4 antialiased transition shadow-sm`}
              style={{ background: '#B2967D', color: '#F0F0F0', fontFamily: 'Unna' }}
            >
              <div className="grid grid-cols-2 gap-4 p-8 w-full">
                <div className="grid grid-cols-1 gap-4 content-center px-4">
                  <div className="text-xl xl:text-6xl text-right">
                    <span>Elevate your style game and shop Kayani's unique collection today!</span>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <Link type="button" to="/shop"
                        className="font-medium float-right text-white border border-white focus:ring-4 focus:outline-none focus:ring-white-300 font-medium text-white px-5 py-2.5 text-center mb-2 dark:border-white dark:text-white dark:focus:ring-white-800">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 xl:w-10 xl:h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                      </Link>
                    </div>
                    <div>
                      <span className="float-right text-md">Shop Now</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 content-center">
                  <div className="image_footer h-[136px] lg:h-[190px] xl:h-[358px]"></div>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* <div className="hidden sm:block">
        <div className="index1 pt-8">
          <div className="px-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4 content-center" style={{ height: '800px'}}>
                <div className="landing-text">
                  Step Up Your Style with Kayani
                </div>
                <div className="landing-text-small">
                  Shop Kayani's Exclusive Collection for Unique and Trendy Clothing That Will Make You Stand Out
                </div>
                <div className="flex flex-col pt-8 mt-8" style={{ paddingRight: '80px' }}>
                  <div>
                    <button type="button"
                      className="font-medium float-right text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
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

              <div className="grid grid-cols-1 gap-4 content-center" style={{ height: '800px'}}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="image-half-circle"></div>
                  <div className="image-half-circle1"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4" style={{ paddingTop: '100px', paddingBottom: '100px'}}>
              <div className="grid grid-cols-1 gap-4">
                <div className="girl1">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-x-0 bottom-0 h-26 mb-8 pb-8">
                      <div className="grid grid-cols-1 gap-4 content-center text-center">
                        <span className="grid grid-cols-1 text-white text-2xl">Bestsellers</span>
                        <button className="grid grid-cols-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-4"
                          style={{ margin: '0px 90px' }}>
                          Shop Bestsellers
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="girl2">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-x-0 bottom-0 h-26 mb-8 pb-8">
                      <div className="grid grid-cols-1 gap-4 content-center text-center">
                        <span className="grid grid-cols-1 text-white text-2xl">New Arrivals</span>
                        <button className="grid grid-cols-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-4"
                          style={{ margin: '0px 90px' }}>
                          Shop Arrivals
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 content-center">
                <div className="girl3">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-x-0 bottom-0 h-26 mb-8 pb-8">
                      <div className="grid grid-cols-1 gap-4 content-center text-center">
                        <span className="grid grid-cols-1 text-white text-2xl">Dress Collection</span>
                        <button className="grid grid-cols-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-4"
                          style={{ margin: '0px 90px' }}>
                          Shop Dress
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="girl">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4 content-center" style={{ height: '800px'}}>
                
              </div>

              <div className="grid grid-cols-1 gap-4 content-center" style={{ height: '800px'}}>
                <div className="landing-text">
                  See What's Trending
                </div>
                <div className="landing-text-small text-justify w-5/6">
                  Check out KAYANI's must-have featured product! Designed with the modern woman in mind, it's a unique and eye-catching piece that combines trendiness with timelessness. Feel confident and powerful with this high-quality item, perfect for any occasion from a night out to a formal event.
                </div>
                <div className="flex flex-col pt-8 mt-8 pr-8 mr-8" style={{ paddingRight: '120px' }}>
                  <div>
                    <button type="button"
                      className="font-medium float-right text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
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
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4" style={{ padding: '80px 106px 10px 106px', background: '#F9EDEB' }}>
          <div className="looks-love">
            <span>Looks You'll Love</span>
          </div>
          <div className="float-right">
            <div>
              <button type="button"
                className="font-medium float-right text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center m-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
              </button>
              <button type="button"
                className="font-medium float-right text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center m-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4" style={{ padding: '4px 106px 100px 106px', background: '#F9EDEB' }}>
          <div className="looks1"></div>
          <div className="looks2"></div>
          <div className="looks3"></div>
          <div className="looks4"></div>
        </div>

        <div className="index2 pt-8">
          <div className="px-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="fashion"></div>
              <div>
                <div className="grid grid-cols-2 gap-2 pb-4">
                  <div className="looks-love">
                    <strong>Fashion That Is Always Relevant</strong>
                  </div>
                  <div>
                    <div className="flex flex-col pt-8 mt-8 pr-8 mr-8" style={{ paddingRight: '120px' }}>
                      <div>
                        <button type="button"
                          className="font-medium text-black border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-base px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-black dark:focus:ring-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </button>
                      </div>
                      <div>
                        <span className="text-lg">Shop Now</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="girl-brown"></div>
                  <div className="girl-green"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
    );
}
  