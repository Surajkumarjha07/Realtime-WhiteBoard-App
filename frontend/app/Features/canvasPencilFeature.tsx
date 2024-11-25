import React, { useCallback, useEffect, useRef, useState } from 'react'
import pencilFeature from '../Interfaces/pencilFeature'
import { useAppSelector } from '../Redux/hooks'

export default function canvasPencilFeature({ canvasRef }: pencilFeature) {
  const functionality = useAppSelector(state => state.Functionality.functionality)


  useEffect(() => {
    if (canvasRef.current) {
      let ctx = canvasRef.current.getContext('2d');
      canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
      canvasRef.current.height = window.innerWidth * window.devicePixelRatio;

      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
      // canvasRef.current.style.width = `${window.innerWidth}px`;
      // canvasRef.current.style.height = `${window.innerHeight}px`;
    }

    const handleClick = (e: MouseEvent) => {

    }

    const handleMove = (e: MouseEvent) => {

    }

    const handleStop = () => {

    }

    return () => {

    }

  }, [functionality])

  return {}
}
