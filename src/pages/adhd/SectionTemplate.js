import "./section-template.css"
import React, { useState } from "react";
// import CollapsibleSection from "./CollapsibleSection";


export default function SectionTemplate(sectionData) {
    const [open, setopen] = useState(false)

    return (
        <>


            <section className="adhd-section collapsible">

                <h4
                    className="toggle"
                    onClick={() => setopen(!open)}
                >
                    {sectionData.sectionData.title}
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
                                        {txt}
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
                            {sectionData.sectionData.caption}
                        </p>
                    </div>
                }





            </section>
        </>
    )
}