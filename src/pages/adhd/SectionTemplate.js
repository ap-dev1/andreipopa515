import "./section-template.css"
import React, { useState } from "react";
// import CollapsibleSection from "./CollapsibleSection";
import parse from 'html-react-parser';


export default function SectionTemplate(sectionData) {
    const [open, setopen] = useState(false)

    return (
        <>


            <section className="adhd-section collapsible">

                <h4
                    className="toggle"
                    onClick={() => setopen(!open)}
                >
                    {parse(sectionData.sectionData.title)}
                </h4>


                {open
                    &&
                    <div className="content">
                        {
                            sectionData.sectionData.text.map(txt => {
                                return (
                                    <p
                                        style={{
                                            width: "500px",
                                            margin: "10px auto",
                                            textAlign: "left",
                                        }}
                                    >
                                        {parse(txt)}
                                    </p>
                                )
                            })
                        }


                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            maxWidth: "600px",
                            margin: "auto"
                        }}>
                            {sectionData.sectionData.media.map(shmekl => {
                                return (
                                    <img
                                        alt={shmekl.name}
                                        src={shmekl.image}
                                        title={shmekl.name}
                                        style={{
                                            maxWidth: "280px",
                                            margin: "5px auto"
                                        }}
                                    >

                                    </img>
                                )
                            })}
                        </div>

                        <p
                            style={{
                                width: "500px",
                                margin: "10px auto",
                                textAlign: "left",
                            }}
                        >
                            {sectionData.sectionData.caption ? parse(sectionData.sectionData.caption) : sectionData.sectionData.caption}
                        </p>
                    </div>
                }





            </section>
        </>
    )
}