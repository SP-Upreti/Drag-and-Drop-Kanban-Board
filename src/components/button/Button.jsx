import React from 'react'

export default function Button({ text, onClick, classes }) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 capitalize text-white duration-100  rounded-lg shadow-md focus:shadow-none ring-offset-2 ${classes} focus:ring-2`}
        >
            {text}
        </button >
    )
}
