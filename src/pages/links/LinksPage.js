import "./links-page.css";
import React from "react";
import infoContact from "./infoContact";
import greyAndrei from "./346474668_741310824362862_2634772592078921806_n.jpg"
// profile picture
// contact data


function LinksPage() {

    const goToLink = (e) => {
        e.preventDefault();
        let a = e.currentTarget.name;
        window.open(a, "_blank");
    };

    return (
        <section className="links-section">

            <header className="links-header">
                <img src={greyAndrei} alt="Dr. Andrei Popa, profile picture" width="200px"></img>

                <div className="emails">
                    <ul type="none">
                        <li>Dr. Andrei Popa</li>
                        <li>andreipopa515@gmail.com</li>
                        <li>andrei.popa.dev@gmail.com</li>
                        <li>+1 (404) 484-8368</li>
                        <li>1165 Briarcliff Court NE, apt 5</li>
                        <li>Atlanta, GA, 30306</li>
                    </ul>


                    {/* <button
                        id="btnEmail"
                        className="btnContactLink"
                        title={"click to copy text"}
                        onClick={() =>
                            navigator.clipboard
                                .writeText("andreipopa515@gmail.com")
                                .then(() => alert("Copied to clipboard. Use it only for good."))
                        }
                    >
                        andreipopa515@gmail.com
                    </button>

                    <button
                        id="btnEmail"
                        className="btnContactLink"
                        title={"click to copy text"}
                        onClick={() =>
                            navigator.clipboard
                                .writeText("andrei.popa.dev@gmail.com")
                                .then(() => alert("Copied to clipboard. Use it only for good."))
                        }
                    >
                        andrei.popa.dev@gmail.com
                    </button> */}


                </div>
            </header>


            <article className="links-container">
                <ul type='none'>
                    {infoContact.slice(1).map((link, index) => (
                        <li
                            title={link.info ? link.info : null}
                            before={`${link.name}: `}
                        >
                            <a href={link.url}>{link.url}</a>


                        </li>
                    ))}
                </ul>
            </article>

            {/* <footer className="links-footer">end of page</footer> */}

        </section>
    )
}

export default LinksPage;