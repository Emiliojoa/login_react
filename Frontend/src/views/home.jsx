import React from 'react'
import { authenticate } from '../context/contextProvider'

export const Home = () => {

    const { logout } = authenticate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logout();
    };

    return (
        <>
            <div className='min-h-screen bg-blue-400 w-full flex items-center justify-center gap-4 flex-col'>
                <div className='flex gap-2 flex-col '>
                    <h1 className='text-white font-bold text-2xl'><p className='text-yellow-200 '>Bienvenidos al Himalaya</p></h1>
                    <a target='_blank' href="https://www.youtube.com/watch?v=wOpewn3SjJU&ab_channel=LUPERS">
                        <img className='border rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyNuYIQiQVaj9rd3WeuCcdseurf18kczwCQ&s" alt="" />
                    </a>

                </div>

                <button className='text-white font-bold border rounded-md p-2 hover:scale-125 transition duration-500 hover:bg-blue-300 hover:border-blue-200' onClick={handleSubmit}>logout</button>
            </div>
        </>
    )
}
