import React, { useEffect, useState } from 'react'
import input from '../Interfaces/input'
import canvasTextFeature from '../Interfaces/canvasTextFeatures'
import { useAppSelector } from '../Redux/hooks'
import { textBrightnessMap } from '../ObjectMapping'

export default function canvasTextFeatures({ canvasRef, textColor, textSize, fontFamily, textBrightness }: canvasTextFeature) {
  const [inputs, setInputs] = useState<input[]>([])
  const functionality = useAppSelector(state => state.Functionality.functionality)

  useEffect(() => {
    const handleCanvasClick = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const XPosition = e.clientX - rect.left;
        const YPosition = e.clientY - rect.top;

        setInputs((prev) => [
          ...prev,
          { id: prev.length + 1, x: XPosition, y: YPosition, text: '', textColor: textColor, textSize: textSize, fontFamily: fontFamily, textBrightness: textBrightness },
        ]);
      }
    };

    const canvasElement = canvasRef.current;
    if (canvasElement && functionality === 'text') {
      canvasElement.addEventListener("click", handleCanvasClick);
    }

    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener("click", handleCanvasClick);
      }
    };
  }, [functionality, textSize, textColor, fontFamily, textBrightness])

  const removeInput = () => {
    let filterArr = inputs.filter(input => input.text !== "")
    setInputs(filterArr);
  }

  const settingText = (e: React.ChangeEvent, id: number) => {
    let target = e.target as HTMLInputElement;

    let updatedInputs = inputs.map(input => (
      input.id === id ?
        { ...input, text: target.value, textColor: textColor, textSize: textSize, fontFamily: fontFamily, textBrightness: textBrightness } : input
    ))
    setInputs(updatedInputs)
  };
  console.log(inputs);
  

  return { settingText, removeInput, inputs };

}
