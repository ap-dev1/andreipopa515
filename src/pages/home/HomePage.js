import "./home-page.css";
import profile515 from "./profile515.webp";
import { getBlogData } from "../blog/blogData";
import parse from "html-react-parser"


export default function HomePage() {

    const blogPost = getBlogData().find((item) => {
        return (
            item.title === "Fasting to live"
        )
    })


    return <article className="home-page">

        <div>
            {/* <img src={profile515}></img> */}

            <div>
                <p>Welcome stranger, I'm Dr. Andrei Popa.</p>
                <p>
                    For my portfolio, visit

                    <a
                        href="https://www.andreipopa.dev/"
                        target="_blank"
                    > https://www.andreipopa.dev</a>

                    {/* There you'll find interactive demos of my research and you'll get a better idea about my background and goals. */}
                </p>

                <p>
                    This site was published at
                    andreipopa515.com since 2014.
                    {/* and maybe will be again. */}
                    <a href="http://web.archive.org/web/*/www.andreipopa515.com*"
                        target="_blank"
                    > http://web.archive.org/web/*/www.andreipopa515.com</a>.
                </p>

                <p>
                    It's a work in progress, so gets updated often. Thank you for your patience and interest.
                </p>


                <p>
                    Sincerely,<br /><br /><br />
                    Andrei
                </p>


                {/* <p>
                    This is, among other things, an indictment of my Alma Mater, Emory University, and my academic advisors, Phil Wolff and Jack McDowell. What they have done to me is legally problematic and morally repugnant (albeit lucrative!). Is not too late to fix it though and I hope they will: the best of me is ahead, not behind.
                </p> */}



                <p>


                </p>
                <div>

                </div>
            </div>

        </div>





    </article>
}