import React, { useState } from "react";
import { getAdhdRefs } from "./adhdRefs";


export default function AdhdReferences() {
    const [open, setopen] = useState(false)
    const adhdRefs = getAdhdRefs()

    return (
        <>

            <section
                // className="collapsible-section" 
                className="collapsible"

            >

                <h4
                    className="toggle"
                    onClick={() => setopen(!open)}
                // style={{
                //     textAlign: "center",
                //     backgroundColor: "darkslategrey",
                //     color: "whitesmoke",
                //     paddingBottom: "3px",
                //     maxWidth: "500px",
                //     margin: "auto",
                //     fontSize: "1.2rem",
                //     fontWeight: "500",
                // }}
                >
                    References
                </h4>


                {open
                    &&
                    <div
                        className="references"
                        style={{
                            margin: "auto",

                        }}
                    >
                        {adhdRefs.map(item => {
                            return (
                                <p
                                    style={{
                                        textIndent: "-1.5rem",
                                        paddingLeft: "1.5rem",
                                        width: "500px",
                                        textAlign: "left",
                                        textAlign: "justify",
                                        textJustify: "inter-word",
                                        margin: ".75rem auto",
                                        fontSize: ".8rem",
                                    }}
                                >{item}</p>
                            )
                        })}
                    </div>}

            </section>
        </>
    )
}