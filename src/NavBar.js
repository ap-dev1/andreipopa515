import "./nav-bar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {

    return <nav className="nav"
    // style={{
    //     fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    // }}
    >
        {/* <Link to="/" className="site-title">Home</Link> */}

        <ul>

            {/* <CustomLink to="/">Home</CustomLink> */}

            <CustomLink to="/">Home</CustomLink>

            <CustomLink to="/backstory">Backstory
                <sup className="new">
                    Aug 17
                </sup >
            </CustomLink>

            <CustomLink to="/my-emory-experience">Emory
                <sup className="new">
                    Aug 8
                </sup >
            </CustomLink>

            <CustomLink to="/faq">FAQ
                <sup className="new">
                    Aug 8
                </sup >
            </CustomLink>



            <CustomLink to="/adhd">ADHD</CustomLink>

            {/* <CustomLink to="/theory" >Theory</CustomLink> */}
            <CustomLink to="/service">Service</CustomLink>
            <CustomLink to="/etbd">etbd</CustomLink>
            <CustomLink to="/sparc">SpARC</CustomLink>
            {/* <CustomLink to="/blog">Blog</CustomLink> */}

            <CustomLink to="/letters">Letters
                <sup className="new">
                    Aug 27
                </sup >
            </CustomLink>

            <CustomLink to="/links">Contact</CustomLink>
            {/* <CustomLink to="/imperfect-automata">Automata</CustomLink> */}

        </ul>
    </nav>
}



function CustomLink({ to, children, ...props }) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} >{children}</Link>
        </li>
    )
}