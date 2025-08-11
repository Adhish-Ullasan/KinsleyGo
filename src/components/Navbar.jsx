import { Link } from "react-router-dom"

const navBar = () => {

    return(
        <header className="container">
            <div>
                <div>
                    <img src="/kinsleylogo.png" alt="logo" />
                </div>
                <div className="pages">
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/rooms'}>Rooms</Link></li>
                        <li><Link to={'/restaurent'}>Restaurent</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/shop'}>Shop</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default navBar

