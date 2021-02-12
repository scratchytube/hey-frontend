import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import GeneratorBioForm from './GeneratorBioForm'
import GeneratorPictureForm from './GeneratorPictureForm'



import PreviewBioFunny from './PreviewBioFunny'
import PreviewBio from './PreviewBio'
import PreviewBioPoetic from './PreviewBioPoetic'

import Home from './Pages/Home'
import ProfileContainer from './ProfileContainer'
import './ViewContainer.css'

const ViewContainer = () => {
    const [bio, setBio] = useState([])
    const [profileData, setProfileData] = useState([])

    // fetch for our existing profile data
    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/profiles`)
        .then((r) => r.json())
        .then(profileArray =>
            setProfileData(profileArray))
    }, 
    []
    )

    // Picture fetch will go here to distribute via state to the picture form and then back down to the picture preview
    // Bio fetch goes in here

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/bios")
        .then((r) => r.json())
        .then (bioArray => 
            setBio(bioArray))
    }, [])

    const funny = bio.find((funnyBio => funnyBio.typeOfPrompt === "funny"))
    const poetic = bio.find((poeticBio) => poeticBio.typeOfPrompt === "poetic")
    const serious = bio.find((seriousBio) => seriousBio.typeOfPrompt === "serious")

return(
    <div className="view__container" >
        
        
        
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/profile">
                    <ProfileContainer profileData={profileData} />
                </Route>
                <Route path="/bios/new" >
                    <GeneratorBioForm />
                </Route>
                <Route path="/pictures/new" >
                    <GeneratorPictureForm profileData={profileData}/>
                </Route>
                <Route exact path="/bios/funny" >
                    <PreviewBioFunny funnyBio={funny}/>
                </Route>
                <Route path="/bios/serious" >
                    <PreviewBio seriousBio={serious}/>
                </Route>
                <Route path="/bios/poetic" >
                    <PreviewBioPoetic poeticBio={poetic}/>
                </Route>
                
            </Switch>

       

    </div>
)
}

export default ViewContainer