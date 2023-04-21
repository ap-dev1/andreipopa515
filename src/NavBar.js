import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {

    return <nav className="nav">
        <Link to="/" className="site-title">Fix Machina</Link>

        <ul>
            {/* <CustomLink to="/">Home</CustomLink> */}
            <CustomLink to="/theory" >Theory</CustomLink>
            <CustomLink to="/service">Service</CustomLink>
            <CustomLink to="/adhd">adhd</CustomLink>
            <CustomLink to="/etbd">etbd</CustomLink>
            <CustomLink to="/sparc">SpARC</CustomLink>
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