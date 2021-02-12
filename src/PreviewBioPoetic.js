import React from 'react'
import { Link } from 'react-router-dom'

const PreviewBioPoetic = ({ poeticBio }) => {

    

    return (
        <div>
            <p>{ poeticBio.snippets }</p>
            <button>Save</button>
            <Link to="/bios/new" >Try Again!</Link>
        </div>
    )
}

export default PreviewBioPoetic