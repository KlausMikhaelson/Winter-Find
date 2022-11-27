import React from 'react'
import Add_1 from "../assets/addlisting-1.jpg" 
import Add_2 from "../assets/addlisting-2.jpg" 
import Add_3 from "../assets/addlisting-3.jpg" 
import Add_4 from "../assets/addlisting-4.jpg" 
import Add_5 from "../assets/addlisting-5.jpg" 
import Add_6 from "../assets/add_listing6.jpeg" 

import "./Adds.css"

const Adds = () => {
  return (
    <div className='containerofaddvertisecard'>
        <div className='addvertisecard'>
          <span><img src={Add_1} alt="parking slot image" /></span>
          <span className='descriptionofadvertisement'>
          <p>Price: 10$/day</p>
          <a href='https://goo.gl/maps/B4HcrW59qRAmfDkSA' target="_blank">
          <p>Location: New Apt, Regina, Sask</p>
          </a>
          <a href='/contact'><button className="button mt-4">Contact</button></a> 
          </span>
        </div>
        <div className='addvertisecard'>
          <span><img src={Add_2} style={{height:  "220px"}} alt="parking slot image" /></span>
          <span className='descriptionofadvertisement'>
          <p>Price: 10$/day</p>
          <a href='https://goo.gl/maps/UFie7z7LD6aaVR7H9' target="_blank">
          <p>Location: HillsDale, Regina, Sask</p>
          </a>
          <a href='/contact'><button className="button mt-4">Contact</button></a> 
          </span>
        </div>
        <div className='addvertisecard'>
          <span><img style={{height: "220px"}} src={Add_3} alt="parking slot image" /></span>
          <span className='descriptionofadvertisement'>
          <p>Price: 10$/day</p>
          <a href='https://goo.gl/maps/B4HcrW59qRAmfDkSA' target="_blank">
          <p>Location: New Apt, Regina, Sask</p>
          </a>
          <a href='/contact'><button className="button mt-4">Contact</button></a> 

          </span>
        </div>
        <div className='addvertisecard'>
          <span><img src={Add_4} alt="parking slot image" /></span>
          <span className='descriptionofadvertisement'>
          <p>Price: 10$/day</p>
          <a href='https://goo.gl/maps/B4HcrW59qRAmfDkSA' target="_blank">
          <p>Location: New Apt, Regina, Sask</p>
          </a>
          <a href='/contact'><button className="button mt-4">Contact</button></a> 

          </span>
        </div><div className='addvertisecard'>
          <span><img src={Add_5} alt="parking slot image" /></span>
          <span className='descriptionofadvertisement'>
          <p>Price: 10$/day</p>
          <a href='https://goo.gl/maps/B4HcrW59qRAmfDkSA' target="_blank">
          <p>Location: New Apt, Regina, Sask</p>
          </a>
          <a href='/contact'><button className="button mt-4">Contact</button></a> 

          </span>
        </div><div className='addvertisecard'>
          <span><img src={Add_6} alt="parking slot image" /></span>
          <span className='descriptionofadvertisement'>
          <p>Price: 10$/day</p>
          <a href='https://goo.gl/maps/B4HcrW59qRAmfDkSA' target="_blank">
          <p>Location: New Apt, Regina, Sask</p>
          </a>
          <a href='/contact'><button className="button mt-4">Contact</button></a> 

          </span>
        </div>
    </div>
  )
}

export default Adds