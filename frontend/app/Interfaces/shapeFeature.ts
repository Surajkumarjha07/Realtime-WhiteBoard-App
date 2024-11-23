import { RefObject } from "react";

type shapeFeature = {
    canvasRef: RefObject<HTMLCanvasElement>,
    shapeType: string,
    shapeColor: string
}

export default shapeFeature;