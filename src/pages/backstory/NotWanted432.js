import React from "react"
import parse from "html-react-parser"
import EmoryTemplate from "../emory/EmoryTemplate"



export default function NotWanted432() {
    let title = "Hello world, the 4-3-2 version",
        thumbnail = null,
        date = "August 8, 2023",
        tags = [],
        text1 = [
            "I was born in 1980, in Romania, to parents who didn't want me, or each other. I don't know much about their lives, they rarely volunteered any details.",
            "My father, Ion Popa, was an officer in the Romanian Navy, not Stasi. After the 1989 revolution he started a pharma distribution company (Medifarm-Montero, in Constanta). He was a violent drunk with a god complex, who got off on inspiring fear.",
            "My mother is Carmen Talmaciu, back then Popa, then Butuc, then back to Talmaciu. She graduated from University of Bucharest with a degree in economics. After the revolution she was head of human resources at Comvex, a large company in Constanta harbour.",
            "My parents did not want to get married or have children, but my mother became pregnant and abortion was off the table. According to her, I would have been her 9th dark-alley abortion and the risk was too high. And because they couldn't prevent my birth they couldn't avoid getting married either. That's how I ended up here: lack of contraception, medical complications, and social pressure.",

            // "Their marriage lasted eight years, all horrible. ",

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


