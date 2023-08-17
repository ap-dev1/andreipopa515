import "./emory-intro.css"
import React, { useState } from "react"
import parse from "html-react-parser"


export default function EmoryIntro() {
    const [open, setopen] = useState(true)

    return (
        <article className="emory-intro">

            <header onClick={() => setopen(!open)}>

                <div className="thumbnail">
                    {/* <img ref={props.thumbnail ? props.thumbnail : null}></img> */}
                </div>


                <div>
                    <h1>
                        {"Human trafficking and intellectual appropriation"}
                    </h1>

                    {/* <h1>
                        {"Trafficked, exploited, robbed, and pushed out"}
                    </h1> */}

                    <p>
                        {"Some PhD students are accepted to be trained and promoted. Others are accepted only to be discarded somewhere along the way. We serve to \"make the numbers\" when it comes to reported demographics and to generate ideas, data, findings for the PhD students from the first category."}
                    </p>

                    <br />
                    <p style={{ textAlign: "center" }}>
                        {parse("<a href=\"https://www.mediafire.com/file/vq108bgxlsrvuk4/POPA_v_MCDOWELL_2020.pdf/file\" >https://www.mediafire.com/file/vq108bgxlsrvuk4/POPA_v_MCDOWELL_2020.pdf/file</a>")}
                    </p>
                    <br />
                    <p>
                        {"I focused on the work, they focused on taking credit for it. swapping, working in parallel, replicating your findings under your unsuspecting nose. "}
                    </p>
                    <br />

                    {/* <p>
                        {"My plagiarizer is McDowell, but everything started in 2005, with my first mentor, Phil Wolff"}
                    </p> */}

                    <br />



                </div>


            </header>

            {open
                &&
                <div className="content">
                    {/* {props.text.map(paragraph => {
                        return (
                            <p className="paragraph">{parse(paragraph)}</p>
                        )
                    })} */}

                    {/* <p className="paragraph" >
                        Some phd students accepted in the Psychology Department of Emory University are meant to be promoted. Others, myself included, are meant to fail somewhere along the way and our work is used to fuel the careers of those from the first category.
                    </p> */}
                </div>
            }



        </article>
    )
}