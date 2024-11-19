"use client"
import Sidebar from '@/app/components/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import BottomBar from '@/app/components/BottomBar'
import { useAppSelector } from '@/app/Redux/hooks'
import input from '@/app/Interfaces/input'

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [inputs, setInputs] = useState<input[]>([]);
  const textColor = useAppSelector(state => state.TextColor.textColor);
  const textSize = useAppSelector(state => state.TextSize.textSize);
  const fontFamily = useAppSelector(state => state.FontFamily.fontFamily);
  
  useEffect(() => {
    const handleCanvasClick = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const XPosition = e.clientX - rect.left;
        const YPosition = e.clientY - rect.top;

        setInputs((prev) => [
          ...prev,
          { id: prev.length + 1, x: XPosition, y: YPosition, text: '', textColor: textColor, textSize: textSize, fontFamily: fontFamily },
        ]);
      }
    };

    const canvasElement = canvasRef.current;
    if (canvasElement) {
      canvasElement.addEventListener("click", handleCanvasClick);
    }

    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener("click", handleCanvasClick);
      }
    };
  }, [])

  const removeInput = (id: number) => {
    let filterArr = inputs.filter(input => input.id === id);
    let filterArr2 = inputs.filter(input => input.id !== id);
    if (filterArr[0].text?.length === 0) {
      setInputs(filterArr2);
    }
  }

  const settingText = (e: React.ChangeEvent, id: number) => {
    let target = e.target as HTMLInputElement;

    let updatedInputs = inputs.map(input => (
      input.id === id ?
        { ...input, text: target.value, textColor: textColor, textSize: textSize, fontFamily: fontFamily } : input
    ))
    setInputs(updatedInputs)
  };

  return (
    <>
      <section className='relative w-screen h-screen pr-10'>
        <Sidebar />
        <canvas className='bg-white rounded-md shadow-md w-screen h-screen' ref={canvasRef}>
        </canvas>
        {
          inputs.map((input) => (
            <input key={input.id} type='text' onBlur={() => removeInput(input.id)}
              style={{
                position: "absolute",
                left: `${input.x}px`,
                top: `${input.y}px`,
                minHeight: '3rem',
                padding: '4px 8px',
                outline: 'none',
                // border: '1px solid black',
                backgroundColor: 'transparent',
                width: 'auto'
              }}
              className={`${input.textColor} ${input.textSize} ${input.fontFamily}`}
              autoFocus
              onChange={(e) => settingText(e, input.id)}
            />
          ))
        }
        <BottomBar />
      </section>
    </>
  )
}
