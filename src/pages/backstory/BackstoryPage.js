import "./backstory.css"
import React from "react"
import parse from "html-react-parser"
import EmoryTemplate from "../emory/EmoryTemplate"
import Introduction from "./Introduction"
import NotWanted432 from "./NotWanted432"

export default function BackstoryPage() {
    return (

        <section className="backstory" aria-label="backstory">
            <header>
                <p>Dear reader, this is a story about malignant parenting. I will touch on domestic violence, child abuse, and animal cruelty. </p>
            </header>

            <Introduction />

            <NotWanted432 />


            {/* 
            <article>
                <h1>My hero, Ecaterina "Cati" Talmaciu (? - 2005)</h1>
                <p>
                    My mother's mom, my grandma, was my true protector. She loved me and did her best to shield me from my parents. She and my grandpa took me in and raised me by themselves for the first few years.
                    My grandma is why I'm not dead or worse. She survived the nazi occupation, the russian "liberation", the progroms, and communism.
                </p>
            </article> */}



            {/* after the appartment thing, they didn't stop to try to turn me into something ugly, a hater, */}
        </section>
    )
}