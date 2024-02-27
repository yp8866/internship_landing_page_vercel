import React from 'react'
function Footer() {
  return (
    <section className="w-full overflow-hidden py-10 pb-20 px-10 bg-gray-800 text-white border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                   <div className="w-full p-6 md:w-1/2 lg:w-4/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                                CATEGORIES
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <button
                                        className=" text-base font-medium text-gray-400 hover:text-gray-700"
                                        to="/"
                                    >
                                        Features
                                    </button>
                                </li>
                                <li className="mb-4">
                                    <button
                                        className=" text-base font-medium text-gray-400 hover:text-gray-700"
                                        to="/"
                                    >
                                        Pricing
                                    </button>
                                </li>
                                <li className="mb-4">
                                    <button
                                        className=" text-base font-medium text-gray-400 hover:text-gray-700"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className=" text-base font-medium text-gray-400 hover:text-gray-700"
                                        to="/"
                                    >
                                        Press Kit
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-4/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                                CONTACT
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <button
                                        className=" text-base font-medium text-gray-400 hover:text-gray-700"
                                        to="/"
                                    >
                                        Account
                                    </button>
                                </li>
                                <li className="mb-4">
                                    <button
                                        className=" text-base font-medium text-gray-400 hover:text-gray-700"
                                        to="/"
                                    >
                                        Help
                                    </button>
                                </li>
                                <li className="mb-4">
                                    <button
                                        className=" text-base font-medium text-gray-400 hover:text-gray-700"
                                        to="/"
                                    >
                                        Contact Us
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className=" text-base font-medium text-gray-400 hover:text-gray-700"
                                        to="/"
                                    >
                                        Customer Support
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-4/12">
                        <div className="h-full flex">
                            <h3 className="flex gap-2 tracking-px my-auto text-xs font-semibold text-white">
                                United States 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
  )
}

export default Footer