"use client"
import React, { useState } from 'react'
import BottomComponent from './bottomComponent'
import { useFunctionalityContext } from '../functionalityContext'
import TextBottomComponent from './textBottomComponent';
import NotesBottomComponent from './notesBottomComponent';

export default function Sidebar({ onSendData }: any) {
    const { functionality } = useFunctionalityContext();

    const textColor = (e: React.MouseEvent<HTMLButtonElement>) => {
        let target = e.target as HTMLButtonElement;        
        if (target.name) {
            onSendData(target.name);
        }
    }

    return (
        <>
            <aside className={`bg-white w-80 h-[68vh] shadow-md rounded-md absolute top-8 right-5 px-4 py-5 z-40 ${(functionality == "hand" || functionality == "eraser") ? 'hidden' : 'flex'} flex-col justify-between`}>
                <div className='flex justify-center gap-8 flex-wrap'>
                    <button className='bg-black rounded-full w-7 h-7' name='text-black' onClick={textColor} />
                    <button className='bg-gray-500 rounded-full w-7 h-7' name='text-gray-500' onClick={textColor} />
                    <button className='bg-purple-400 rounded-full w-7 h-7' name='text-purple-400' onClick={textColor} />
                    <button className='bg-purple-600 rounded-full w-7 h-7' name='text-purple-600' onClick={textColor} />
                    <button className='bg-blue-600 rounded-full w-7 h-7' name='text-blue-600' onClick={textColor} />
                    <button className='bg-blue-400 rounded-full w-7 h-7' name='text-blue-400' onClick={textColor} />
                    <button className='bg-yellow-400 rounded-full w-7 h-7' name='text-yellow-400' onClick={textColor} />
                    <button className='bg-orange-600 rounded-full w-7 h-7' name='text-orange-600' onClick={textColor} />
                    <button className='bg-green-600 rounded-full w-7 h-7' name='text-green-600' onClick={textColor} />
                    <button className='bg-green-400 rounded-full w-7 h-7' name='text-green-400' onClick={textColor} />
                    <button className='bg-red-400 rounded-full w-7 h-7' name='text-red-400' onClick={textColor} />
                    <button className='bg-red-600 rounded-full w-7 h-7' name='text-red-600' onClick={textColor} />
                    <button className='bg-pink-400 rounded-full w-7 h-7' name='text-pink-400' onClick={textColor} />
                    <button className='bg-pink-600 rounded-full w-7 h-7' name='text-pink-600' onClick={textColor} />
                    <button className='bg-lime-500 rounded-full w-7 h-7' name='text-lime-500' onClick={textColor} />
                    <button className='bg-cyan-600 rounded-full w-7 h-7' name='text-cyan-600' onClick={textColor} />
                    <button className='bg-cyan-400 rounded-full w-7 h-7' name='text-cyan-400' onClick={textColor} />
                    <button className='bg-indigo-500 rounded-full w-7 h-7' name='text-indigo-500' onClick={textColor} />
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
