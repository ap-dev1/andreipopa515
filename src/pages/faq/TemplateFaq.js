import "./template-faq.css"
import React from "react"
import { useState } from "react"
import parse from "html-react-parser"

export default function TemplateFaq(props) {
    const [open, setopen] = useState(false)

    return (
        <article className="faq-article collapsible">
            <h4
                className="title-toggle"
                onClick={() => setopen(!open)}
            >
                {parse(props.question)}
            </h4>
            {open
                &&
                <div className="content">
                    {
                        props.answer.map(txt => {
                            return (
                                <p>
                                    {parse(txt)}
                                </p>
                            )
                        })
                    }
                </div>
            }
        </article>
    )
}