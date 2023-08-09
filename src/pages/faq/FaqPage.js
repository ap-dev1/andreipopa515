import React from "react"
import { faqData } from "./faqData";
import TemplateFaq from "./TemplateFaq";

function FaqPage() {
    return (
        <section className="faq-section">

            {/* <div>
                <h1>Frequently Asked Questions</h1>
            </div> */}


            {faqData.map((entry) => {
                return (
                    <TemplateFaq
                        question={entry.question}
                        answer={entry.answer}
                    />
                )
            })}
        </section>
    )
}

export default FaqPage;