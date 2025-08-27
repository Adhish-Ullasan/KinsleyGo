import { Link } from "react-router-dom"
import { Bookmark, Handbag } from 'lucide-react';

const Navbar = () => {

    return(
        <header id="userHeader">
            <div>
                <div className="logo-wrapper">
                    <img id="mainlogo" src="/kinsleylogo.png" alt="logo" />
                </div>
                <div className="pages">
                    <ul>
                        <div>
                            <li><Link to={'/'}>Home</Link></li>
                        </div>
                        <div>
                            <li><Link to={'/About'}>About</Link></li>
                        </div>
                        <div>
                            <li><Link to={'/Rooms'}>Rooms</Link></li>
                        </div>
                        <div>
                            <li><Link to={'/Restaurent'}>Restaurent</Link></li>
                        </div>
                        <div>
                            <li><Link to={'/Blog'}>Blog</Link></li>
                        </div>
                        <div>
                            <li><Link to={'/Shop'}>Shop</Link></li>
                        </div>
                        <div>
                            <li><Link to={'/Contact'}>Contact</Link></li>
                        </div>
                    </ul>
                </div>
                <div>
                    <button className="primaryButton" type="button">
                           <Bookmark /> <p>Book now</p>
                    </button>
                </div>
                <div className="bag">
                    <Handbag />
                </div>
            </div>
        </header>
    )
}

export default Navbar
