import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <Link to={'/documentation'} className='text-blue-500'>
                click here to view documentation
            </Link>
        </footer>
    )
}
