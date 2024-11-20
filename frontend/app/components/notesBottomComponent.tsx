"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useAppDispatch } from '../Redux/hooks'
import { setNoteTextSize } from '../Redux/slices/noteFeatures';
import { setNoteFontFamily } from '../Redux/slices/noteFeatures';

export default function NotesBottomComponent() {
    const [toggle, setToggle] = useState(false)
    const dispatch = useAppDispatch();

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

    function TextSize(e: React.MouseEvent) {
        let target = e.target as HTMLButtonElement
        dispatch(setNoteTextSize(target.name))
    }

    function FontFamily(e: React.MouseEvent) {
        let target = e.target as HTMLButtonElement;
        dispatch(setNoteFontFamily(target.name))
    }

    return (
        <>
            <div className='flex flex-col justify-between gap-1 relative'>
                <div className='flex justify-center items-center gap-8'>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='3xl' onClick={TextSize}> S </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='4xl' onClick={TextSize}> M </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='5xl' onClick={TextSize}> L </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='6xl' onClick={TextSize}> XL </button>
                </div>

                <div className='flex justify-center items-center gap-8'>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md drawFont' name='extrabold' onClick={FontFamily}> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-sans' name='sans' onClick={FontFamily}> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-serif' name='serif' onClick={FontFamily}> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-mono' name='mono' onClick={FontFamily}> Aa </button>
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
