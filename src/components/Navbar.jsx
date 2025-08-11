import { Link } from "react-router-dom"
import { Bookmark, Handbag } from 'lucide-react';

const navBar = () => {

    return(
        <header className="container">
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
                            <li><Link to={'/about'}>About</Link></li>
                        </div>
                        <div>
                            <li><Link to={'/rooms'}>Rooms</Link></li>
                        </div>
                        <div>
                            <li><Link to={'/restaurent'}>Restaurent</Link></li>
                        </div>
                        <div>
                            <li><Link to={'/blog'}>Blog</Link></li>
                        </div>
                        <div>
                            <li><Link to={'/shop'}>Shop</Link></li>
                        </div>
                        <div>
                            <li><Link to={'/contact'}>Contact</Link></li>
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

export default navBar

