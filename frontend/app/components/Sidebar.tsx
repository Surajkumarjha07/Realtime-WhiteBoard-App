"use client"
import React from 'react'
import BottomComponent from './bottomComponent'
import TextBottomComponent from './textBottomComponent';
import NotesBottomComponent from './notesBottomComponent';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setTextColor } from '../Redux/slices/textFeatures';
import { setNoteBackgroundColor } from '../Redux/slices/noteFeatures';

export default function Sidebar() {
    const dispatch = useAppDispatch();
    const functionality = useAppSelector(state => state.Functionality.functionality);

    const handleColorChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        let target = e.target as HTMLButtonElement;
        dispatch(setTextColor(target.name));
        dispatch(setNoteBackgroundColor(target.name))
    }

    return (
        <>
            <aside className={`bg-white w-80 h-[68vh] shadow-md rounded-md absolute top-8 right-5 px-4 py-5 z-40 ${(functionality == "hand" || functionality == "eraser") ? 'hidden' : 'flex'} flex-col justify-between`}>
                <div className='flex justify-center gap-8 flex-wrap'>
                    <button className='bg-black rounded-full w-7 h-7' name='black' onClick={handleColorChange}/>
                    <button className='bg-gray-500 rounded-full w-7 h-7' name='gray-500' onClick={handleColorChange}/>
                    <button className='bg-purple-400 rounded-full w-7 h-7' name='purple-400' onClick={handleColorChange}/>
                    <button className='bg-purple-600 rounded-full w-7 h-7' name='purple-600' onClick={handleColorChange}/>
                    <button className='bg-blue-600 rounded-full w-7 h-7' name='blue-600' onClick={handleColorChange}/>
                    <button className='bg-blue-400 rounded-full w-7 h-7' name='blue-400' onClick={handleColorChange}/>
                    <button className='bg-yellow-400 rounded-full w-7 h-7' name='yellow-400' onClick={handleColorChange}/>
                    <button className='bg-orange-600 rounded-full w-7 h-7' name='orange-600' onClick={handleColorChange}/>
                    <button className='bg-green-600 rounded-full w-7 h-7' name='green-600' onClick={handleColorChange}/>
                    <button className='bg-green-400 rounded-full w-7 h-7' name='green-400' onClick={handleColorChange}/>
                    <button className='bg-red-400 rounded-full w-7 h-7' name='red-400' onClick={handleColorChange}/>
                    <button className='bg-red-600 rounded-full w-7 h-7' name='red-600' onClick={handleColorChange}/>
                    <button className='bg-pink-400 rounded-full w-7 h-7' name='pink-400' onClick={handleColorChange}/>
                    <button className='bg-pink-600 rounded-full w-7 h-7' name='pink-600' onClick={handleColorChange}/>
                    <button className='bg-lime-500 rounded-full w-7 h-7' name='lime-500' onClick={handleColorChange}/>
                    <button className='bg-cyan-600 rounded-full w-7 h-7' name='cyan-600' onClick={handleColorChange}/>
                    <button className='bg-cyan-400 rounded-full w-7 h-7' name='cyan-400' onClick={handleColorChange}/>
                    <button className='bg-indigo-500 rounded-full w-7 h-7' name='indigo-500' onClick={handleColorChange}/>
                </div>

                <div>
                    <input type="range" min={1} max={100} defaultValue={50} name="thickness" className='w-full' />
                </div>

                <hr />

                {
                    functionality === "text" ?
                        <TextBottomComponent /> :
                        functionality === "notes" ?
                            <NotesBottomComponent /> :
                            <BottomComponent />
                }

            </aside>
        </>
    )
}
