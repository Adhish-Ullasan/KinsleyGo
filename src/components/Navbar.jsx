import { Link } from "react-router-dom"

const navBar = () => {

    return(
        <header className="container">
            <div>
                <div className="logo-wrapper">
                    <img src="/kinsleylogo.png" alt="logo" />
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
                        Book now
                    </button>
                </div>
            </div>
        </header>
    )
}

export default navBar

