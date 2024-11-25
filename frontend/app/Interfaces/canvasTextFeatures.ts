import { RefObject } from "react"

interface canvasTextFeature{
    canvasRef: RefObject<HTMLCanvasElement>,
    textColor: string,
    textSize: string,
    fontFamily: string,
    textBrightness: number
}

export default canvasTextFeature