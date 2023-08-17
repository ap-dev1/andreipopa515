import React from "react"
import parse from "html-react-parser"
import EmoryTemplate from "../emory/EmoryTemplate"



export default function Bruxism() {
    let title = "Bruxism",
        thumbnail = null,
        date = "May 30, 2023",
        tags = ["Munchausen Syndrome by Proxy", "teeth grinding", "malignant parenting", "child abuse", "bruxism", "malignant parenting"],
        text1 = [
            "Teeth grinding during sleep, or bruxism, can be neutralized with a mouth gard - a silicone thingy that prevents contact between lower and upper teeth. My parents, however, hid this from me; not the solution, the condition itself. By the age of ten I was intimate with oral surgery. By the time I finished high-school, I was missing more than half of my adult teeth. The extent of the damage was masked by veneers, bridges, and changing dentists a few times. I remained unaware of my condition until college. Take some time to absorb this."

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








