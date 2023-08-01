import "./faq-page.css"
import React from "react"
import { faqData } from "./faqData";

function FaqPage() {
    return (
        <section className="faq">
            <h1>Frequently Asked Questions</h1>
            {faqData.map((entry) => {
                return (
                    <article>
                        <h2>{entry.question}</h2>
                        {entry.answer.map((item) => {
                            return (
                                <p>{item}</p>
                            )
                        })}
                    </article>
                )
            })}
        </section>
    )
}



export default FaqPage;