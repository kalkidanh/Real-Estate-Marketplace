import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [formData, setFormData] = useState({})
    const handleChange = (e) => {
        setFormData ({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/auth/signup',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        console.log(data);
    };
    console.log(formData);
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
            <form>
                <div className='flex flex-col items-center'>
                    <label htmlFor='username'>User Name</label>
                    <input type='text' id='username' onChange={handleChange}
                    className='border border-gray-500 rounded-md w-80 p-1 my-2' />
                </div>
                <div className='flex flex-col items-center'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={handleChange}
                    className='border border-gray-500 rounded-md w-80 p-1 my-2' />
                </div>
                <div className='flex flex-col items-center'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={handleChange}
                    className='border border-gray-500 rounded-md w-80 p-1 my-2' />
                </div>
                <div className='flex flex-col items-center'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input type='password' id='password2' onChange={handleChange}
                    className='border border-gray-500 rounded-md w-80 p-1 my-2' />
                </div>
                <div className='flex flex-col items-center'>
                    <button type='submit' 
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-2'>Sign Up</button>
                </div>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Have an account?</p>
                <Link to= {"sign-in"}>
                    <span className='text-green-700'>Sign in</span>
                </Link>
                
            </div>
        </div>
    )
}