import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <footer>
            <div className="container">
                <div>
                    <div>
                        <img src="/footerlogo.png" alt="" />
                    </div>
                    <div className="description">
                        <p>
                        Praesent dapibus, neque id cursus
                        <br />
                        tortor neque egestas augue, <br />
                        eu vulputate magna eros eu erat
                        </p>
                    </div>
                    <div className="icon-wrap">
                        <div> <Facebook /></div>
                        <div> <Twitter /></div>
                        <div>  <Youtube /></div>
                        <div>  <Instagram /></div>
                        <div>  <Linkedin/></div>
                    </div>
                </div>
                <div className="footerOptions">
                <h3>Useful Links</h3>
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
                <div className="footerOptions">
                <h3>
                    Meet Kinsley
                </h3>
                <ul>
                         <li><Link to={'/'}>FAQ</Link></li>
                        <li><Link to={'/about'}>Gallery</Link></li>
                        <li><Link to={'/rooms'}>Menu</Link></li>
                        <li><Link to={'/restaurent'}>Restaurent</Link></li>
                </ul>
                </div>
                <div className="footerOptions">
                <h3>Instagram</h3>
                {/* <ul>
                    <li>
                    <a href="#">Sign in</a>
                    </li>
                    <li>
                    <a href="#">View Cart</a>
                    </li>
                    <li>
                    <a href="#">My wishlist</a>
                    </li>
                    <li>
                    <a href="#">Track My Order</a>
                    </li>
                    <li>
                    <a href="#">Help</a>
                    </li>
                </ul> */}
                </div>
            </div>
            <div className="contianer">
                {/* <div>
                <p>Copyright © 2025 Molla Store. All Rights Reserved.</p>
                </div> */}

            </div>
            </footer>
    </div>
  )
}

export default Footer
