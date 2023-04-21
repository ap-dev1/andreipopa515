import "./home-page.css";
import profile515 from "./profile515.webp";
import BlogPosts from "../blog/BlogPosts";

export default function HomePage() {
    return <div className="home-page">

        <div>
            <img src={profile515}></img>

            <div>
                <p>
                    Hi, I'm Dr. Andrei Popa. My portfolio is at

                    <a href="https://www.andreipopa.dev/"> https://www.andreipopa.dev</a> .

                    That's where you'll find interactive demos of my research and you'll get a better idea about my background and goals.
                </p>

                <p>
                    Follow me on Twitter, @fixmachina, or check my portfolio for more options.

                    <br />
                    <br />
                    Thank you for stopping by.
                    <br />
                    <br />
                    -a
                </p>
            </div>

        </div>



        <BlogPosts />


    </div>
}