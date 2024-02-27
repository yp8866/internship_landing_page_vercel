import React from 'react';

const UpdationBox = ({date="February 22, 2020"}) => {
    return (
        <div>
            <div className='flex flex-grow justify-between text-gray-700 border-t border-b border-gray-300 mt-3 py-3'>
                <div className='flex justify-start gap-10'>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        {`Last Updated - ${date}`}
                    </div>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        {/* pass the arguments & show  */}
                        {`Advertising Disclosure`} 
                    </div>
                </div>
                <div className='flex gap-2'>
                    {/* pass the arguments & show  */}
                    {`Top Relevant`} 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>                
            </div>
            <div className='flex justify-between my-4 pr-28 text-gray-700'>
                <div>Tools</div>
                <div>AWS Builder</div>
                <div>Start Build</div>
                <div>Build Suplies</div>
                <div>Tooling</div>
                <div>Blue Hosting</div>
            </div>
        </div>
    );
}

export default UpdationBox;
