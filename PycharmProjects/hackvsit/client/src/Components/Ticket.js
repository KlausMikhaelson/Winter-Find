import React from 'react';
import "../App.css"

const Ticket = () => {
  const slots = document.getElementsByClassName("slots")
  document.addEventListener('click', function(){
      this.documentElement.setAttribute("class", "occupied")
  })
  return (
    <>
    <div>
      <h1 class="header">Select your parking slot</h1>
      <div className='reference'>
      <span className='occupied'>. occupied</span>
      <span className='Available'>. Available</span>
      </div>
      {/* <span>. </span> */}
      <div class="slots-collection">
      <span class="slots occupied">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      <span class="slots">.</span>
      </div>
    </div>
    </>
  )
}

export default Ticket