import "./blog.css";
import CollapsibleEntry from "./CollapsibleEntry";
import { getBlogData } from "./blogData";

export function BlogPosts() {
    const blogData = getBlogData();

    return <div className="blog-posts">
        Click the title to expand
        {blogData.map(item => {
            return (

                <CollapsibleEntry data={item} />

            )
        })}
    </div>
}

export default BlogPosts;