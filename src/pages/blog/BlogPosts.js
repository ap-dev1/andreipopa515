import "./blog.css";
import CollapsibleEntry from "./CollapsibleEntry";
import { getBlogData } from "./blogData";
import PostTemplate from "./PostTemplate";

export function BlogPosts() {
    const blogData = getBlogData();

    return (
        <div className="blog-posts">


            {blogData.map(item => {
                return (

                    <PostTemplate
                        title={item.title}
                        date={item.date}
                        tags={item.tags}
                        text={item.text}
                        thumbnail={item.thumbnail}
                    />

                )
            })}
        </div>
    )
}

export default BlogPosts;