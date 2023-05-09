export function meta() {
    return [
      {title: 'Hydrogen'},
      {description: 'A custom storefront powered by Hydrogen'},
    ];
}
  
export default function Index() {
    return (
    <>
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

      <div className="index1 pt-8">
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
    </>
    );
}
  