import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../Redux/hooks'
import shapeFeature from '../Interfaces/shapeFeature'

export default function canvasTextFeatures({ canvasRef, shapeType, shapeColor, patternType, borderType, opacity }: shapeFeature) {
  const [shapes, setShapes] = useState<shape[]>([])
  const functionality = useAppSelector(state => state.Functionality.functionality)
  const isMoving = useRef(false);
  const shapeId = useRef(0);
  const XPos = useRef(0);
  const YPos = useRef(0);

  const handleClick = useCallback((e: MouseEvent | React.MouseEvent, id: number) => {
    if (functionality === 'hand') {
      shapeId.current = id;
      let shape = shapes.find(shape => shape.id === id);
      if (shape) {
        XPos.current = e.clientX - shape.x;
        YPos.current = e.clientY - shape.y;
      }
      isMoving.current = true;
    }
  }, [shapes, functionality])

  const handleMove = useCallback((e: MouseEvent | React.MouseEvent) => {
    if (isMoving.current) {
      let XPosition = e.clientX - XPos.current;
      let YPosition = e.clientY - YPos.current;

      const updatedShapes = shapes.map(shape =>
        shape.id === shapeId.current ?
          { ...shape, x: XPosition, y: YPosition } : shape
      )
      setShapes(updatedShapes);
    }
  }, [shapes, isMoving.current])

  const handleStop = useCallback(() => {
    isMoving.current = false;
  }, [])

  useEffect(() => {
    const handleCanvasClick = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const XPosition = e.clientX - rect.left;
        const YPosition = e.clientY - rect.top;

        setShapes((prev) => [
          ...prev,
          { id: prev.length + 1, x: XPosition, y: YPosition, width: 100, height: 100, shapeColor: shapeColor, shapeType: shapeType, patternType: patternType, borderType: borderType, opacity: opacity },
        ]);
      }
    };

    const canvasElement = canvasRef.current;
    if (canvasElement && (functionality === 'upArrow' || functionality === 'shapes')) {
      canvasElement.addEventListener("click", handleCanvasClick);
    }

    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener("click", handleCanvasClick);
      }
    };
  }, [functionality, handleClick, shapeColor, shapeType, patternType, borderType, opacity])

  return { shapes, handleClick, handleMove, handleStop };

}
