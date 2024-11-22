import React from 'react'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { useAppDispatch } from '../Redux/hooks';
import { setShape } from '../Redux/slices/shapes';

export default function Shapes() {
    const dispatch = useAppDispatch();

    const selectShape = (e: React.MouseEvent) => {
        let target = e.target as HTMLButtonElement
        if (target.name) {
            dispatch(setShape(target.name))
        }
    }

    return (
        <>
            <div className='grid grid-cols-4 grid-rows-4 gap-10 shadow-gray-400 shadow-md px-2 py-4 absolute bottom-16 right-0 w-56 rounded-md z-40'>

                <button name='rectangleShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <RectangleOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='circleShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <CircleOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='triangleShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <ChangeHistoryOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='hexagonShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <HexagonOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='starShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <StarBorderOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='heartShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <FavoriteBorderOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='checkBoxShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <CheckBoxOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='wrongBoxShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <DisabledByDefaultOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='arrowLeftShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <ArrowBackOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='arrowRightShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <ArrowForwardOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='arrowUpShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <ArrowUpwardOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='arrowDownShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <ArrowDownwardOutlinedIcon className='text-black pointer-events-none' />
                </button>
                <button name='cloudShape' onClick={(e: React.MouseEvent) => selectShape(e)}>
                    <CloudOutlinedIcon className='text-black pointer-events-none' />
                </button>

            </div>
        </>
    )
}
