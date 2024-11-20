import React, { useCallback, useEffect, useState } from 'react'
import stickyNotesFeature from '../Interfaces/stickyNotesFeature'
import { useAppSelector } from '../Redux/hooks'
import note from '../Interfaces/note';

export default function StickyNotesFeatures({ canvasRef, noteTextSize, noteFontFamily, noteBackgroundColor }: stickyNotesFeature) {
    const functionality = useAppSelector(state => state.Functionality.functionality);
    const [notes, setNotes] = useState<note[]>([])

    useEffect(() => {
        const handleCanvasClick = (e: MouseEvent) => {
            if (canvasRef.current) {
                const rect = canvasRef.current.getBoundingClientRect();
                const XPosition = e.clientX - rect.left;
                const YPosition = e.clientY - rect.top;

                setNotes((prev) => [
                    ...prev,
                    { id: prev.length + 1, x: XPosition, y: YPosition, text: '', noteTextSize: noteTextSize, noteFontFamily: noteFontFamily, noteBackgroundColor: noteBackgroundColor },
                ]);
            }
        };

        const canvasElement = canvasRef.current;
        if (canvasElement && functionality === 'notes') {
            canvasElement.addEventListener("click", handleCanvasClick);
        }

        return () => {
            if (canvasElement) {
                canvasElement.removeEventListener("click", handleCanvasClick);
            }
        };
    }, [functionality, noteBackgroundColor, noteTextSize, noteFontFamily])

    const removeNote = () => {
        let filterArr1 = notes.filter(note => note.text != "")
        setNotes(filterArr1);
    }

    const settingNoteText = (e: React.ChangeEvent, id: number) => {
        let target = e.target as HTMLTextAreaElement;
        let updatedNotes = notes.map(note =>
            note.id === id ?
                { ...note, text: target.value, noteTextSize: noteTextSize, noteFontFamily: noteFontFamily, noteBackgroundColor: noteBackgroundColor } : note
        )
        setNotes(updatedNotes)
    }

    return { notes, removeNote, settingNoteText };
}
