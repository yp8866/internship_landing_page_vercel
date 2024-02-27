import React, { useState } from 'react';

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const [isSearch, setisSearch]= useState(false);
 const navItems=[
    {
        name: 'Categories',
        url: '/',
        active: true
         
    },
    {
        name: 'Website Builders',
        url: '/',
        active: true
    },
    {
        name:"Today's Deals",
        url: '/',
        active: true
    },
    
]
 return (
   <nav className="fixed z-40 w-full top-0 left-0 flex items-center justify-between flex-wrap p-3 px-5 bg-gray-800 text-white">
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div className="relative mx-auto text-gray-600 mr-5 lg:block">
                <button className={`absolute left-0 top-0 mt-3 ml-2 ${isSearch ? "hidden" : "block"}`}>
                    <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                         version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 56.966 56.966"
                         width="512px" height="512px">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                </button>
                <input
                    className="border-2 border-gray-300 bg-white h-10 pl-2 pr-2 rounded-lg text-sm focus:outline-none"
                    type="search" name="search"
                    onChange={(e)=>{
                        setisSearch(true)
                        e.target.value=="" ? setisSearch(false) : setisSearch(true);
                    }}    
                />
    </div>
     <div
       className={`w-full block gap-3 flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">
         {
            navItems.map((item)=>(
                item.active? (
                    
                        <a key={item.name} href={item.url} className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:first-letter:bg-blue-700 hover:underline">
                            {item.name}
                        </a>
                    
                ) :null
            ))
         }
       </div>       
     </div>
   </nav>
 );
}
export default Navbar;