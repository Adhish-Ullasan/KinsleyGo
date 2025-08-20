import React from 'react'

const AboutCard = () => {
  return (
    <div className='container aboutCard'>
      <div>
        <div>
            <img src="/aboutcard/about-t1.jpg" alt="" />
        </div>
        <div className='experience'>
            <h3>We have 17+ years of Experience</h3>
            <p>Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit <br />
             ea delectus, sed voluptatem. Laborum accusantium libero commodi <br />
              id officiis itaque esse adipisci, necessitatibus asperiores, illo odio.
            </p>
                <button className='primaryButton'>More about us</button>
        </div>
      </div>
      <div>
            <div className='adventure'>
                <h3>Start your Amazing Adventure!</h3>
                <p>Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit <br />
                ea delectus, sed voluptatem. Laborum accusantium libero commodi <br />
                id officiis itaque esse adipisci, necessitatibus asperiores, illo odio.
            </p>
                    <button className='primaryButton'>More about us</button>
            </div>
            <div>
                <img src="/aboutcard/about-t2.jpg" alt="" />
            </div>
      </div>
    </div>
  )
}

export default AboutCard

