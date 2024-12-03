import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'
import shapeFeature from '../Interfaces/shapeFeature'
import { setResize } from '../Redux/slices/shapes'

export default function canvasTextFeatures({ canvasRef, shapeType, shapeColor, patternType, borderType, opacity }: shapeFeature) {
  const [shapes, setShapes] = useState<shape[]>([])
  const functionality = useAppSelector(state => state.Functionality.functionality)
  const isEraserOpen = useAppSelector(state => state.Eraser.isEraserOpen);
  const isMoving = useRef(false);
  const shapeId = useRef(0);
  const XPos = useRef(0);
  const YPos = useRef(0);
  const shapeRef = useRef<shape | undefined>(undefined)
  const isResizing = useRef(false)

  const handleShapeSelected= useCallback((e: React.MouseEvent | MouseEvent, id: number) => {
    shapeId.current = id;
    let shape = shapes.find(shape => shape.id === id);
    shapeRef.current = shape;
    let updatedShapes = shapes.map(shape =>
      (shape.id === id && !shape.resize) ?
        { ...shape, resize: true } : shape
    )
    setShapes(updatedShapes)
  }, [shapes])

  const handleShapeResizeStart = useCallback(() => {
    isResizing.current = true;
    console.log(isResizing.current);
  }, [])

  const handleHeightResize = useCallback((e: MouseEvent | React.MouseEvent) => {
    if (isResizing.current) {
      let YPosition: number;
      if (shapeRef.current) {
        YPosition = (e.clientY - shapeRef.current.y);
        console.log(e.clientY, shapeRef.current.y, YPosition);
      }
      setShapes((prevShapes) =>
        prevShapes.map((shape) =>
          shape.id === shapeId.current
            ? { ...shape, height: YPosition }
            : shape
        )
      );
    }
  }, [])

  const handleWidthResize = useCallback((e: MouseEvent | React.MouseEvent) => {
    if (isResizing.current) {
      let XPosition: number;
      if (shapeRef.current) {
        XPosition = (e.clientX - shapeRef.current.x);
        console.log(e.clientX, shapeRef.current.x, XPosition);
      }
      setShapes((prevShapes) =>
        prevShapes.map((shape) =>
          shape.id === shapeId.current
            ? { ...shape, width: XPosition }
            : shape
        )
      );

    }
  }, [])

  const handleShapeResizingStop = useCallback(() => {
    isResizing.current = false;
    setShapes((prevShapes) =>
      prevShapes.map(shape =>
        shape.id === shapeId.current ?
          { ...shape, resize: false } : shape))
    console.log('resize false');
  }, [])

  const handleEraser = useCallback((e: MouseEvent | React.MouseEvent, id: number) => {
    if (isEraserOpen) {
      let updatedShapes = shapes.filter(shape => shape.id !== id);
      setShapes(updatedShapes);
    }

  }, [isEraserOpen, shapes])

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
          { id: prev.length + 1, x: XPosition, y: YPosition, width: 200, height: 200, shapeColor: shapeColor, shapeType: shapeType, patternType: patternType, borderType: borderType, opacity: opacity, resize: false },
        ]);
      }
    };

    const canvasElement = canvasRef.current;
    if (canvasElement && (functionality === 'shapes')) {
      canvasElement.addEventListener("click", handleCanvasClick);
      if (isResizing.current) {
        canvasElement.addEventListener('mousemove', handleHeightResize)
        canvasElement.addEventListener('mousemove', handleWidthResize)
        canvasElement.addEventListener('mouseup', handleShapeResizingStop)
      }
    }

    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener("click", handleCanvasClick);
        canvasElement.removeEventListener('mouseup', handleShapeResizingStop)
      }
    };
  }, [functionality, shapeColor, shapeType, patternType, borderType, opacity, handleShapeResizingStop])

  console.log(shapes);

  return { shapes, handleClick, handleMove, handleStop, handleEraser, handleShapeSelected, handleShapeResizeStart, handleHeightResize, handleWidthResize, handleShapeResizingStop };

}
