import image from "../../assets/img/poke.png"
import "../../assets/css/NavBar.css"
import { Link, Outlet } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <header className="header">
                <nav className="navbar" >
                    <div className="container-fluid">
                        <Link style={{ display: "flex" }} to={"/"} ><img src={image} className="header-logo" alt="PokeApi" /></Link>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}




export default NavBar