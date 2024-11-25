import React, { useEffect, useRef, useState } from 'react'
import canvasArrow from '../Interfaces/canvasArrow'
import { useAppSelector } from '../Redux/hooks'
import arrow from '../Interfaces/arrow';

export default function canvasArrowFeatures({ canvasRef }: canvasArrow) {
    const functionality = useAppSelector(state => state.Functionality.functionality);
    const isDrawing = useRef(false);
    const startX = useRef(0)
    const startY = useRef(0)
    const height = useRef(0)
    const [arrows, setArrows] = useState<arrow[]>([])

    useEffect(() => {
        let rect = canvasRef.current?.getBoundingClientRect();

        const handleClick = (e: MouseEvent) => {
            if (canvasRef.current) {
                let XPosition = e.clientX;
                let YPosition = e.clientY;
                console.log(XPosition, YPosition);
                startX.current = e.clientX;
                startY.current = e.clientY;
                isDrawing.current = true;
                console.log("start: ", isDrawing);
            }
        }

        const handleMove = (e: MouseEvent) => {
            if (isDrawing.current) {
                let XPosition = e.clientX;
                let YPosition = e.clientY;
                console.log("XPosition: ", XPosition, "Yposition: ", YPosition);
                height.current = YPosition - startY.current;
                const rotate = e.clientX * 100 / (rect!.right);
                console.log(rotate);

                
            }
        }

        const handleStop = () => {
            setArrows(prev => [
                ...prev,
                { id: prev.length + 1, x: startX.current, y: startY.current, width: 5, height: height.current, arrowColor: 'black', rotate: 0 }
            ])
            isDrawing.current = false 
            console.log("stop: ", isDrawing);
        }

        let canvasElement = canvasRef.current;
        if (canvasElement && functionality === 'upRightArrow') {
            canvasElement.addEventListener('mousedown', handleClick)
            if (isDrawing) {
                canvasElement.addEventListener('mousemove', handleMove)
            }
            canvasElement.addEventListener('mouseup', handleStop)
        }

        return () => {
            if (canvasElement) {
                canvasElement.removeEventListener('mousedown', handleClick)
            }
        }
    }, [functionality, isDrawing])


    return { arrows }
}
