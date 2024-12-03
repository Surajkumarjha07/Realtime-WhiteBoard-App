// import React, { RefObject, useCallback, useEffect, useRef } from 'react'
// import { useAppSelector } from '../Redux/hooks';
// import Move from '../Interfaces/Move';

// export default function canvasObjectMove({ canvasRef, shapes }: Move) {
//     const functionality = useAppSelector(state => state.Functionality.functionality);
//     const isMoving = useRef(false);
//     const CTX = useRef<CanvasRenderingContext2D | null>(null)
//     const XPos = useRef(0);
//     const YPos = useRef(0);

//     const handleClick = useCallback((e: MouseEvent | React.MouseEvent) => {
//         let target = e.target as HTMLDivElement;
//         let XPosition = e.clientX;
//         let YPosition = e.clientY;
//         XPos.current = XPosition;
//         YPos.current = YPosition;
//         let val = Number(target.getAttribute('shape-id'))
//         let shape = shapes.filter(shape => shape.id == val);
//         console.log(shape);        
//         let updatedShapes = shapes.map(shape =>
//             shape.id == val ?
//                 { ...shape, x: XPosition, y: YPosition } : shape
//         )
//         console.log(updatedShapes);
//     }, [XPos, YPos])

//     const handleMove = useCallback(() => {
//         if (isMoving) {

//         }
//     }, [isMoving])

//     const handleStop = () => {

//     }

//     useEffect(() => {
//         if (canvasRef.current) {
//             let ctx = canvasRef.current.getContext('2d');
//             canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
//             canvasRef.current.height = window.innerHeight * window.devicePixelRatio;

//             ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
//             CTX.current = ctx;
//             // canvasRef.current.style.width = `${window.innerWidth}px`;
//             // canvasRef.current.style.height = `${window.innerHeight}px`;
//         }

//     }, [functionality, handleClick, handleMove, handleStop])


//     return { handleClick }
// }
