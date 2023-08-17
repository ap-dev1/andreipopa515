import "./emory-template.css"
import React, { useState } from "react"
import parse from "html-react-parser"


export default function EmoryTemplate(props) {
    const [open, setopen] = useState(false)

    return (
        <article className="post">

            <header
                onClick={() => setopen(!open)}
            >

                <div className="thumbnail">
                    <img ref={props.thumbnail ? props.thumbnail : null}></img>
                </div>

                <div className="info">
                    <h1
                        className="title"
                    // onClick={() => setopen(!open)}
                    >
                        {props.title ? parse(props.title) : null}
                    </h1>

                    <p className="date">
                        {props.date ? props.date : null}
                    </p>

                    <div className="tags">

                        {props.tags ? props.tags.map(tag => {
                            return (
                                <span className="tag">{tag}</span>
                            )
                        }) : null}

                    </div>

                </div>


            </header>

            {open
                &&
                <div className="content">
                    {props.text.map(paragraph => {
                        return (
                            <p className="paragraph">{parse(paragraph)}</p>
                        )
                    })}
                </div>
            }



        </article>
    )
}