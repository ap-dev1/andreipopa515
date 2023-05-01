import "./blog.css";
import { getBlogData } from "./blogData";

export default function BlogPosts() {
    const blogData = getBlogData();

    return <div className="blog-posts">
        {blogData.map(item => {
            return (

                <article className="post">
                    <h1 className="title">{item.title ? item.title : null}</h1>
                    <h2 className="date">{item.date ? item.date : null}</h2>

                    <div className="cutoff-text-v2">
                        {item.text.map(paragraph => {
                            return (
                                <p className="text">{paragraph}</p>
                            )
                        })}
                    </div>

                    <input className="expand-cbx" type="checkbox"></input>
                </article>
            )
        })}
    </div>
}