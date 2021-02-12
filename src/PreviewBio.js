import React from 'react'
import { Link } from 'react-router-dom'
import './PreviewBio.css'

const PreviewBio = ({ seriousBio }) => {
    return (
        <div className="preview__bio" >
            <p>{ seriousBio.snippets }</p>
            <button>Save</button>
            <Link to="/bios/new" >Try Again!</Link>
            
        </div>
    )
}

export default PreviewBio