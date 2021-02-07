import React from 'react'
import GeneratorBioForm from './GeneratorBioForm'
import PreviewBio from './PreviewBio'
import GeneratorPictureForm from './GeneratorPictureForm'
import PreviewPicture from './PreviewPicture'
import Home from './Pages/Home'
import { Route, Switch } from 'react-router-dom'
import './ViewContainer.css'

const ViewContainer = () => {
return(
    <div className="view__container" >
        
        
        
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
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

       

    </div>
)
}

export default ViewContainer