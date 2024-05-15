import React from "react"
import NavBar from "../components/NavBar"
import "../assets/css/team.css"
import wang_yunsheng from "../assets/images/wang_yunsheng.jpg"
import peabody_jack from "../assets/images/peabody_jack.jpg"
import khai_pau from "../assets/images/khai_pau.jpg"
import estrada_joshua from "../assets/images/estrada_joshua.jpg"
import chung_justin from "../assets/images/chung_justin.jpg"
import hu_huijun from "../assets/images/hu_huijun.jpg"
import sanna_alex from "../assets/images/sanna_alex.jpg"
import ly_michael from "../assets/images/michael.jpg"
import sheth_darshil from "../assets/images/sheth_darshil.jpg"
import hoang_nicholas from "../assets/images/hoang_nicholas.jpg"
import cursaro_sebastian from "../assets/images/cursaro_sebastian.jpg"
import viswhakarama_abhishek from "../assets/images/vishwakarma_abhishek.jpg"
import trinh_phong from "../assets/images/trinh_phong.png"
import hollingsworth_ket from "../assets/images/hollingsworth_ket.jpg"
import wang_nathan from "../assets/images/wang_nathan.jpg"

export default function Team() {
  return (
    <div className="team">
      <NavBar/>
      {/* FACULTY */}
      <div className='section'>
        <div className='section_title' style={{
            paddingTop: '80px'
        }}>
          FACULTY
        </div>
        <div className="profile_image" style={{ 
          backgroundImage: `url(${wang_yunsheng})`,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
        </div>
        <a href="https://www.linkedin.com/in/yunsheng-wang-37297517/" className="information" style={{
          margin: 'auto',
          paddingTop: '10px',
          paddingBottom: '3vh'
        }}>
          Professor Yunsheng Wang
        </a>
      </div>

      {/* AGILE CAR TEAM */}
      <div className='section' style= {{
          backgroundColor: '#485B51'
      }}>   
        <div className='section_title'>
          AGILE CAR TEAM
        </div>

        <div className='team_description'>
          Agile car description
        </div>

        <div className='subtitle'> 
          Graduate Students
          <div className="profile_container" style={{
              paddingLeft: '30vw',
              paddingRight: '30vw'
          }}>
            <div className='profile_image' style={{ 
              backgroundImage: `url(${peabody_jack})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${khai_pau})`, 
            }}> </div>

          </div>

          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: '29.5vw',
            paddingRight: '31vw',
          }}>
            <a href="https://www.linkedin.com/in/jack-peabody/" className="information"> <strong>Jack Peabody</strong> </a>
            <a href="https://www.linkedin.com/in/pau-sian-khai-5419858b/" className="information"> <strong>Pau Khai</strong> </a>
          </div>
          
          <div className="profile_container"style={{
            paddingLeft: '30vw',
            paddingRight: '30vw',
          }}>
            <div className="information">Team Lead</div>

            <div className="information">Team Lead</div>

          </div>

          <div className="subtitle">
            Undergraduate Students
            <div className="profile_container" style={{
              paddingLeft: '20vw',
              paddingRight: '20vw'
            }}>
            <div className='profile_image' style={{ 
                backgroundImage: `url(${estrada_joshua})`, 
              }}> </div>

              <div className='profile_image' style={{ 
                backgroundImage: `url(${chung_justin})`, 
              }}> </div>

              <div className='profile_image' style={{ 
                backgroundImage: `url(${hu_huijun})`, 
              }}> </div>

            </div>

            <div className="profile_container"style={{
              paddingTop: '10px',
              paddingLeft: '25.25vw',
              paddingRight: '27.25vw',
              paddingBottom: '3vh'
            }}>
              <a href="https://www.linkedin.com/in/joshua-estrada22/" className="information"> 
                <strong>Joshua Estrada</strong> 
              </a>

              <a href="https://www.linkedin.com/in/justchung/" className="information" style={{
                margin: 'auto',
                paddingRight: '1.75vw'
              }}> 
                <strong>Justin Chung</strong> 
              </a>

              <a href="https://www.linkedin.com/in/huijun-hu-28045716a/" className="information"> 
                <strong>Tracy Hu</strong> 
              </a>

            </div>
          </div>
        </div>
      </div>


      {/* DONKEY CAR TEAM */}
      <div className='section' style= {{
          backgroundColor: '#758C85'
      }}>   
        <div className='section_title'>
          DONKEY CAR TEAM
        </div>

        <div className='team_description'>
          To develop an accurate and efficient autonomous driving software that utilizes the latest breakthroughs in <br /> 
          machine learning and edge computing
        </div>

        <div className='subtitle'> 
          Undergraduate Students
          <div className="profile_container" style={{
              paddingLeft: '30vw',
              paddingRight: '30vw'
          }}>
            <div className='profile_image' style={{ 
              backgroundImage: `url(${sanna_alex})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${ly_michael})`, 
            }}> </div>

          </div>

          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: '30vw',
            paddingRight: '30vw',
          }}>
            <a href="https://www.linkedin.com/in/alex-sanna-428804215/" className="information"> <strong>Alex Sanna</strong> </a>

            <a href="https://www.linkedin.com/in/michael-ly-swe/" className="information"> <strong>Michael Ly</strong> </a>

          </div>

          <div className="profile_container"style={{
            paddingLeft: '30vw',
            paddingRight: '30vw',
            paddingBottom: '3vh'
          }}>
            <div className="information">Team Lead</div>

            <div className="information">Team Lead</div>

          </div>

          <div className="profile_container" style={{
            paddingLeft: '20vw',
            paddingRight: '20vw'
          }}>
          <div className='profile_image' style={{ 
              backgroundImage: `url(${sheth_darshil})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${hoang_nicholas})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${cursaro_sebastian})`, 
            }}> </div>

          </div>

          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: '25.85vw',
            paddingRight: '24.5vw',
            paddingBottom: '3vh'
          }}>
            <a href="https://www.linkedin.com/in/darshilsheth/" className="information"> 
              <strong>Darshil Sheth</strong> 
            </a>

            <a href="https://www.linkedin.com/in/nicholas-hoang-7b1644235/" className="information" style={{
              margin: 'auto',
              paddingLeft: '1.75vw'
            }}> 
              <strong>Nicholas Hoang</strong> 
            </a>

            <a href="https://www.linkedin.com/in/sebastian-cursaro-483425268/" className="information"> 
              <strong>Sebastian Cursaro</strong> 
            </a>

          </div>
        </div>
      </div>

      {/* QCAR TEAM */}
      <div className='section' style= {{
          backgroundColor: '#485B51'
      }}>   
        <div className='section_title'>
          QCAR TEAM
        </div>

        <div className='team_description'>
          To design a fully autonomous vehicle system leveraging cutting edge AI/ML technologies for lane detection, <br />
          object detection, and much more.
        </div>

        <div className='subtitle'> 
          Graduate Students
          <div className="profile_container" style={{
            paddingLeft: '30vw',
            paddingRight: '30vw'
          }}>
            <div className='profile_image' style={{ 
              backgroundImage: `url(${viswhakarama_abhishek})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${trinh_phong})`, 
            }}> </div>

          </div>
          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: '28vw',
            paddingRight: '31.5vw'
          }}>
            <a href="https://www.linkedin.com/in/karma218/" className="information"> <strong>Abhishek Vishwakarma</strong> </a>

            <a href="https://www.linkedin.com/in/phong-d-trinh/" className="information"> <strong>Phong Trinh</strong> </a>

          </div>
          <div className="profile_container"style={{
            paddingLeft: '30.25vw',
            paddingRight: '30vw'
          }}>
            <div className="information">Lane Detection</div>

            <div className="information">Object Detection</div>

          </div>
        </div>
        <div className="subtitle">
          Undergraduate Students
          <div className="profile_container" style={{
            paddingLeft: '20vw',
            paddingRight: '20vw'
          }}>
            <div className='profile_image' style={{ 
              backgroundImage: `url()`, 
            }}> </div>
  
            <div className='profile_image' style={{ 
              backgroundImage: `url(${hollingsworth_ket})`, 
            }}> </div>

            <div className='profile_image' style={{ 
              backgroundImage: `url(${wang_nathan})`, 
            }}> </div>  
            
          </div>

          <div className="profile_container"style={{
            paddingTop: '10px',
            paddingLeft: '25.3vw',
            paddingRight: '25.8vw',
          }}>
            <a href="" className="information"> 
              <strong>Edgar Santiago</strong> 
            </a>

            <a href="https://www.linkedin.com/in/ket-hollingsworth/" className="information" style={{
              margin: 'auto',
              paddingRight: '0.25vw'
            }}> 
              <strong>Ket Hollingsworth</strong> 
            </a>

            <a href="https://www.linkedin.com/in/nathan-wang-2a3698292/" className="information"> 
              <strong>Nathan Wang</strong> 
            </a>

          </div>

          <div className="profile_container"style={{
            paddingLeft: '39.25vw',
            paddingRight: '20.2vw',
            paddingBottom: '3vh'
          }}>
            <div className="information">CARLA Simulation</div>
            
            <div className="information">Lane Detection</div>

          </div>
        </div>
      </div>

      {/* ALUMNI */}
      {/* <div className='section' style= {{
          height: '100vh',
          backgroundColor: '#737259'
      }}>   
          
      </div> */}
    </div>
  )
}