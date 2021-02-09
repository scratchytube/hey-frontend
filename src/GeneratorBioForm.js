import React, { useState, useEffect } from 'react'
import './GeneratorBioForm.css'

const GeneratorBioForm = () => {

    const [screenName, setScreenName] = useState("")
    const someScreenNames = [ "KingPapiChuLo12", "Tazaryoot", "QueenzGurl718", "Cleofus", "Mister Ding Dong Johnson", "MisterMan212", "allhailMike27" ]

    const [govtIllegalQuest, setGovtIllegalQuest] = useState("")
    const govtAnswers = ["weed", "dancing", "vaccination", "beanie babies"]

    const [bioDropDown, setBioDropDown] = useState("1")
    const [kindOfBio, setKindOfBio] = useState([])
    // const bioAnswers = ["funny", "serious", "poetic" ]

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/bios")
        .then ((r) => r.json())
        .then(bioArray => 
            setKindOfBio(bioArray))
    }, 
    []
    )

    console.log(kindOfBio)

    const renderBioTypeList = () => {
        return (
            kindOfBio.map((bioType) => {
                return (
                    <option
                        key={bioType.id}
                        value={bioType.id} 
                        >
                        {bioType.typeOfPrompt}
                    </option>
                    )
                }
            )
        )
    }



    const quickRandom = () => {
        randomScreenNames()
        randomGovtAnswers()
    }

    
    const randomScreenNames = () => {
        const randomNumber = Math.floor(Math.random() * (someScreenNames.length))
        const misterRandomScreenName = someScreenNames[randomNumber]
        setScreenName(misterRandomScreenName)
    }

    const randomGovtAnswers = () => {
        const randomNumberForIllegal = Math.floor(Math.random() * (govtAnswers.length))
        const randomIllegalAnswers = govtAnswers[randomNumberForIllegal]
        setGovtIllegalQuest(randomIllegalAnswers)
    }


    // Was gonna randomize the drop down but screw it at this point. 
    // const kindOfBio = (e) => {
    //     const randomNumberForBio = Math.floor(Math.random() * (kindOfBio.length))
    //     const randomness = bioAnswers[randomNumberForBio]
    //     setKindOfBio(randomness)
    // }
    // const selection = e.target.value
    
    // setKindOfBio(e.target.value)

    


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            
        }
    }
    



    return (
        <div className="generator__bio_form" >
            <form>
                    
                <h3>Sheesh this is a lot. Random plz</h3>
                <input type="button" value="Fill out the form randomly" className="button" onClick={quickRandom} />
                <input type="button" value="Submit" className="button" onSubmit={handleSubmit} />
                        <br></br>
                        <br></br>

                <h3>What kind of bio would you like?</h3>
                <select 
                name="name" 
                value={bioDropDown} 
                onChange={(e) => setBioDropDown(e.target.value)}  >
                    {renderBioTypeList()}
                </select>
                    
                    <br></br>
                    <br></br>
            

                <h3>What was your first aol aim screenName</h3>
                <input type="text" value={screenName} onChange={(e) => setScreenName(e.target.value)} ></input>
                <input type="button" value="suggest" className="button" onClick={randomScreenNames}  ></input>

                <h3>What would be the worst thing for the government to make illegal</h3>
                <input type="text" value={govtIllegalQuest} onChange={(e) => setGovtIllegalQuest(e.target.value)} ></input>
                <input type="button" value="suggest" className="button" onClick={randomGovtAnswers} ></input>

                <h3>If you were arrested with no explaination, what would your friends and family assume you had done?</h3>

                <h3>Where was the most in appropriate / most embarrassing place you’ve farted?</h3>

                <h3>How do you feel about putting pineapple on pizza?</h3>

                <h3>If animals could talk, which would be the rudest?</h3>

                <h3>What’s the weirdest thing a guest has done at your house?</h3>

                <h3>What would be the absolute worst name you could give your child?</h3>

                <h3>What are some fun ways to answer everyday questions like “how’s it going” or “what do you do”?</h3>

                <h3>How much do you love to travel?</h3>

                <br></br>
                <br></br>

                <input type="submit" name="submit" className="submit" onSubmit={handleSubmit} />
            </form>
        </div>
    )
}

export default GeneratorBioForm 