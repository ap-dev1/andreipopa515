import React from "react"
import parse from "html-react-parser"
import EmoryTemplate from "../emory/EmoryTemplate"



export default function AbusersHelp() {
    let title = "The help of abusers",
        thumbnail = null,
        date = "",
        tags = [],
        text = [
            "",
            ""
        ];

    return (
        <EmoryTemplate
            title={title}
            date={date}
            tags={tags}
            text={text}
            thumbnail={thumbnail}
        />
    )
}


