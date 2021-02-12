import React, { useState,  } from 'react'
import { Link } from 'react-router-dom'
import './GeneratorBioForm.css'

const GeneratorBioForm = () => {

    const [screenName, setScreenName] = useState("")
    const someScreenNames = [ "KingPapiChuLo12", "Tazaryoot", "QueenzGurl718", "Cleofus", "Mister Ding Dong Johnson", "MisterMan212", "allhailMike27" ]

    const [govtIllegalQuest, setGovtIllegalQuest] = useState("")
    const govtAnswers = ["weed", "dancing", "vaccination", "beanie babies"]

    const [crimes, setCrimes] = useState("")
    const crimePrompts = ["hopped a cab", "throw a snowball at a cop", "stole a vacuum cleaner" ]

    const [fartPlaces, setFartPlaces] = useState("")
    const farties = ["on the train", "elevator", "in an interview", ]

    const [ weirdGuestStuff, setWeirdGuestStuff] = useState("")
    const weirdGuest = ["put their shoes on my couch", "started cleaning", "kick my dog"]
    
    const [dayGoing, setDayGoing] = useState("")
    const dayResponses = ["lol plz go away", "pssh turrible", "yeah i cant do this"]

    const [travel, setTravel] = useState("")
    const travelPrompts = ["eh", "omg so much", "travelling is the best!"]

    
    // const [bioDropDown, setBioDropDown] = useState("1")
    // const [kindOfBio, setKindOfBio] = useState([])
    // // fetch for our bios
    // useEffect(() => {
    //     fetch("http://localhost:3000/api/v1/bios")
    //     .then ((r) => r.json())
    //     .then(bioArray => 
    //         setKindOfBio(bioArray))
    // }, 
    // []
    // )

    // our dynamic dropdown full of bio types
    // const renderBioTypeList = () => {
    //     return (
    //         kindOfBio.map((bioType) => {
    //             return (
    //                 <option
    //                     key={bioType.id}
    //                     value={bioType.id} 
    //                     >
    //                     {bioType.typeOfPrompt}
    //                 </option>
    //                 )}))}


    //our function for the general randomness
    const quickRandom = () => {
        randomScreenNames()
        randomGovtAnswers()
        randomCrimes()
        randomFartPlaces()
        randomGuestStuff()
        randomDayGoing()
        randomTravelPrompt()
    }

    //function for randomizing screenNames
    const randomScreenNames = () => {
        const randomNumber = Math.floor(Math.random() * (someScreenNames.length))
        const misterRandomScreenName = someScreenNames[randomNumber]
        setScreenName(misterRandomScreenName)
    }

    // function for randomizing the illegal thingamabob question
    const randomGovtAnswers = () => {
        const randomNumberForIllegal = Math.floor(Math.random() * (govtAnswers.length))
        const randomIllegalAnswers = govtAnswers[randomNumberForIllegal]
        setGovtIllegalQuest(randomIllegalAnswers)
    }

    
    const randomCrimes = () => {
        const randomNumberforCrime = Math.floor(Math.random() * (crimePrompts.length))
        const randomCrimeAnswers = crimePrompts[randomNumberforCrime]
        setCrimes(randomCrimeAnswers)
    }

    const randomFartPlaces = () => {
        const randomNumberforFarts = Math.floor(Math.random() * (farties.length))
        const randomFartAnswers = farties[randomNumberforFarts]
        setFartPlaces(randomFartAnswers)
    }

    const randomGuestStuff = () => {
        const randomNumberForWeirdGuest = Math.floor(Math.random() * (weirdGuest.length))
        const randomWeirdGuestAnswers = weirdGuest[randomNumberForWeirdGuest]
        setWeirdGuestStuff(randomWeirdGuestAnswers)
    }

    const randomDayGoing = () => {
        const randomNumberForDayResponses = Math.floor(Math.random() * dayResponses.length)
        const randomDayAnswers = dayResponses[randomNumberForDayResponses]
        setDayGoing(randomDayAnswers)
    }

    const randomTravelPrompt = () => {
        const randomNumberForTravelPrompt = Math.floor(Math.random() * travelPrompts.length)
        const randomTravelAnswers = travelPrompts[randomNumberForTravelPrompt]
        setTravel(randomTravelAnswers)
    }

    



    return (
        <div className="generator__bio_form" >
            <form>
                    
                <h3>Sheesh this is a lot. Random plz</h3>
                <input type="button" value="Fill out the form randomly" className="button" onClick={quickRandom} />
                <input type="button" value="Submit" className="button"  />
                        <br></br>
                        <br></br>

                <h3>What was your first aol aim screenName</h3>
                <input type="text" value={screenName} onChange={(e) => setScreenName(e.target.value)} ></input>
                <input type="button" value="suggest" className="button" onClick={randomScreenNames}  ></input>

                <h3>What would be the worst thing for the government to make illegal</h3>
                <input type="text" value={govtIllegalQuest} onChange={(e) => setGovtIllegalQuest(e.target.value)} ></input>
                <input type="button" value="suggest" className="button" onClick={randomGovtAnswers} ></input>

                <h3>If you were arrested with no explaination, what would your friends and family assume you had done?</h3>
                <input type="text" value={crimes} onChange={(e) => setCrimes(e.target.value)} ></input>
                <input type="button" value="suggest" className="button" onClick={randomCrimes} ></input>

                <h3>Where was the most inappropriate / embarrassing place you’ve farted?</h3>
                <input type="text" value={fartPlaces} onChange={(e) => setFartPlaces(e.target.value)} ></input>
                <input type="button" value="suggest" className="button" onClick={randomFartPlaces} ></input>


                <h3>What’s the weirdest thing a guest has done at your house?</h3>
                <input type="text" value={weirdGuestStuff} onChange={(e) => setWeirdGuestStuff(e.target.value)} ></input>
                <input type="button" value="suggest" className="button" onClick={randomGuestStuff} ></input>

                <h3>What are some fun ways to answer everyday questions like “how’s it going” or “what do you do”?</h3>
                <input type="text" value={dayGoing} onChange={(e) => setDayGoing(e.target.value)} ></input>
                <input type="button" value="suggest" className="button" onClick={randomDayGoing} ></input>

                <h3>How much do you love to travel?</h3>
                <input type="text" value={travel} onChange={(e) => setTravel(e.target.value)} ></input>
                <input type="button" value="suggest" className="button" onClick={randomTravelPrompt} ></input>

                <br></br>
                <br></br>

                <Link to="/bios/funny" >Give me a funny Bio</Link>
                <Link to="/bios/serious" >Give me a serious Bio</Link>
                <Link to="/bios/poetic"  >Give me a poetic Bio</Link>

            </form>
        </div>
    )
}

export default GeneratorBioForm 