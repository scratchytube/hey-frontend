import React from 'react'
import { Link } from 'react-router-dom'

const PreviewBioFunny = ({ funnyBio }) => {

    
    
    return (
        <div>
            <p>{ funnyBio.snippets }</p>
            <button>Save</button>
            <Link to="/bios/new" >Try Again!</Link>
        </div>
    )
}

export default PreviewBioFunny