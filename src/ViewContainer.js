import React from 'react'
import GeneratorBioForm from './GeneratorBioForm'
import PreviewBio from './PreviewBio'
import GeneratorPictureForm from './GeneratorPictureForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './ViewContainer.css'

const ViewContainer = () => {
return(
    <div className="view__container" >
            <h1>hey_</h1>
            <p>We're just a little helper for your dating apps.</p>
            <button>Get Started</button>
        
        <Router>
            <Switch>
                <Route path="/bios/new" >
                    <GeneratorBioForm />
                </Route>
                <Route path="/pictures/new" >
                    <GeneratorPictureForm />
                </Route>
                <Route path="/bio/:id" >
                    <PreviewBio />
                </Route>
                <Route path="picture/:id" >
                    <PreviewPicture />
                </Route>

                {/* {profile_container} */}

            </Switch>
        </Router>

    </div>
)
}

export default ViewContainer