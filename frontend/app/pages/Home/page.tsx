"use client"
import Sidebar from '@/app/components/Sidebar'
import React, { useRef, useState } from 'react'
import BottomBar from '@/app/components/BottomBar'
import { useAppSelector } from '@/app/Redux/hooks'
import canvasTextFeatures from '@/app/Features/canvasTextFeatures'
import StickyNotesFeatures from '@/app/Features/stickyNotesFeatures'
import { bgColorMap, borderColorMap, noteTextBrightnessMap, textBrightnessMap, textColorMap } from '../../ObjectMapping'
import canvasShapeFeature from '@/app/Features/canvasShapeFeature'
import canvasArrowFeatures from '@/app/Features/canvasArrowFeatures'
import canvasPencilFeature from '@/app/Features/canvasPencilFeature'

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textColor = useAppSelector(state => state.TextFeatures.textColor);
  const functionality = useAppSelector(state => state.Functionality.functionality);
  const textSize = useAppSelector(state => state.TextFeatures.textSize);
  const fontFamily = useAppSelector(state => state.TextFeatures.fontFamily);
  const textBrightness = useAppSelector(state => state.TextFeatures.textBrightness);
  const noteTextSize = useAppSelector(state => state.NoteFeatures.noteTextSize);
  const noteFontFamily = useAppSelector(state => state.NoteFeatures.noteFontFamily);
  const noteBackgroundColor = useAppSelector(state => state.NoteFeatures.noteBackgroundColor);
  const noteTextBrightness = useAppSelector(state => state.NoteFeatures.noteTextBrightness);
  const shapeType = useAppSelector(state => state.ShapeFeatures.shapeType);
  const shapeColor = useAppSelector(state => state.ShapeFeatures.shapeColor);
  const patternType = useAppSelector(state => state.ShapeFeatures.patternType);
  const borderType = useAppSelector(state => state.ShapeFeatures.borderType);
  const opacity = useAppSelector(state => state.ShapeFeatures.opacity);

  const { settingText, removeInput, inputs } = canvasTextFeatures({
    canvasRef,
    textColor,
    textSize,
    fontFamily,
    textBrightness
  })

  const { notes, removeNote, settingNoteText } = StickyNotesFeatures({
    canvasRef,
    noteTextSize,
    noteFontFamily,
    noteBackgroundColor,
    noteTextBrightness
  })

  const { shapes } = canvasShapeFeature({
    canvasRef,
    shapeColor,
    shapeType,
    patternType,
    borderType,
    opacity
  })

  const { arrows } = canvasArrowFeatures({
    canvasRef
  })

  const { } = canvasPencilFeature({
    canvasRef
  })

  return (
    <>
      <section className='relative w-screen h-screen pr-10'>
        <Sidebar />
        <canvas className={`bg-white rounded-md shadow-md w-screen h-screen ${(functionality === "text" || functionality === "notes" || functionality === "upArrow") ? 'cursor-crosshair' : 'cursor-default'}`} ref={canvasRef}>
        </canvas>

        {
          arrows.map(arrow => (
            <div key={arrow.id}
              style={{
                position: 'absolute',
                top: `${arrow.y}px`,
                left: `${arrow.x}px`,
                width: `${arrow.width}px`,
                height: `${arrow.height}px`,
                backgroundColor: `${arrow.arrowColor}`,
                transform: `rotate(${arrow.rotate}deg)`
              }}
              className='rounded-md'
            />
          ))
        }

        {
          shapes.map(shape => (
            shape.shapeType === "hexagon" ? <div key={shape.id}
              style={{
                position: 'absolute',
                top: `${shape.y}px`,
                left: `${shape.x}px`,
                width: '150px',
                height: '150px',
                backgroundColor: 'transparent',
                border: '5px solid black',
                clipPath: 'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)'
              }} /> :

              shape.shapeType === "triangle" ? <div key={shape.id}
                style={{
                  position: 'absolute',
                  top: `${shape.y}px`,
                  left: `${shape.x}px`,
                  borderLeft: '100px solid transparent',
                  borderRight: '100px solid transparent',
                  borderBottom: '200px solid green'
                }} /> :

                <div key={shape.id}
                  style={{
                    position: 'absolute',
                    top: `${shape.y}px`,
                    left: `${shape.x}px`,
                  }}
                  className={`w-48 h-48 ${textBrightnessMap.get(shape.opacity)} ${borderColorMap.get(shape.shapeColor)} border-4 ${shape.shapeType === "circle" ? 'rounded-full' : 'rounded-md'} ${shape.patternType === 'transparent' ? 'bg-transparent' : shape.patternType === 'opaque' ? 'bg-white' : shape.patternType === 'coloured' ? `${bgColorMap.get(shape.shapeColor)} bg-opacity-60` : 'bg-gradient-to-b from-red-600 via-pink-600 to-purple-600'} ${shape.borderType === 'roundedBorder' ? 'rounded-md' : shape.borderType === 'dashedBorder' ? 'border-dashed' : shape.borderType === 'solidBorder' ? 'rounded-none' : 'border-dotted'}`} />
          ))
        }

        {
          notes.map((note) => (
            <textarea key={note.id} cols={15} rows={5} onBlur={removeNote}
              style={{
                // border: '1px solid black',
                position: 'absolute',
                top: `${note.y}px`,
                left: `${note.x}px`,
                padding: '8px 8px',
              }}
              autoFocus
              className={`${note.noteTextSize} ${note.noteFontFamily} ${bgColorMap.get(note.noteBackgroundColor)} ${noteTextBrightnessMap.get(note.noteTextBrightness)} rounded-md outline-none resize-none text-center text-black`}
              onChange={(e) => settingNoteText(e, note.id)}
            />
          ))
        }

        {
          inputs.map((input) => (
            <input key={input.id} type='text' onBlur={() => removeInput()}
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
              className={`${textColorMap.get(input.textColor)} ${input.textSize} ${textBrightnessMap.get(input.textBrightness)}`}
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
