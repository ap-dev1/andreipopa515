import "./adhd-footer.css";
import React from "react";

export default function AdhdFooter() {
    return (
        <>
            <footer className="adhd-footer"
                style={{ marginTop: "1.5rem" }}
            >

                <p className="author-note"  >
                    <b>Author note. </b>
                    {"This research was conducted by the author, as part of their dissertation project (Popa, 2013). It is supporting material for the thesis outlined under Theory: Popa, A. (2019). Psychology 2.0: The Emergence of Individuality. https://doi.org/10.31234/osf.io/m87an. It provides an example of how bio-sociocultural variables work together to produce ADHD symptoms in living organisms.  Parts of this work were discussed in: Popa (2013, 2014, 2015, 2016, 2017); Popa & McDowell (2011); Popa, Calvin, & McDowell (2012, 2013, 2014); in Popa & McDowell (2016); in McDowell (2019; p.141-142); in Calvin's dissertation (2017; p. 10-11, etc.), in Hackett's dissertation (2019)."}
                </p>

                <p className="author-contact"
                    style={{
                        textAlign: "left",
                        maxWidth: "500px",
                        margin: "auto",
                        marginTop: ".5rem",

                    }}
                >
                    <b>Contact information</b><br />
                    andreipopa515@gmail.com<br />
                    www.andreipopa.dev<br />
                    https://ap-dev1.github.io/andreipopa515/<br />
                    1165 Briarcliff CT NE, apartment 5, Atlanta, GA, 30306
                </p>

            </footer>
        </>
    )
}