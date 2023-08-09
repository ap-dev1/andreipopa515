import "./backstory.css"
import React from "react"
import parse from "html-react-parser"
import EmoryTemplate from "../emory/EmoryTemplate"
// import Introduction from "./Introduction"

export default function BackstoryPage() {
    return (

        <section className="backstory" aria-label="backstory">
            <header>
                <h2>Trigger warning: this is a story about domestic violence, child abuse, and animal cruelty </h2>
            </header>


            <article>
                <h1>Un unwelcomed birth</h1>
                <p>
                    I was born in 1980, in Romania, 10 years before the fall of communism. My father is Ion Popa, back then an officer in the Romanian Navy (not Stasi). My mother is Carmen Talmaciu, back then Popa, then Butuc, now back to Talmaciu, her maiden name. She graduated from University of Bucharest with a degree in economics. I don't know much else about her life.
                </p>
                <p>
                    My parents didn't want me. According to my mother, I would have been her nine dark-alley abortion and that wasn't feasible for medical reasons. She knew because she asked. The only reason she married my dad was because she couldn’t prevent my existence.

                    After she had me she didn’t want to raise me. If not for her parents, I have no doubt she would have left me in an orphanage or a store or something.
                </p>
            </article>


            <article>
                <h1>My hero, Ecaterina "Cati" Talmaciu (? - 2005)</h1>
                <p>
                    My mother's mom, my grandma, was my true protector. She loved me and did her best to shield me from my parents. She and my grandpa took me in and raised me by themselves for the first few years.
                    {/* My grandma is why I'm not dead or worse. She survived the nazi occupation, the russian "liberation", the progroms, and communism. */}
                </p>
            </article>



            after the appartment thing, they didn't stop to try to turn me into something ugly, a hater,
        </section>
    )
}