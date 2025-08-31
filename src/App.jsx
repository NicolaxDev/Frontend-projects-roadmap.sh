import './App.css'
import CardProject from './components/CardProject'
import avatar from "../public/ProfilePic.png"

function App() {

  const projects = [
    { name: "Single-Page CV", link: "" },
  ]

  return (
    <>
      <h1>Frontend Developer roadmap.sh projects</h1>
      <span className='mark'>By NicolaxDev</span>
      <img src={avatar} alt="" className='avatar' />
      <div className='container-card'>
        {projects.map((project, index) => (
          <CardProject key={index} name={project.name} link={project.link} />
        ))}
      </div>
    </>
  )
}

export default App
