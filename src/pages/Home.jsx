import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingImg from '../assets/landing img.jpg'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { getHomeProjectAPI } from '../services/allAPI'


const Home = () => {
  const [allHomeProjects,setAllHomeProjects] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    getAllHomeProjects()
  },[])

  const handleProjects = ()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }else{
      alert("please login to get full acess to our projects")
    }
  }

  const getAllHomeProjects = async()=>{
    try{
      const result = await getHomeProjectAPI()
      if(result.status==200){
        setAllHomeProjects(result.data)
      }

    }catch(err){
      console.log(err);
      

    }

  }
  console.log(allHomeProjects);
  
  return (
    <>
    <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <h1 style={{fontSize:'80px'}}><i className='fa-brands fa-docker'></i>Project Fair</h1>
                    <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi hic aspernatur ad ipsa? Dicta quidem tenetur illum quae laudantium neque id saepe maiores, molestiae aliquam vitae vero alias corporis quia?
                        one stop Destination for all Sftware Development projects.Where User can add and manage their projects.As well as access
                        all projects available

                    </p>
                    {
                      sessionStorage.getItem("token")?

                      <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>

                      :

                    <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
                    }
                </div>
                <div className='col-lg-6'>
                    <img className='img-fluid' src={landingImg} alt="" />
                </div>
                
                 </div>
        </div>

    </div>
    <div className='mt-5 text-center'>
        <h1 className='mb-5'>Explore Our Projects</h1>
        <marquee>
            <div className='d-flex'>
               {
                allHomeProjects?.map(project=>(
                  <div key={project?._id} className='me-5'>
                  <ProjectCard displayData={project}/>
              </div>
                ))
               }
            </div>
            </marquee>
            <button onClick={handleProjects} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS</button>
    </div>
    <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className='d-flex align-items-center justify-content-evenly mt-3 w-100'>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
            <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="" />
            <span>Max Miller</span>
        </Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-center'>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>

          </div>
          <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repudiandae qui delectus quisquam velit magnam tempore reprehenderit quas accusamus dignissimos accusantium, illum error iste doloremque at minima rem itaque quis!</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
            <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://img.freepik.com/premium-vector/default-female-user-profile-icon-vector-illustration_276184-169.jpg" alt="" />
            <span>Teena</span>
        </Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-center'>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>

          </div>
          <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repudiandae qui delectus quisquam velit magnam tempore reprehenderit quas accusamus dignissimos accusantium, illum error iste doloremque at minima rem itaque quis!</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
            <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg" alt="" />
            <span>Alexia</span>
        </Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-center'>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>

          </div>
          <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repudiandae qui delectus quisquam velit magnam tempore reprehenderit quas accusamus dignissimos accusantium, illum error iste doloremque at minima rem itaque quis!</p>
        </Card.Text>
      </Card.Body>
    </Card>

        </div>
    </div>
    
    </>
  )
}

export default Home