"use client"
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useMemo, useState } from 'react'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import { io } from 'socket.io-client'
import Link from 'next/link';

export default function HomePage() {
    const [meetingCode, setMeetingCode] = useState<string>('');

    const newMeeting = () => {

    }

    return (
        <>
            <Navbar />
            <section className='w-screen h-screen absolute top-0 flex justify-center items-center'>
                <div className='w-1/2 px-14'>
                    <div className='my-8'>
                        <p className='text-4xl text-gray-900 my-2'>
                            Sketch, Share, and Solve Together in Real Time
                        </p>
                        <p className='text-xl text-gray-600'>
                            Collaborate in Real Time, Create Without Limits
                        </p>
                    </div>

                    <div className='flex justify-start items-center gap-5'>
                        <Link href={'./pages/CanvasPage/123'}>
                        <button className='bg-blue-500 flex justify-center items-center gap-4 py-3 px-3 rounded-md' onClick={newMeeting}>
                            <DashboardCustomizeOutlinedIcon />
                            <span className='font-semibold'> New Whiteboard </span>
                        </button>
                        </Link>

                        <input type="text" className='text-gray-700 px-3 py-3 w-64 border-2 border-gray-400 outline-none rounded-md placeholder:text-gray-500 placeholder:font-medium' placeholder='Enter Code' onChange={e => setMeetingCode(e.target.value)} />

                        <button className={`${meetingCode ? 'text-blue-500' : 'text-gray-500 '} font-semibold`}>
                            Join
                        </button>
                    </div>
                    <hr className='' />
                    <p className='text-gray-500 font-semibold'> NexDesk </p>
                </div>

                <div className='w-1/2'>

                </div>
            </section>
        </>
    )
}
