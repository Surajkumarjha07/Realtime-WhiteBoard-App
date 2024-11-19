import React, { useState } from 'react'
import Image from 'next/image'
import { useAppDispatch } from '../Redux/hooks';
import { setTextSize } from '../Redux/slices/textSize';
import { setFontFamily } from '../Redux/slices/fontFamily';

export default function TextBottomComponent() {
    const dispatch = useAppDispatch();

    function TextSize(e: React.MouseEvent) {
        let target = e.target as HTMLButtonElement
        dispatch(setTextSize(target.name))
    }

    function FontFamily(e: React.MouseEvent) {
        let target = e.target as HTMLButtonElement;
        dispatch(setFontFamily(target.name))
    }

    return (
        <>
            <div className='flex flex-col justify-between gap-1'>
                <div className='flex justify-center items-center gap-8'>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='text-xl' onClick={TextSize}> S </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='text-2xl' onClick={TextSize}> M </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='text-3xl' onClick={TextSize}> L </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='text-4xl' onClick={TextSize}> XL </button>
                </div>

                <div className='flex justify-center items-center gap-8'>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md drawFont' name='font-extrabold' onClick={FontFamily}> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-sans' name='font-sans' onClick={FontFamily}> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-serif' name='font-serif' onClick={FontFamily}> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-mono' name='font-mono' onClick={FontFamily}> Aa </button>
                </div>

                <div className='flex justify-center items-center gap-8'>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'>
                        <Image src={'/Images/alignLeftText.png'} alt='right' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'>
                        <Image src={'/Images/alignCenterText.png'} alt='right' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'>
                        <Image src={'/Images/alignRightText.png'} alt='right' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md pointer-events-none'>
                        <Image src={'/Images/upArrow2.png'} alt='right' height={100} width={100} className='w-4 h-4' />
                    </button>
                </div>
            </div>
        </>
    )
}
