import React from 'react'
import './GeneratorPictureForm.css'

const GeneratorPictureForm = ({ profileData }) => {

    console.log(profileData)

    const misterImages = profileData.map((pictureData) => (
        <img src={pictureData.picture.completed_pictures} alt="hehe's"/>
    ))

    return (
        <div className="picture__form" >
            
            
            { misterImages }
            <input name="image" placeholder="upload your face" />
            <button>Submit</button>
        </div>
    )
}

export default GeneratorPictureForm