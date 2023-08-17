import React from "react"
import parse from "html-react-parser"
import EmoryTemplate from "../emory/EmoryTemplate"



export default function OffTheWheel() {
    let title = "Getting off the wheel",
        thumbnail = null,
        date = "May 30, 2023",
        tags = ["fasting", "protest", "Emory University"],
        text1 = [
            "Hello, I'm Dr. Andrei Popa, computational scientist and green card holder for research in national interest (E26).",

            "I'm writing this on May 30, 2023. It is my 10th day of fasting and the first day without water. I'm doing this to protest the fact that Emory University admitted me in a PhD program with no intention of giving me credit for my work or acknowldging my credentials. They worked me for years, robbed me of my intellectual property, and then ruined my life.",

            "It's been more than a decade of gaslighting, and shenanigans that took shocking forms. Meanwhile, my research and ideas are being slowly syphoned in publications, but attributed to others (in more or less subtle ways). ",

            "I am wounded and indignated. The people that are doing this to me are people I've come to trust over the years, people I was fond of. Mentors, lab mates, committee members, recommenders (jobs & green card), faculty and staff who hugged me cordially on graduation day, congratulated me, and wished me all the best. ",


            "I hope that they - Emory, the powers that be - will eventually hear me and make things right, because I will not abandon my identity as a researcher. I spent 17 years cultivating it, I'm good at it, and there's nothing else I care about than taking it further, but as me, not as a ghost researcher.",

            "My life is in God's hands now because I will not eat or drink until I'm heard. Either way, four days or fourty years, I'll be at my station, continuing my work.",


            "Sincerely,",
            "Andrei",
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








