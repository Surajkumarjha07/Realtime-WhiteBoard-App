import { RefObject } from "react";

type shapeFeature = {
    canvasRef: RefObject<HTMLCanvasElement>,
    shapeColor: string,
}

export default shapeFeature;