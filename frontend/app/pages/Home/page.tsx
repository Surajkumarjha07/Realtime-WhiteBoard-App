"use client"
import Sidebar from '@/app/components/Sidebar'
import React, { useRef } from 'react'
import BottomBar from '@/app/components/BottomBar'
import { useAppSelector } from '@/app/Redux/hooks'
import canvasTextFeatures from '@/app/Features/canvasTextFeatures'
import StickyNotesFeatures from '@/app/Features/stickyNotesFeatures'

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textColor = useAppSelector(state => state.TextFeatures.textColor);
  const functionality = useAppSelector(state => state.Functionality.functionality);
  const textSize = useAppSelector(state => state.TextFeatures.textSize);
  const fontFamily = useAppSelector(state => state.TextFeatures.fontFamily);
  const noteTextSize = useAppSelector(state => state.NoteFeatures.noteTextSize);
  const noteFontFamily = useAppSelector(state => state.NoteFeatures.noteFontFamily);
  const noteBackgroundColor = useAppSelector(state => state.NoteFeatures.noteBackgroundColor);

  const { settingText, removeInput, inputs } = canvasTextFeatures({
    canvasRef,
    textColor,
    textSize,
    fontFamily
  })

  const { notes, removeNote, settingNoteText } = StickyNotesFeatures({
    canvasRef,
    noteTextSize,
    noteFontFamily,
    noteBackgroundColor
  })

  return (
    <>
      <section className='relative w-screen h-screen pr-10'>
        <Sidebar />
        <canvas className={`bg-white rounded-md shadow-md w-screen h-screen ${(functionality === "text" || functionality === "notes") ? 'cursor-crosshair' : 'cursor-default'}`} ref={canvasRef}>
        </canvas>

        {
         notes.map((note) => (
          <textarea key={note.id} cols={15} rows={5} onBlur={removeNote}
          style={{
            // border: '1px solid black',
            position: 'absolute',
            top: `${note.y}px`,
            left: `${note.x}px`,
            padding: '4px 8px',
          }} 
          autoFocus
          className={`text-${note.noteTextSize} font-${note.noteFontFamily} bg-${note.noteBackgroundColor} rounded-md outline-none`}
          onChange={(e) => settingNoteText(e, note.id)}
          />
         )) 
        }

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
              className={`text-${input.textColor} text-${input.textSize} font-${input.fontFamily}`}
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
