import React, { useState } from 'react'
import Image from 'next/image'

export default function TextBottomComponent() {
    const [textSize, setTextSize] = useState('');

    function TextSize(e: React.MouseEvent) {
        let target = e.target as HTMLButtonElement
        setTextSize(target.name);
        console.log(textSize);
    }

    return (
        <>
            <div className='flex flex-col justify-between gap-1'>
                <div className='flex justify-center items-center gap-8'>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='small' onClick={TextSize}> S </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='medium' onClick={TextSize}> M </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='large' onClick={TextSize}> L </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md' name='extraLarge' onClick={TextSize}> XL </button>
                </div>

                <div className='flex justify-center items-center gap-8'>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md drawFont'> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-sans'> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-serif'> Aa </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md font-mono'> Aa </button>
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
