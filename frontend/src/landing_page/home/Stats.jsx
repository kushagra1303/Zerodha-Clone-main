import React from 'react'

function Stats() {
  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-6 p-5 HomeTextBlocks">
          <h1 className='mb-5' style={{fontSize:"2.3rem",opacity:"0.85"}}>Trust with confidence</h1>

            <h3>Customer-first always</h3>
            <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
         
          
            <h3>No spam or gimmicks</h3>
            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          
            <h3>The Zerodha universe</h3>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>
          
            <h3>Do better with money</h3>
            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          
        </div>
        <div className="col-6 ">
          <div className="mt-5">
          <img style={{width:"100%",marginBottom:"1rem"}} src="media/images/ecosystem.png" alt="" />
          </div>
          
          <div className="text-center">
            <a href="/" className='mx-5'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a href="/">Try Kite demo <i class="fa-solid fa-arrow-right"></i> </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats