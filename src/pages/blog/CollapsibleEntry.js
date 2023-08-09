import "./collapsible-entry.css";
import React, { useState } from "react";


export function CollapsibleEntry(data) {
    const [open, setopen] = useState(false)


    return (
        <>

            <section className="blog-entry collapsible">

                <h1 className="title-toggle" onClick={() => setopen(!open)}>
                    {data.data.title}
                </h1>


                {/* <h2 className="subtitle">
                    {data.data.subtitle ? data.data.subtitle : null}
                </h2> */}


                <h3 className="date">{data.data.date ? data.data.date : null}</h3>

                <div className="entry-tags">
                    {data.data.tags.map(tag => {
                        return (
                            <span className="tag">{tag}</span>
                        )
                    })}
                </div>


                {open
                    &&
                    <div className="entry-content">

                        {data.data.text.map(paragraph => {
                            return (
                                <p className="paragraph">{paragraph}</p>
                            )
                        })}


                        <input className="expand-cbx" type="checkbox"></input>

                    </div>
                }





            </section>
        </>
    )
}

export default CollapsibleEntry;