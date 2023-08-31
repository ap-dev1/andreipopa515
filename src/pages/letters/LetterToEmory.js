import "./letter-to-emory.css"
import React, { useState } from "react"
import parse from "html-react-parser"
import unableToConfirm from "./verification-certificate-210677797.pdf"
import fakeAward from "./teacher-scholar-award-clearer.jpg"
import letterJack from "./letter-jack-mcdowell.pdf"

import cvpdf from "./popa-cv.pdf"
import researchpdf from "./popa-research-statement.pdf"
import teachingpdf from "./popa-teaching-philosophy-portfolio.pdf"
// import cv from "./popa-cv.pdf"

export default function LetterToEmory(props) {
    const [open, setopen] = useState(true)

    return (
        <article className="letter-to-emory">

            <header
                // className="toEmory" 
                onClick={() => setopen(!open)}
            >
                <div className="thumbnail">
                    <img ref={props.thumbnail ? props.thumbnail : null}></img>
                </div>

                <div
                    className="info"
                >
                    <p
                    // className="meta"
                    > To my Alma Mater, Emory University</p>
                    {/* <h1
                    >Dear Alma Mater,</h1> */}
                    <p
                    // className="date"
                    >August 26, 2023</p>
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
                        Dear Alma Mater,
                    </p>

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


                    <div className="letter-signature">
                        <p >Sincerely,</p>
                        <p >Dr. Andrei Popa, PhD</p>
                        <p >Emory University 2013</p>
                    </div>




                    <div className="letter-links"  >

                        <p >
                            <b>Dissertation: </b>
                            <a
                                href="https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en"
                            >
                                https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en
                            </a>
                        </p>


                        <p >
                            <b>Replicant: </b>
                            <a
                                href="https://etd.library.emory.edu/concern/etds/rr171z32k?locale=en"
                            >
                                https://etd.library.emory.edu/concern/etds/rr171z32k?locale=en
                            </a>
                        </p>


                        <p >
                            <b>Portfolio: </b>
                            <a
                                href="www.andreipopa.dev"
                            >
                                www.andreipopa.dev
                            </a>
                        </p>

                        <p >
                            <b>Backstory: </b>
                            <a
                                href="https://ap-dev1.github.io/andreipopa515"
                            >
                                https://ap-dev1.github.io/andreipopa515
                            </a>
                        </p>

                        <p >
                            <b>Youtube: </b>
                            <a
                                href="https://www.youtube.com/@andreipopa-yh2bi"
                            >
                                https://www.youtube.com/@andreipopa-yh2bi
                            </a>
                        </p>

                        <p >
                            <b>Complaints: </b>
                            <a
                                href="https://www.mediafire.com/file/vq108bgxlsrvuk4/POPA_v_MCDOWELL_2020.pdf/file"
                            >
                                https://www.mediafire.com/file/vq108bgxlsrvuk4/POPA_v_MCDOWELL_2020.pdf/file
                            </a>
                        </p>
                    </div>



                    <div
                        className="letter-images"
                        style={{ textAlign: "center" }}
                    >

                        <p className="object-caption">
                            <b>Resource 1 of 3.</b> Note that I learned about <b>National Student Clearinghouse</b> three months after I submitted the second research misconduct complaint with Emory University, in February 2020 (Popa v McDowell, link above), which is why is not included.
                            <br /><br />
                            <a href="">
                                link to website
                            </a>
                            <br /><br />
                            <b>Everything about  is shady: </b>how it emerged; where is located; its emphasis on being impervious to class action lawsuits. <br />

                            I will make a Youtube video on this, but for now notice two things:

                            <ul>
                                <li>
                                    See the <b>disclaimer </b> in the footer, where they specify that they relay the request to the institution and report back what the institution replies. This means that <b>they're not reducing costs</b>, how could they? The institution responds to every request, just not directly. This means that their reason to exist - <i>raison d'etre</i> if you will - is something else.
                                </li>

                                <li>
                                    Verifying a record can be an <b>infinit loop</b>, since the response does not contain the information originally provided and does not specify what information is actually required.
                                </li>
                            </ul>

                            Considering that the company was created in the 90s, it looks like a bad actor injected in society to rig the game on behalf of universities, while keeping them legally safe.

                        </p>
                        <object
                            data={unableToConfirm}
                            type="application/pdf"
                            width="100%"
                            height="400"
                        ></object>


                        <figure>
                            <figcaption>
                                <b>Resource 2 of 3.</b> In 2011-2012 I helt the <b>ORDER fellowship</b>. At the end of it <b>Professor David Lynn </b>placed in my hands the object showed in the image below: an award that does not actually exist. It's reason was to undermine my job application process, alongside a PhD degreee that cannot be confirmed (above) and a sabotaging letter of recommendation from my mentor (below)

                                <br />
                                <br />
                                See also my portfolio, at <a href="www.andreipopa.dev">andreipopa.dev</a> {'>'} teaching section {'>'} ORDER seminar (On Recent Discoveries by Emory Researchers).

                            </figcaption>

                            <img
                                src={fakeAward}
                                alt="a made up award, just for me"
                                // height="400"
                                width="100%"

                            ></img>
                        </figure>


                        <p className="object-caption">
                            <b>Resource 3 of 3.</b> Below is my graduate studies advisor's <b>confidential letter of reccommendation</b>. I obtained it via sunshine laws from a university I applied to. When reading it, try to identify
                            <ul>
                                <li><b>if Jack McDowell was my graduate advisor for six years, 2007-2013.</b> He specified that he served on my committees, but did not actually acknowledged me as his graduate student.</li>
                                <li><b>what I work on.</b> He did not mention anything tangible. He did suggest that we did not work together, just two of us, on anything, which is false. We worked, just the two of us, on four peer-reviewed publications.</li>
                                <li><b>that I ran an innovative, two-year human research study as a Principal Investigator</b>, with Jack McDowell and Olivia Calvin (Nicholas Calvin back then) as co-investigators. </li>
                                <li><b>if I have relevant teaching experience.</b> When the letter was written I had already taught my own coursse on learning at Emory, I held the ORDER fellowship between 2011-12 at the end of which I was handed an award that does not actually exist (the one above), I had three years full time teaching with GSU, I TA-ed for him three semesters and for Scott O. Lilienfeld one semester, and I taught labs on Statistics and Research methods as part of my graduate program requirements.</li>
                            </ul>

                        </p>
                        <object
                            data={letterJack}
                            type="application/pdf"
                            width="100%"
                            height="400"
                        ></object>


                        <p className="object-caption">
                            <b>Curriculum Vitae</b> Compare with the letter of reccommendation above. Note the teaching award on the first page. Imagine a potential employer that reads these application materials and learns that the degree cannot be confirmed and that the award is non-existent. And that's just the first page, without reading the letter.
                        </p>
                        <object
                            data={cvpdf}
                            type="application/pdf"
                            width="100%"
                            height="400"
                        ></object>

                        <p className="object-caption">
                            <b>Research statement</b>
                        </p>
                        <object
                            data={researchpdf}
                            type="application/pdf"
                            width="100%"
                            height="400"
                        ></object>

                        <p className="object-caption">
                            <b>Teaching philosophy and portfolio</b>
                        </p>
                        <object
                            data={teachingpdf}
                            type="application/pdf"
                            width="100%"
                            height="400"
                        ></object>
                    </div>


                </div>
            }















        </article >
    )
}        
