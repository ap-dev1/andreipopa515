import React from "react"
import parse from "html-react-parser"
import EmoryTemplate from "../emory/EmoryTemplate"



export default function Introduction() {
    let title = "Hi, I'm Dr. Andrei Popa",
        thumbnail = null,
        date = "August 8, 2023",
        tags = [],
        text1 = [
            "I'm a 43-year old cis white male. I stand 6'3 above ground. I received my PhD in Psychology in 2013, from Emory University (Cognition & Development program). I'm a published author and accomplished scholar. I lived all my life in denial, too brainswashed to recognize that I was shaped by traumas and abuse and too afraid to even think about it, let alone speak out.",
            "<blockquote>\"You're crazy, you're a liar, you're imagining things, no one will believe you, you'll end up in a mental institution ...\"</blockquote>",
            "I invented stories to excuse my abusers, I repeated their narratives, and I hated myself for fourty years. This is me speaking out, for me and for others like me."
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


