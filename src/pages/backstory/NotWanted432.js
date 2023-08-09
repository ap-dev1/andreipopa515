import React from "react"
import parse from "html-react-parser"
import EmoryTemplate from "../emory/EmoryTemplate"



export default function NotWanted432() {
    let title = "Un unwelcomed birth",
        thumbnail = null,
        date = "August 8, 2023",
        tags = [],
        text1 = [
            "I was born in 1980, in Romania, to parents who didn't want me, or each other. I don't know much about their lives, they rarely volunteered any details.",
            "My father, Ion Popa, was an officer in the Romanian Navy, not Stasi. After the revolution he started a pharma distribution company (Medifarm-Montero, in Constanta). He was a violent drunk with a god complex, who got off on inspiring fear.",
            "My mother is Carmen Talmaciu, back then Popa, then Butuc, then back to Talmaciu. She graduated from University of Bucharest with a degree in economics. After the revolution she was head of human resources at Comvex, a large company in Constanta harbour.",
            "According to her, I would have been her nine dark-alley abortion and that wasn't feasible for medical reasons. I don't know what Ion was to her, but if not for me they wouldn't have gotten married.",
            "Their marriage lasted eight years, all horrible. ",
            // "After she had me she didn’t want to raise me. If not for her parents, I have no doubt she would have left me in an orphanage or a store or something."
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


