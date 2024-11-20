"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setFunctionality } from '../Redux/slices/functionality';

export default function BottomBar() {
    const dispatch = useAppDispatch();
    const functionality = useAppSelector(state => state.Functionality.functionality);

    const handleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
        let target = e.target as HTMLButtonElement;        
        dispatch(setFunctionality(target.name))
    }

    return (
        <>
            <section className='w-2/4 h-16 bg-white rounded-md shadow-md absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-evenly items-center gap-8'>
                <button className={functionality === "arrow" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='arrow' onClick={handleActive}>
                    <NearMeOutlinedIcon className={functionality !== "arrow" ? 'text-black pointer-events-none' : 'text-white pointer-events-none'} />
                </button>
                <button className={functionality === "hand" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='hand' onClick={handleActive}>
                    <BackHandOutlinedIcon className={functionality !== "hand" ? 'text-black pointer-events-none' : 'text-white pointer-events-none'} />
                </button>
                <button className={functionality === "pencil" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='pencil' onClick={handleActive}>
                    <CreateOutlinedIcon className={functionality !== "pencil" ? 'text-black pointer-events-none' : 'text-white pointer-events-none'} />
                </button>
                <button className={functionality === "eraser" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='eraser' onClick={handleActive}>
                    {
                        functionality === "eraser" ?
                        <Image src={'/Images/eraser2.png'} alt='Eraser' height={100} width={100} className='w-6 h-6 pointer-events-none' /> :
                        <Image src={'/Images/eraser.png'} alt='Eraser' height={100} width={100} className='w-6 h-6 pointer-events-none' /> 
                    }
                </button>
                <button className={functionality === "upRightArrow" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='upRightArrow' onClick={handleActive}>
                    <ArrowOutwardOutlinedIcon className={functionality !== "upRightArrow" ? 'text-black pointer-events-none' : 'text-white pointer-events-none'} />
                </button>
                <button className={functionality === "text" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='text' onClick={handleActive}>
                    <FormatItalicOutlinedIcon className={functionality !== "text" ? 'text-black pointer-events-none' : 'text-white pointer-events-none'} />
                </button>
                <button className={functionality === "notes" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='notes' onClick={handleActive}>
                    <StickyNote2OutlinedIcon className={functionality !== "notes" ? 'text-black pointer-events-none' : 'text-white pointer-events-none'} />
                </button>
                <button className={functionality === "images" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='images' onClick={handleActive}>
                    <PhotoOutlinedIcon className={functionality !== "images" ? 'text-black pointer-events-none' : 'text-white pointer-events-none'} />
                </button>
                <button className={functionality === "frame" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='frame' onClick={handleActive}>
                    <CropFreeOutlinedIcon className={functionality !== "frame" ? 'text-black pointer-events-none' : 'text-white pointer-events-none'} />
                </button>
                <button className={functionality === "upArrow" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='upArrow' onClick={handleActive}>
                    <KeyboardArrowUpOutlinedIcon className={functionality !== "upArrow" ? 'text-black pointer-events-none' : 'text-white pointer-events-none'} />
                </button>
            </section>
        </>
    )
}
