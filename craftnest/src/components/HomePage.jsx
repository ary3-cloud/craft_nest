import React from 'react'

const HomePage = () => {
  return (
    <div className='row'>
        <marquee behavior="" direction=""><b className='text-info'>Welcome to Craftnest</b></marquee>
        <div className='col-md-6'>
            <img src="images/crochet.jpg" alt="" height={350}/>
            <p>At craftnest crochet work is the most used since our designers come up with different styles every chance they get. We value every artwork and take it serious as it is a money making oppotunity for many</p>
            

        </div>
        <div className='col-md-6'>
            <img src="images/cute1.jpg" alt="" height={350}/>
            <p>We give oppotunities to everyone any talent be it craft or art is very much welcomed to join our nest.</p>

        </div>
    </div>
  )
}

export default HomePage