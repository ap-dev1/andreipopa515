const NavLinks = (props) => {
    return (
        <ul>


            <li onClick={props.closeMobileMenu}>
                <a href="/">Home</a>
            </li>
            <li onClick={props.closeMobileMenu}>
                <a href="/adhd">Adhd</a>
            </li>
            <li onClick={props.closeMobileMenu}>
                <a href="/service">Service</a>
            </li>
            <li onClick={props.closeMobileMenu}>
                <a href="/sparc">SpARC</a>
            </li>
            <li onClick={props.closeMobileMenu}>
                <a href="/etbd">Etbd</a>
            </li>
            <li onClick={props.closeMobileMenu}>
                <a href="/blog">Blog</a>
            </li>
            <li onClick={props.closeMobileMenu}>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    )
}

export default NavLinks;