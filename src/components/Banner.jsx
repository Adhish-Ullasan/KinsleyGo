import { Star } from 'lucide-react';

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
            </div>
        </section>
    )
}

export default Banner