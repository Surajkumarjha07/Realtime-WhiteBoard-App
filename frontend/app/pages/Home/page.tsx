"use client"
import Sidebar from '@/app/components/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import BottomBar from '@/app/components/BottomBar'

type input = {
  id: number,
  x: number,
  y: number,
  text: string,
  textColor: string
}

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [inputs, setInputs] = useState<input[]>([]);
  const [textColor, setTextColor] = useState('text-black')

  useEffect(() => {
    const handleCanvasClick = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const XPosition = e.clientX - rect.left;
        const YPosition = e.clientY - rect.top;

        setInputs((prev) => [
          ...prev,
          { id: prev.length + 1, x: XPosition, y: YPosition, text: '', textColor: textColor },
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

  const handleColor = (textColor: string) => {
    setTextColor(textColor);
  }

  const settingText = (e: React.ChangeEvent, id: number) => {
    let target = e.target as HTMLTextAreaElement;

    let updatedInputs = inputs.map(input => (
      input.id === id ?
        { ...input, text: target.value, textColor: textColor } : input
    ))
    setInputs(updatedInputs)
  };

  return (
    <>
      <section className='relative w-screen h-screen pr-10'>
        <Sidebar onSendData={handleColor} />
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
                fontSize: '2rem',
                outline: 'none',
                border: '1px solid black',
                backgroundColor: 'transparent'
              }}
              className={`${input.textColor} w-[${input.text?.length}px]`}
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
