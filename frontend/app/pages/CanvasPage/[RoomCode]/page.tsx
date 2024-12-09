"use client"
import Sidebar from '@/app/components/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import BottomBar from '@/app/components/BottomBar'
import { useAppSelector } from '@/app/Redux/hooks'
import canvasTextFeatures from '@/app/Features/canvasTextFeatures'
import StickyNotesFeatures from '@/app/Features/stickyNotesFeatures'
import { bgColorMap, borderColorMap, noteTextBrightnessMap, textBrightnessMap, textColorMap } from '../../../ObjectMapping'
import canvasShapeFeature from '@/app/Features/canvasShapeFeature'
import canvasArrowFeatures from '@/app/Features/canvasArrowFeatures'
import canvasPencilFeature from '@/app/Features/canvasPencilFeature'
import UserFeatures from '@/app/components/UserFeatures'
import ChatComponent from '@/app/components/ChatComponent'
import { useParams } from 'next/navigation'
import { useSocket } from '@/app/socketContext'

export default function CanvasPage() {
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
  const params = useParams();
  const socket = useSocket(); 

  const { settingText, removeInput, inputs, handleTextClick, handleTextMove, handleTextStop, handleTextEraser } = canvasTextFeatures({
    canvasRef,
    textColor,
    textSize,
    fontFamily,
    textBrightness
  })

  const { notes, removeNote, settingNoteText, handleNotesClick, handleNotesMove, handleNotesStop, handleNotesEraser } = StickyNotesFeatures({
    canvasRef,
    noteTextSize,
    noteFontFamily,
    noteBackgroundColor,
    noteTextBrightness
  })

  const { shapes, handleClick, handleMove, handleStop, handleEraser, handleShapeSelected, handleShapeResizeStart, handleHeightResize, handleWidthResize, handleShapeResizingStop } = canvasShapeFeature({
    canvasRef,
    shapeColor,
    shapeType,
    patternType,
    borderType,
    opacity
  })

  const { } = canvasArrowFeatures({ canvasRef })

  const { } = canvasPencilFeature({ canvasRef })

  return (
    <>
      <section className='relative w-screen h-screen pr-10'>
        <UserFeatures />
        <ChatComponent />
        <Sidebar />
        <canvas className={`bg-white rounded-md shadow-md w-screen h-screen ${functionality === 'eraser' ? 'cursor-auto' : 'cursor-crosshair'}`} ref={canvasRef}>
        </canvas>

        {/* {
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
        } */}

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
              }}
              onMouseDown={(e) => handleClick(e, shape.id)} onMouseMove={(e) => handleMove(e)} onMouseUp={handleStop}
              onMouseOver={(e) => handleEraser(e, shape.id)}
            /> :

              shape.shapeType === "triangle" ? <div key={shape.id}
                style={{
                  position: 'absolute',
                  top: `${shape.y}px`,
                  left: `${shape.x}px`,
                  borderLeft: '100px solid transparent',
                  borderRight: '100px solid transparent',
                  borderBottom: '200px solid green',
                  cursor: `${functionality === 'hand' ? 'grab' : 'auto'}`
                }}
                onMouseDown={(e) => handleClick(e, shape.id)} onMouseMove={(e) => handleMove(e)} onMouseUp={handleStop}
                onMouseOver={(e) => handleEraser(e, shape.id)}
              /> :

                shape.shapeType === "circle" ?
                  <div key={shape.id}
                    style={{
                      position: 'absolute',
                      top: `${shape.y}px`,
                      left: `${shape.x}px`,
                      width: `${shape.width}px`,
                      height: `${shape.height}px`
                    }}
                    className={`${textBrightnessMap.get(shape.opacity)} ${borderColorMap.get(shape.shapeColor)} rounded-full ${shape.patternType === 'transparent' ? 'bg-transparent' : shape.patternType === 'opaque' ? 'bg-white' : shape.patternType === 'coloured' ? `${bgColorMap.get(shape.shapeColor)} bg-opacity-60` : 'bg-gradient-to-b from-red-600 via-pink-600 to-purple-600'} ${shape.borderType === 'roundedBorder' ? 'rounded-full' : shape.borderType === 'dashedBorder' ? 'border-dashed' : shape.borderType === 'solidBorder' ? 'rounded-full' : 'border-dotted'} ${functionality === 'hand' ? 'hover:cursor-grab' : 'cursor-auto'} ${(shape.resize && functionality === 'arrow') ? 'border-2' : 'border-4'}`}
                    onMouseDown={(e) => handleClick(e, shape.id)} onMouseMove={(e) => handleMove(e)} onMouseUp={handleStop}
                    onMouseOver={(e) => handleEraser(e, shape.id)} onClick={(e) => handleShapeSelected(e, shape.id)}
                  >
                    <div className={`border border-blue-400 bg-blue-100 w-3 h-3 absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 ${(shape.resize && functionality === 'arrow') ? 'visible' : 'hidden'} cursor-e-resize`} onMouseDown={handleShapeResizeStart} onMouseMove={handleWidthResize} onMouseUp={handleShapeResizingStop} />
                    <div className={`border border-blue-400 bg-blue-100 w-3 h-3 absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 ${(shape.resize && functionality === 'arrow') ? 'visible' : 'hidden'} cursor-ns-resize`} onMouseDown={handleShapeResizeStart} onMouseMove={handleHeightResize} onMouseUp={handleShapeResizingStop} />
                  </div> :

                  <div key={shape.id}
                    style={{
                      position: 'absolute',
                      top: `${shape.y}px`,
                      left: `${shape.x}px`,
                      width: `${shape.width}px`,
                      height: `${shape.height}px`
                    }}
                    className={`${textBrightnessMap.get(shape.opacity)} ${borderColorMap.get(shape.shapeColor)} ${shape.patternType === 'transparent' ? 'bg-transparent' : shape.patternType === 'opaque' ? 'bg-white' : shape.patternType === 'coloured' ? `${bgColorMap.get(shape.shapeColor)} bg-opacity-60` : 'bg-gradient-to-b from-red-600 via-pink-600 to-purple-600'} ${shape.borderType === 'roundedBorder' ? 'rounded-md' : shape.borderType === 'dashedBorder' ? 'border-dashed' : shape.borderType === 'solidBorder' ? 'rounded-none' : 'border-dotted'} ${functionality === 'hand' ? 'hover:cursor-grab' : 'cursor-auto'} ${(shape.resize && functionality === 'arrow') ? 'border-2' : 'border-4'}`}
                    onMouseDown={(e) => handleClick(e, shape.id)} onMouseMove={(e) => handleMove(e)} onMouseUp={handleStop}
                    onMouseOver={(e) => handleEraser(e, shape.id)} onClick={(e) => handleShapeSelected(e, shape.id)}
                  >
                    <div className={`border border-blue-400 bg-blue-100 w-6 h-3 absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 ${(shape.resize && functionality === 'arrow') ? 'visible' : 'hidden'} cursor-e-resize`} onMouseDown={handleShapeResizeStart} onMouseMove={handleWidthResize} onMouseUp={handleShapeResizingStop} />
                    <div className={`border border-blue-400 bg-blue-100 w-3 h-6 absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 ${(shape.resize && functionality === 'arrow') ? 'visible' : 'hidden'} cursor-ns-resize`} onMouseDown={handleShapeResizeStart} onMouseMove={handleHeightResize} onMouseUp={handleShapeResizingStop} />
                  </div>
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
              className={`${note.noteTextSize} ${note.noteFontFamily} ${bgColorMap.get(note.noteBackgroundColor)} ${noteTextBrightnessMap.get(note.noteTextBrightness)} rounded-md outline-none resize-none text-center text-black ${functionality === 'hand' ? 'hover:cursor-grab' : 'cursor-auto'}`}
              onChange={(e) => settingNoteText(e, note.id)}
              onMouseDown={(e) => handleNotesClick(e, note.id)} onMouseMove={(e) => handleNotesMove(e)} onMouseUp={handleNotesStop}
              onMouseOver={(e) => handleNotesEraser(e, note.id)}
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
              className={`${textColorMap.get(input.textColor)} ${input.textSize} ${textBrightnessMap.get(input.textBrightness)} ${functionality === 'hand' ? 'hover:cursor-grab' : 'cursor-auto'}`}
              autoFocus
              onChange={(e) => settingText(e, input.id)}
              onMouseDown={(e) => handleTextClick(e, input.id)} onMouseMove={(e) => handleTextMove(e)} onMouseUp={handleTextStop}
              onMouseOver={(e) => handleTextEraser(e, input.id)}
            />
          ))
        }
        <BottomBar />
      </section>
    </>
  )
}
