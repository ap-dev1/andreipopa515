import "./emory-experience.css";
import React from "react"
import parse from "html-react-parser"
import { emory2005, emory2007 } from "./emoryData";
import EmoryTemplate from "./EmoryTemplate"


export default function EmoryExperience() {
    return (
        <section className="emory">
            <header>
                <h1>My Emory experience</h1>
                <p>
                    Everything I know from others may or may not be true. I'm simply repeating what I was told.
                </p>
                <p>Resources: <a>Google drive</a>
                </p>
                <p>Emory complaints: <a>Service</a>
                </p>
            </header>

            <EmoryTemplate
                title={emory2005.title}
                date={emory2005.date}
                tags={emory2005.tags}
                text={emory2005.text}
                thumbnail={emory2005.thumbnail}
            />
            <EmoryTemplate
                title={emory2007.title}
                date={emory2007.date}
                tags={emory2007.tags}
                text={emory2007.text}
                thumbnail={emory2007.thumbnail}
            />

            <article>
                <h1>2014-2018, the con continues</h1>
            </article>

            <article>
                <h1>2018-2020, dead ends everywhere</h1>
            </article>

            <article>
                <h1>2020-2023, COVID and beyond</h1>
                <p>Little by little I realize that I'm confined to an artificial world, in which my credentials are not being corroborated by my Alma Mater, essentially leaving me with a 17-year gap in my CV.</p>
            </article>
        </section>
    )
} 