import React from 'react'

 function Home() {
  return (
    <div>
        <div className="introduction flex-with-center" style={{backgroundImage: `url('./introbg.svg')`}}>
          <div>
              <h1>RAVI GORDON</h1>
              <div className="intro-content d-flex justify-content-between">
                 <p>Front End Web Developer<br /> Full Stack Javascript Developer<br /> Student at The School of Code<br />looking to chnage my life through code</p>
                 <button className='primary-button font-bold w-50'>Get Started</button> 
              </div>
          </div>
        </div>
    </div>
  )
}
export default Home