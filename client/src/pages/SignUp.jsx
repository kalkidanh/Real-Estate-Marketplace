import React from 'react'

export default function SignUp() {
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
            <form>
                <div className='flex flex-col items-center'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' className='border border-gray-500 rounded-md w-80 p-1 my-2' />
                </div>
                <div className='flex flex-col items-center'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' className='border border-gray-500 rounded-md w-80 p-1 my-2' />
                </div>
                <div className='flex flex-col items-center'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' className='border border-gray-500 rounded-md w-80 p-1 my-2' />
                </div>
                <div className='flex flex-col items-center'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input type='password' id='password2' className='border border-gray-500 rounded-md w-80 p-1 my-2' />
                </div>
                <div className='flex flex-col items-center'>
                    <button type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-2'>Sign Up</button>
                </div>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Have an account?</p>
                
                
            </div>
        </div>
    )
}