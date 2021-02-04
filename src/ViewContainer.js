import React from 'react'
import GeneratorBioForm from './GeneratorBioForm'
import './ViewContainer.css'

const ViewContainer = () => {
return(
    <div className="view__container" >
            <h1>hey_</h1>
            <p>We're just a little helper for your dating apps.</p>
            <button>Get Started</button>
        
        
        {/* {bio_generator_form} */}
        <GeneratorBioForm />


        {/* {profile_container} */}

        {/* {picture_generator_form} */}

        {/* {bio_preview} */}

        {/* {picture_preview} */}

    </div>
)
}

export default ViewContainer