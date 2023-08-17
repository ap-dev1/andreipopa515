import "./backstory.css"
import React from "react"
import parse from "html-react-parser"
import EmoryTemplate from "../emory/EmoryTemplate"
import Introduction from "./Introduction"
import NotWanted432 from "./NotWanted432"
import IntermezzoAfterBirth from "./IntermezzoAfterBirth"
import OffTheWheel from "./OffTheWheel"
import Bruxism from "./Bruxism"

export default function BackstoryPage() {
    return (

        <article className="backstory" aria-label="backstory">
            <header>
                <p
                    style={{ fontSize: "14px" }}
                >Dear reader, please be advised: this is a story about malignant parenting. I will touch on domestic violence, child abuse, animal cruelty, and human trafficking. </p>

                <p
                    style={{ fontSize: "14px" }}
                >See also youtube facebook</p>

                <p>See also youtube facebook</p>

            </header>

            <Introduction />

            <NotWanted432 />

            <IntermezzoAfterBirth />

            <Bruxism />



            <OffTheWheel />
            {/* 
            <article>
                <h1>My hero, Ecaterina "Cati" Talmaciu (? - 2005)</h1>
                <p>
                    My mother's mom, my grandma, was my true protector. She loved me and did her best to shield me from my parents. She and my grandpa took me in and raised me by themselves for the first few years.
                    My grandma is why I'm not dead or worse. She survived the nazi occupation, the russian "liberation", the progroms, and communism.
                </p>
            </article> */}



            {/* after the appartment thing, they didn't stop to try to turn me into something ugly, a hater, */}

            <footer
                style={{ textAlign: "center", fontWeight: "600", fontSize: "12px" }}
            >To be continued</footer>

        </article>
    )
}