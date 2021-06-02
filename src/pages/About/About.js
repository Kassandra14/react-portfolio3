import React from "react";
import aboutme from "../../images/me.png";
import '../../App.css';

function AboutMe() {
    return (
        <>
        <img src= {aboutme} id="aboutme" alt="about me"/>
         <section className="container">
    
             <div className="col d-flex justify-content-right">
               <div className="card text-white bg-info mb-3">
                 <div className="card-body">
                   <p className="card-text">  I am an aspiring webdeveloper with a background in linguistics who moved to Colorado from Minnesota four
                        years ago. I am especially interested in backend/api and data design and currently work for a solar monitoring company.
                        
                        Previously to moving to Colorado, I lived in Norway and Germany and appreciate being back in the
                        mountains. In my spare time I enjoy baking, hiking, jogging and
                        watching novelas.
                     </p>
                 </div>
               </div>
             </div>
           
           </section>
        </>


    )
}

export default AboutMe;