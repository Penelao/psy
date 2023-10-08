import './App.css'
import {PredictionsPage} from "./predictions/PredictionsPage.tsx";
import {useState} from "react";


function App() {
    const [showEye, setShowEye] = useState(false)
    return (
        <>
            <div className="hidden-header" />
            <header>
                (XXX) 691-4200
                <i>Nikky - Psychic to the stars</i>
            </header>
            <div className="eye-of-the-tiger-wrapper" style={{display: showEye ? undefined : "none"}}>
                <img className="eye-of-the-tiger" src="/img/eye.png" alt="eye" onLoad={() => { setShowEye(true); }}/>
            </div>
            <main>
                <PredictionsPage />
            </main>
            <div className="avatar">
                <img style={{
                    height: "100%",
                    display: "block",
                }} src="/img/img.png" alt="nikky"/>
                <img
                    style={{
                        position: "absolute",
                        top: 0,
                        left: "-10%",
                        zIndex: -1,
                        height: "90%"
                    }}
                    src="/img/nikky-cropped.png" alt="nikky"/>
            </div>
            <footer>
                Corporate parties and readings call Psychic Nikki (XXX) 691-4200.
            </footer>
        </>
  )
}

export default App
