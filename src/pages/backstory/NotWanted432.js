import React from "react"
import parse from "html-react-parser"
import EmoryTemplate from "../emory/EmoryTemplate"



export default function NotWanted432() {
    let title = "Un unwelcomed birth",
        thumbnail = null,
        date = "August 8, 2023",
        tags = [],
        text1 = [
            "I was born in 1980, in Romania, 10 years before the fall of communism. My father is Ion Popa, back then an officer in the Romanian Navy (not Stasi). My mother is Carmen Talmaciu, back then Popa, then Butuc, now back to Talmaciu, her maiden name. She graduated from University of Bucharest with a degree in economics. I don't know much else about her life.",
            "My parents didn't want me. According to my mother, I would have been her nine dark-alley abortion and that wasn't feasible for medical reasons. She knew because she asked. The only reason she married my dad was because she couldn’t prevent my existence.",
            "After she had me she didn’t want to raise me. If not for her parents, I have no doubt she would have left me in an orphanage or a store or something."
        ];

    return (
        <EmoryTemplate
            title={title}
            date={date}
            tags={tags}
            text={text1}
            thumbnail={thumbnail}
        />
    )
}


