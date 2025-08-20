import { Star,Search } from 'lucide-react';
import { featuresData } from '../data/FeaturesData';
import { FeaturesCard } from './FeaturesCard';


const Banner = () => {

    return(
        <section id="homeBanner">
            <div className='container'>
                <div className='rating'>
                    <ul>
                        <li className='star'>  <Star /></li>
                        <li className='star'>  <Star /></li>
                        <li className='star'>  <Star /></li>
                        <li className='star'>  <Star /></li>
                        <li className='star'>  <Star /></li>
                    </ul>
                </div>
                <div className='welcomeQuote'>
                    <h1>
                        Welcome to Kinsley
                    </h1>
                    <p>
                        Deleniti nostrum laboriosam praesentium quasi quam voluptate.
                    </p>
                </div>
                <div className='Slider'>
                    <div>Check-in</div>
                    <div>Check-out</div>
                    <div>Adults</div>
                    <div>Children</div>
                    <div className='searchIcon'>
                        <button>
                            <Search />
                        </button>
                    </div>
                </div>
                <div className='Scroll'>
                    <p>Scroll Down</p>
                </div>
                <div className='Features'>
                    {
                            featuresData.map((item)=><FeaturesCard data={item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Banner