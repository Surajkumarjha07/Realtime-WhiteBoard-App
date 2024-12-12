"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setFunctionality } from '../Redux/slices/functionality';
import Shapes from './shapes';
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import { setImage } from '../Redux/slices/images';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { setEraser } from '../Redux/slices/Eraser';

export default function BottomBar() {
    const dispatch = useAppDispatch();
    const shapeType = useAppSelector(state => state.ShapeFeatures.shapeType)
    const functionality = useAppSelector(state => state.Functionality.functionality);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const handleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
        let target = e.target as HTMLButtonElement;
        dispatch(setFunctionality(target.name))
        if (target.name === 'eraser') {
            dispatch(setEraser(true));
        }
        else {
            dispatch(setEraser(false));
        }
    }

    const handleImage = (e: React.ChangeEvent) => {
        dispatch(setFunctionality('images'))
        let target = e.target as HTMLInputElement;
        let file = target.files![0];
        if (file) {
            let reader = new FileReader();

            reader.onload = function (e) {
                let result = e.target!.result;
                if (typeof result === 'string') {
                    imageRef.current!.src = result;
                    imageRef.current!.style.display = 'block';
                }
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            {
                functionality === 'images' &&
                <Image src={''} alt='' height={100} width={100} className='absolute top-52 left-52 w-[25rem] h-[20rem] bg-white border-none outline-none' ref={imageRef} />
            }
            <section className='w-2/4 h-16 bg-white rounded-md shadow-md shadow-gray-400 absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-evenly items-center gap-8 z-40'>
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
                    {/* <input type="file" name="imageFile" onChange={handleImage} /> */}
                    <PhotoOutlinedIcon className={functionality !== "images" ? 'text-black pointer-events-none' : 'text-white pointer-events-none'} />
                </button>
                <button className={functionality === "shapes" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='shapes' onClick={handleActive}>
                    {
                        shapeType === "rectangle" ? <RectangleOutlinedIcon className={`${functionality === 'shapes' ? 'text-white' : 'text-black'} pointer-events-none`} /> : shapeType === "circle" ? <CircleOutlinedIcon className={`${functionality === 'shapes' ? 'text-white' : 'text-black'} pointer-events-none`} /> : shapeType === "triangle" ? <ChangeHistoryOutlinedIcon className={`${functionality === 'shapes' ? 'text-white' : 'text-black'} pointer-events-none`} /> : <HexagonOutlinedIcon className={`${functionality === 'shapes' ? 'text-white' : 'text-black'} pointer-events-none`} />
                    }
                </button>

                <div className='relative'>
                    {
                        functionality === "upArrow" ?
                            <Shapes /> : ''
                    }
                    <button className={functionality === "upArrow" ? 'bg-blue-500 p-2 rounded-md' : 'hover:bg-blue-200 p-2 rounded-md'} name='upArrow' onClick={handleActive}>
                        <KeyboardArrowUpOutlinedIcon className={functionality !== "upArrow" ? 'text-black pointer-events-none' : 'text-white pointer-events-none'} />
                    </button>
                </div>
            </section>
        </>
    )
}
