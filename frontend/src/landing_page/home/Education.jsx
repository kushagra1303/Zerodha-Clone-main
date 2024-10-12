import React from 'react'

function Education() {
  return (
    <div className='container mt-5 px-5'>
      <div className="row p-5">
      <div className="col-6 ">
          <div className="mt-5">
          <img style={{width:"80%",marginBottom:"1rem"}} src="media/images/education.svg" alt="" />
          </div>
        </div>
        <div className="col-6 p-5 HomeTextBlocks">
          <h1 className='mb-5' style={{fontSize:"2.1rem",opacity:"0.85"}}>Free and open market education</h1>

            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="/" className='mx-2 m-5'>Varsity   <i class="fa-solid fa-arrow-right"></i></a>
            
            <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="/" className='mx-2'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        
      </div>
    </div>
  )
}

export default Education