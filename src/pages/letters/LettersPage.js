import "./letters.css"
import React from "react"
import parse from "html-react-parser"
import LetterTemplate from "./LetterTemplate"
import { lettersData } from "./lettersData";
import LetterToEmory from "./LetterToEmory";

import ReactGA from "react-ga4";
ReactGA.initialize("G-MB2HPVP47E");


export default function LettersPage() {
    return (
        <div className="letters">

            {/* <LetterToEmory /> */}

            {lettersData.map((letter) => {
                return (
                    <LetterTemplate
                        meta={letter.meta}
                        title={letter.title}
                        thumbnail={letter.thumbnail}
                        text={letter.text}
                    />
                )
            })}
        </div>
    )
}