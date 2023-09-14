import "./letters.css"
import React, { useState } from "react"
import parse from "html-react-parser"


export default function LetterTemplate(props) {
    const [open, setopen] = useState(false)

    return (
        <article className="letter">

            <header onClick={() => setopen(!open)}>



                <div className="thumbnail">
                    <img ref={props.thumbnail ? props.thumbnail : null}></img>
                </div>

                <div className="info">
                    <p className="meta">

                        {props.meta}
                    </p>
                    <h1 className="title"  >
                        {props.title ? parse(props.title) : null}
                    </h1>
                </div>
            </header>


            {open
                &&
                <div className="text">
                    {props.text.map(paragraph => {
                        return (
                            <p >{parse(paragraph)}</p>
                        )
                    })}
                </div>
            }



        </article>
    )
}