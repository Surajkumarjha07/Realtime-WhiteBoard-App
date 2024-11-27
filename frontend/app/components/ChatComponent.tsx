import React, { useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SendIcon from '@mui/icons-material/Send';
import { useAppSelector, useAppDispatch } from '../Redux/hooks';
import { setFunctionality } from '../Redux/slices/functionality';
import { setToggle } from '../Redux/slices/toggle';

export default function ChatComponent() {
    const functionality = useAppSelector(state => state.Functionality.functionality);
    const dispatch = useAppDispatch();
    const toggle = useAppSelector(state => state.Toggle.toggle);

    const closeSidebar = () => {
        dispatch(setFunctionality('document'))
        dispatch(setToggle(false));
    }

    const functionalities = ['chat', 'users', 'arrow', 'hand', 'pencil', 'eraser', 'upRightArrow', 'text', 'notes', 'images', 'shapes', 'upArrow']

    return (
        <>
            <aside className={`${(functionalities.includes(functionality) && toggle) ? 'opacity-100 h-[32rem] z-50' : 'opacity-0 h-0 -z-10'} w-80 bg-white shadow-md shadow-gray-400 absolute top-28 left-5 flex flex-col rounded-2xl overflow-hidden transition-all duration-500`}>
                <div className='flex justify-between items-center h-[12%] bg-blue-100 px-4 rounded-b-3xl border-b-2 border-b-gray-800'>
                    <p className='text-gray-800 font-medium text-xl'> {functionality !== 'users' ? 'Messages' : 'Peoples'} </p>
                    <button onClick={closeSidebar}>
                        <CloseOutlinedIcon className='text-gray-800' />
                    </button>
                </div>

                <div className='w-full flex-grow px-4'>

                </div>

                <div className="flex items-center h-[15%] px-4">
                    <div className="relative w-full overflow-hidden">
                        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 w-12 h-4/5 rounded-full">
                            <SendIcon className="text-gray-800" />
                        </button>
                        <input
                            type="text"
                            className={`${(functionality === 'users' || functionality === 'document') ? 'hidden' : 'visible'} w-full h-12 pr-14 pl-6 outline-none border-2 border-gray-500 text-black py-2 rounded-full placeholder:text-gray-600 placeholder:font-medium bg-gray-100`}
                            placeholder="Enter message here"
                        />
                    </div>
                </div>

            </aside>
        </>
    )
}
