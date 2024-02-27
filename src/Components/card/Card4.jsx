import React from 'react';
import {Button1} from "../index"

const Card4 = () => {
    return (
        <div className='flex justify-between my-10 p-8'>
            <div className='text-2xl text-gray-600'>
                Sign up and get exclusive <br/> special deals
            </div>
            <div>
            <Button1 className='px-16 py-4 bg-blue-500 rounded-r-lg  text-white hover:bg-blue-600'>Sign Up</Button1>
            </div>
        </div>
    );
}

export default Card4;
