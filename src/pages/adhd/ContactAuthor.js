import "./section-template.css"
import React, { useState } from "react";
// import CollapsibleSection from "./CollapsibleSection";
import parse from 'html-react-parser';




export default function ContactAuthor(sectionData) {
    const [open, setopen] = useState(false)

    return (
        <>


            <section className="adhd-section collapsible">

                <h4
                    className="toggle"
                    onClick={() => setopen(!open)}
                >
                    {"Contact author"}
                </h4>


                {open
                    &&
                    <div className="content">
                        <p
                            style={{
                                width: "500px",
                                margin: "10px auto",
                                textAlign: "left",
                                fontSize: ".8rem"
                            }}
                        >
                            www.andreipopa.dev<br />
                            andreipopa515@gmail.com<br />
                            andrei.popa.dev@gmail.com<br />
                            +1 404 484 8368<br />
                            1165 Briarcliff CT NE, apartment 5, Atlanta, GA, 30306
                        </p>


                    </div>
                }





            </section>
        </>
    )
}






