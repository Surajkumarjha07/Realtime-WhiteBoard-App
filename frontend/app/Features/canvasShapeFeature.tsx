import React, { useEffect, useState } from 'react'
import input from '../Interfaces/input'
import canvasTextFeature from '../Interfaces/canvasTextFeatures'
import { useAppSelector } from '../Redux/hooks'
import shapeFeature from '../Interfaces/shapeFeature'

export default function canvasTextFeatures({ canvasRef, shapeType, shapeColor }: shapeFeature) {
  const [shapes, setShapes] = useState<shape[]>([])
  const functionality = useAppSelector(state => state.Functionality.functionality)

  useEffect(() => {
    const handleCanvasClick = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const XPosition = e.clientX - rect.left;
        const YPosition = e.clientY - rect.top;

        setShapes((prev) => [
          ...prev,
          { id: prev.length + 1, x: XPosition, y: YPosition, width: 100, height: 100, shapeColor: shapeColor, shapeType: shapeType },
        ]);
      }
    };

    const canvasElement = canvasRef.current;
    if (canvasElement && functionality === 'upArrow') {
      canvasElement.addEventListener("click", handleCanvasClick);
    }

    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener("click", handleCanvasClick);
      }
    };
  }, [functionality, shapeColor, shapeType])

  return { shapes };

}
