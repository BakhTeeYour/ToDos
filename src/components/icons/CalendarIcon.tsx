import { FC } from 'react';
import {IIconsProps} from "../../interfaces/icons";
export const CalendarIcon: FC<IIconsProps> = ({ width, height, className, color }) => (
    <svg
        style={{
            width: `${width}px`,
            height: `${height}px`,
        }}
        className={className}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6 1.5V3.75"
            stroke={color || '#9CABC2'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 1.5V3.75"
            stroke={color || '#9CABC2'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.625 6.81738H15.375"
            stroke={color || '#9CABC2'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M15.75 12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375V12.75Z"
            stroke={color || '#9CABC2'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11.7713 10.2749H11.778"
            stroke={color || '#9CABC2'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11.7713 12.5249H11.778"
            stroke={color || '#9CABC2'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.99686 10.2749H9.00359"
            stroke={color || '#9CABC2'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.99686 12.5249H9.00359"
            stroke={color || '#9CABC2'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6.22049 10.2749H6.22723"
            stroke={color || '#9CABC2'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6.22049 12.5249H6.22723"
            stroke={color || '#9CABC2'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
