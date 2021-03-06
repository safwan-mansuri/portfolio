import safwan from './safwan.png';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const url = 'https://v1x77iebfj.execute-api.ap-south-1.amazonaws.com/latest/get-project';
      const resp = await axios.get(url);
      setProjects(resp.data);
    }
    fetchProjects();
  })


  const handleChange = () => {
    console.log('hello');
    setIsDarkMode(!isDarkMode);
  }


  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginLeft: '50px'
  }

  const imageStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '50%'
  }

  const landingContainer = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '100px'
  }

  const info = {
    marginTop: '80px',
    textAlign: 'center'
  }

  const nameText = {
    fontSize: '50px',
    fontStyle: 'oblique',
    letterSpacing: '3px',
    marginRight: '50px',
    color: isDarkMode ? '#fff' : 'black',
  }

  const pr = {
    marginLeft: '20px',
    color: isDarkMode ? '#fff' : 'black',
  }

  const paraText = {
    fontSize: '30px',
    color: isDarkMode ? '#fff' : 'black',
  }

  const resumeStyle = {
    textAlign: 'center',
    marginTop: '20px',
  }

  const linkStyle = {
    fontFamily: 'Poppins, sans-serif',
    textDecoration: 'none',
    fontStyle: 'serif',
    color: isDarkMode ? '#fff' : 'black',
  }

  const appStyle = {
    backgroundColor: isDarkMode ? 'black' : '#fff',
  }


  return (
    <div className="App" style={appStyle}>
      <DarkModeToggle
        onChange={handleChange}
        checked={isDarkMode}
        size={80}
      />
      <div style={resumeStyle}>
        <a 
          href='https://drive.google.com/file/d/1Fd9fspzV6zbOY9XWIE3srXGZUPMZqqYk/view?usp=sharing' 
          style={linkStyle} 
          target='blank'> 
          VIEW RESUME 
        </a>
      </div>

      <div style={landingContainer}>
        <div style={info}>
          <h1 style={nameText}> Safwan Mansuri </h1>
          <p style={paraText}>Software Developer</p>
        </div>
        <div>
          <img src={safwan} alt="no img" style={imageStyle} />
        </div>
      </div>

      <h1 style={pr}> Projects </h1>

      <div style={containerStyle}>
        {
          projects.map((project) => {
            return (
              <div key={project.uuid}>
              <h2><a href={project.link} style={linkStyle} target='blank'># {project.title}.</a></h2>
            </div> )
          })
        }
      </div>
    </div>
  );
}

export default App;
