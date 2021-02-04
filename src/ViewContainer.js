import React from 'react'
import GeneratorBioForm from './GeneratorBioForm'
import PreviewBio from './PreviewBio'
import GeneratorPictureForm from './GeneratorPictureForm'
import './ViewContainer.css'

const ViewContainer = () => {
return(
    <div className="view__container" >
            <h1>hey_</h1>
            <p>We're just a little helper for your dating apps.</p>
            <button>Get Started</button>
        
        
        {/* {bio_generator_form} */}
        <GeneratorBioForm />

        {/* {picture_generator_form} */}
        <GeneratorPictureForm />

        {/* {bio_preview} */}
        <PreviewBio />

        {/* {picture_preview} */}

        {/* {profile_container} */}

    </div>
)
}

export default ViewContainer