
import React from "react";




export default function Equifinality() {

    return (

        < div >
            <h4>{sectionData.title}</h4>

            {
                sectionData.text.map(txt => {
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
                maxWidth: "900px",
                margin: "auto"
            }}>
                {sectionData.media.map(shmekl => {
                    return (
                        <img
                            alt={shmekl.name}
                            src={shmekl.image}
                            title={shmekl.name}
                            style={{
                                maxWidth: "250px",
                                margin: "2px"
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
                {sectionData.caption}
            </p>

        </div>





    )
}