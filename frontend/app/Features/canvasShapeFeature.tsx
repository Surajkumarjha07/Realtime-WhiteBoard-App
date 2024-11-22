import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../Redux/hooks'
import shapeFeature from '../Interfaces/shapeFeature';

export default function canvasShapeFeature({ canvasRef, shapeColor }: shapeFeature) {
  const functionality = useAppSelector(state => state.Functionality.functionality)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const startXRef = useRef(0)
  const startYRef = useRef(0)
  const [isDrawing, setIsDrawing] = useState<boolean>(false)
  const [shapes, setShapes] = useState()

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
      if (canvasRef.current) {
        let rect = canvasRef.current.getBoundingClientRect();
        startXRef.current = e.clientX - rect!.left;
        startYRef.current = e.clientY - rect!.top;
        console.log("startX: ", startXRef.current, "startY: ", startYRef.current);
        setIsDrawing(true);
      }
    }

    const DrawingEnd = () => {
      setIsDrawing(false);
    }

    let canvasElement = canvasRef.current;
    if (canvasElement && functionality === 'upArrow') {
      canvasElement.addEventListener("mousedown", DrawingStart)
      canvasElement.addEventListener("mousemove", DrawingLine)
      canvasElement.addEventListener("mouseup", DrawingEnd);
    }

    return () => {
      canvasRef.current?.removeEventListener("mousedown", DrawingStart)
      canvasRef.current?.removeEventListener("mousemove", DrawingLine)
      canvasRef.current?.removeEventListener("mouseup", DrawingEnd)
    }
  }, [functionality, isDrawing, ctx])

  const DrawingLine = useCallback((e: MouseEvent) => {
    if (canvasRef.current) {
      let rect = canvasRef.current.getBoundingClientRect();
      let XPosition = e.clientX - rect!.left;
      let YPosition = e.clientY - rect!.top;
      let width = XPosition - startXRef.current;
      let height = YPosition - startYRef.current;

      if (ctx && isDrawing) {
        ctx.fillStyle = 'blue'
        ctx.fillRect(startXRef.current, startYRef.current, width, height);
      }
    }
  }, [ctx, isDrawing])

  return {shapes}
}
