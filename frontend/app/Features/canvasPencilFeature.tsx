import React, { useCallback, useEffect, useState } from 'react'
import pencilFeature from '../Interfaces/pencilFeature'
import { useAppSelector } from '../Redux/hooks'
import { HtmlContext } from 'next/dist/server/route-modules/pages/vendored/contexts/entrypoints'

export default function canvasPencilFeature({ canvasRef }: pencilFeature) {
  const functionality = useAppSelector(state => state.Functionality.functionality)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [endY, setEndY] = useState<number>(0);
  const [endX, setEndX] = useState<number>(0);
  const [isDrawing, setIsDrawing] = useState<boolean>(false)

  useEffect(() => {
    if (canvasRef.current) {
      let ctx = canvasRef.current.getContext('2d');
      canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
      canvasRef.current.height = window.innerWidth * window.devicePixelRatio;

      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
      setCtx(ctx)
      // canvasRef.current.style.width = `${window.innerWidth}px`;
      // canvasRef.current.style.height = `${window.innerHeight}px`;
    }

    const DrawingStart = (e: MouseEvent) => {
      setIsDrawing(true);
      if (canvasRef.current) {
        let rect = canvasRef.current.getBoundingClientRect();
        let XPosition = e.clientX - rect!.left;
        let YPosition = e.clientY - rect!.top;
        setStartX(XPosition)
        setStartY(YPosition)
      }
    }

    const DrawingEnd = () => {
      setIsDrawing(false);
    }

    let canvasElement = canvasRef.current;
    if (canvasElement && functionality === 'pencil') {
      canvasElement.addEventListener("mousedown", DrawingStart)
      canvasElement.addEventListener("mousemove", DrawingLine)
      canvasElement.addEventListener("mouseup", DrawingEnd);
    }

    return () => {
      canvasRef.current?.removeEventListener("mousedown", DrawingStart)
      canvasRef.current?.removeEventListener("mousemove", DrawingLine)
      canvasRef.current?.removeEventListener("mouseup",DrawingEnd)
    }
  }, [functionality, isDrawing, ctx])

  const DrawingLine = useCallback((e: MouseEvent) => {
    if (canvasRef.current) {
      let rect = canvasRef.current.getBoundingClientRect();
      let XPosition = e.clientX - rect!.left;
      let YPosition = e.clientY - rect!.top;
      setEndX(XPosition)
      setEndY(YPosition);
      console.log(XPosition, YPosition);

      if (ctx && isDrawing) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(XPosition, YPosition)
        ctx.stroke();
      }
    }
  }, [startX, startY, endX, endY, ctx, isDrawing])

  return {}
}
