import React from 'react'
//import Card from 'react-bootstarp/Card'
//import Row from 'react-bootstarp/Row'
import "./profile.css"
const Profile = () => {
  return (
    <>
    < div className='container'>
      <div class="card shadow col-lg-6 mx-auto mt-5">
            
            <div className='col'>
              <div className='card-profile-stats d-flex justify-content-center'>
                <img src="/man.png" alt=""/>
              </div>
            </div>
            <div className='text-center' >
              <h3>Ichrak</h3>
              <h5><i class="fa-solid fa-envelope"></i>&nbsp;:-<span> Ichrakbensaad@gmail.com</span></h5>
              <h5><i class='fa-solid fa-mobile'></i>&nbsp;:-<span>99 100 100</span></h5>
              <h5><i class="fa-solid fa-person"></i>&nbsp;:-<span> Femme</span></h5>
              <h5><i class="fa-solid fa-location-pin"></i>&nbsp;:-<span> Mazdour</span></h5>
              <h5><i class="fa-solid fa-briefcase"></i>&nbsp;:-<span> Ingénieur</span></h5>
              <h5><i class="fa-solid fa-calendar-days"></i>Date de création &nbsp;:-<span> 10/03/2023</span></h5>
              <h5><i class="fa-solid fa-calendar-days"></i>Date de mise à jour &nbsp;:-<span> 20/03/2023</span></h5>


            </div>
         
      
      </div>
    </div>
      
    </>
  )
}

export default Profile
