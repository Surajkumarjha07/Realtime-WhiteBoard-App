import { RefObject } from "react";

type stickyNotesFeature = {
    canvasRef: RefObject<HTMLCanvasElement>,
    noteTextSize: string,
    noteFontFamily: string,
    noteBackgroundColor: string
}

export default stickyNotesFeature;