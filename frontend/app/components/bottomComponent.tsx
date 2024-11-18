import React from 'react'
import Image from 'next/image'

export default function BottomComponent() {
    return (
        <>
            <div className='flex flex-col justify-between gap-1'>
                <div className='flex justify-center items-center gap-8'>
                    <button className='hover:bg-gray-200 p-2 rounded-md'>
                        <Image src={'/Images/square1.png'} alt='square' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='hover:bg-gray-200 p-2 rounded-md'>
                        <Image src={'/Images/square2.png'} alt='square' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='hover:bg-gray-200 p-2 rounded-md'>
                        <Image src={'/Images/square3.png'} alt='square' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='hover:bg-gray-200 p-2 rounded-md'>
                        <Image src={'/Images/square4.png'} alt='square' height={100} width={100} className='w-6 h-6' />
                    </button>
                </div>

                <div className='flex justify-center items-center gap-8'>
                    <button className='hover:bg-gray-200 p-2 rounded-md'>
                        <Image src={'/Images/boldCircle.png'} alt='square' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='hover:bg-gray-200 p-2 rounded-md'>
                        <Image src={'/Images/tracedCircle.png'} alt='square' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='hover:bg-gray-200 p-2 rounded-md'>
                        <Image src={'/Images/dottedCircle.png'} alt='square' height={100} width={100} className='w-6 h-6' />
                    </button>
                    <button className='hover:bg-gray-200 p-2 rounded-md'>
                        <Image src={'/Images/circle.png'} alt='square' height={100} width={100} className='w-6 h-6' />
                    </button>
                </div>

                <div className='flex justify-center items-center gap-8'>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'> S </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'> M </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'> L </button>
                    <button className='text-2xl text-black font-semibold hover:bg-gray-200 py-1 px-2 rounded-md'> XL </button>
                </div>
            </div>
        </>
    )
}
