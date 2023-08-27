import "./letter-to-emory.css"
import React, { useState } from "react"
import parse from "html-react-parser"


export default function LetterToEmory(props) {
    const [open, setopen] = useState(true)

    return (
        <article className="post">

            <header className="toEmory" onClick={() => setopen(!open)}  >
                <div className="thumbnail">
                    <img ref={props.thumbnail ? props.thumbnail : null}></img>
                </div>

                <div className="info">
                    <p className="meta"> To my Alma Mater, Emory University</p>
                    <h1 className="title">Dear Alma Mater,</h1>
                    <p className="date">August 26, 2023</p>
                    {/* <div className="tags">
                        {props.tags ? props.tags.map(tag => {
                            return (
                                <span className="tag">{tag}</span>
                            )
                        }) : null}
                    </div> */}
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

                    <p className="paragraph">
                        I am Dr. Andrei Popa, a son you exploited and abandoned.
                    </p>

                    <p className="paragraph">
                        Members of our community accepted me in the phd program with no intention to credit me for my work and time at Emory. They only kept me around to exploit me and to plagiarize my work, while sabotaging my job search and professional persona behind my back (links below).
                    </p>


                    <p className="paragraph">
                        I graduated ten years ago, in 2013. All this time – it turned out - I applied for jobs with credentials that "cannot be confirmed", an award that does not actually exist, and confidential letters of recommendation that misrepresent me to the point of carricature (Popa v McDowell, 2020).
                    </p>

                    <p className="paragraph">
                        The harder I worked to prove my worth, the more I sank, to my abusers’ gain; my work fuels many research careers, just not mine.
                    </p>


                    <p className="paragraph">
                        You allowed this predatory behavior to proliferate to the point where my work conditions have become untanable and my existence – a cruel joke. Now I am slowly succombing to dehidration because I don't know what else to do: I’m out of both resources and ideas.
                    </p>


                    <p className="paragraph">
                        This is unjust and wastefull. I earned my stripes through hard work and sacrifice. My research program is unique, ambitious, and valuable - just ask my plagiarizers, they know almost all about it. The best of me is ahead, not behind. Instead of letting me fade away, embrace me. You’ll be glad you did.
                    </p>

                    <br />

                    <p className="paragraph">Sincerely,</p>


                    <p className="paragraph">Dr. Andrei Popa, PhD</p>
                    <p className="paragraph">Emory University 2013</p>

                </div>
            }




            <div className="letter-images">

            </div>


            <br />

            <footer>

                <p className="footer-link">
                    <b>Dissertation: </b>
                    <a
                        href="https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en"
                    >
                        https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en
                    </a>
                </p>


                <p className="footer-link">
                    <b>Replicant: </b>
                    <a
                        href="https://etd.library.emory.edu/concern/etds/rr171z32k?locale=en"
                    >
                        https://etd.library.emory.edu/concern/etds/rr171z32k?locale=en
                    </a>
                </p>


                <p className="footer-link">
                    <b>Portfolio: </b>
                    <a
                        href="www.andreipopa.dev"
                    >
                        www.andreipopa.dev
                    </a>
                </p>

                <p className="footer-link">
                    <b>Backstory: </b>
                    <a
                        href="https://ap-dev1.github.io/andreipopa515"
                    >
                        https://ap-dev1.github.io/andreipopa515
                    </a>
                </p>

                <p className="footer-link">
                    <b>Youtube: </b>
                    <a
                        href="https://www.youtube.com/@andreipopa-yh2bi"
                    >
                        https://www.youtube.com/@andreipopa-yh2bi
                    </a>
                </p>

                <p className="footer-link">
                    <b>Complaints: </b>
                    <a
                        href="https://www.mediafire.com/file/vq108bgxlsrvuk4/POPA_v_MCDOWELL_2020.pdf/file"
                    >
                        https://www.mediafire.com/file/vq108bgxlsrvuk4/POPA_v_MCDOWELL_2020.pdf/file
                    </a>
                </p>







            </footer>

        </article>
    )
}        
