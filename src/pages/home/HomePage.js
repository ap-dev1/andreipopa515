import "./home-page.css";
import profile515 from "./profile515.webp";
import { getBlogData } from "../blog/blogData";

export default function HomePage() {

    const blogPost = getBlogData().find((item) => {
        return (
            item.title === "Fasting to live"
        )
    })


    return <div className="home-page">

        <div>
            <img src={profile515}></img>

            <div style={{ fontSize: ".9rem" }}>
                <p>
                    Hi, I'm Dr. Andrei Popa. My portfolio is at

                    <a href="https://www.andreipopa.dev/"> https://www.andreipopa.dev</a> .

                    There you'll find interactive demos of my research and you'll get a better idea about my background and long-term goals. The long-term, however, goes through an ugly present, and I need all the support I can get.
                </p>

                <div>

                    {blogPost.text.slice(1).map(paragraph => {
                        return (
                            <p className="paragraph">{paragraph}</p>
                        )
                    })}
                </div>
            </div>

        </div>





    </div>
}