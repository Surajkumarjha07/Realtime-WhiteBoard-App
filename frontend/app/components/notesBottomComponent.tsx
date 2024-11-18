"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function NotesBottomComponent() {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        document.addEventListener("click", (e: MouseEvent) => {
            let target = e.target as HTMLElement;
            if (target.classList.contains("box")) {
                setToggle(!toggle);
            }
            else {
                setToggle(false)
            }
        })
    }, [])

    return (
        <>
            <div className='flex flex-col justify-between gap-1 relative'>
                <div className='flex justify-center items-center gap-8'>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'> S </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'> M </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'> L </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'> XL </button>
                </div>

                <div className='flex justify-center items-center gap-8'>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md drawFont'> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-sans'> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-serif'> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-mono'> Aa </button>
                </div>

                <div className='flex justify-center items-center gap-8'>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'>
                        <Image src={'/Images/alignLeft.png'} alt='right' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'>
                        <Image src={'/Images/alignCenter.png'} alt='right' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'>
                        <Image src={'/Images/alignRight.png'} alt='right' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md box'>
                        <Image src={'/Images/upArrow.png'} alt='right' height={100} width={100} className='w-4 h-4 pointer-events-none' />
                    </button>
                </div>

                {
                    toggle &&
                    <div className='flex justify-center items-center gap-8 bg-white shadow-md py-2 px-3 absolute bottom-0'>
                        <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'>
                            <Image src={'/Images/alignTop.png'} alt='right' height={100} width={100} className='w-6 h-6' />
                        </button>
                        <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'>
                            <Image src={'/Images/midAlign.png'} alt='right' height={100} width={100} className='w-6 h-6' />
                        </button>
                        <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'>
                            <Image src={'/Images/alignBottom.png'} alt='right' height={100} width={100} className='w-6 h-6' />
                        </button>
                    </div>
                }
            </div>
        </>
    )
}
