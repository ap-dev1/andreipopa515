import classes from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { CgMenuRound } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
    const [open, setOpen] = useState(true)

    const closeMobileMenu = (event) => {
        event.preventDefault()
        setOpen(false)
    }

    return (
        <nav className={classes.MobileNavigation}>

            <CgMenuRound
                className={classes.Hamburger}
                size="40px"
                color="white"
                onClick={() => setOpen(!open)}
            />

            {open && <NavLinks closeMobileMenu={closeMobileMenu} />}
        </nav>


    )
}

export default MobileNavigation;