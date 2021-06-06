import safwan from './safwan.png';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const url = 'https://v1x77iebfj.execute-api.ap-south-1.amazonaws.com/latest/get-project';
      const resp = await axios.get(url);
      setProjects(resp.data);
    }
    fetchProjects();
  })

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginLeft: '100px'
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

  const imageDiv = {
    marginLeft: '50px',
  }

  const info = {
    marginTop: '80px',
  }

  const nameText = {
    fontSize: '50px',
  }

  const de = {
    marginTop: '-40px',
    marginLeft: '80px'
  }

  const pr = {
    marginLeft: '20px',
  }

  const resumeStyle = {
    textAlign: 'center',
    marginTop: '20px'
  }

  const linkStyle = {
    textDecoration: 'none',
    fontStyle: 'serif',
    color: 'black',
  }

  return (
    <div className="App">
      <div style={resumeStyle}>
        <a 
          href='https://my-resumess.s3.ap-south-1.amazonaws.com/SafwanMansuri%20.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBxy%2Fj3k8k2r1mfOI7F8OLaAlYD%2FRSLmSNdxnVvw839fAIgSLbGGJ0tN%2FTodyOd0HZUZ1VjrDi5Kg7GUZFyyl3b6TAq9gIIRhAAGgwzNDQ2MTI1NTMyMTkiDJ8M3qfytomNhwexwyrTAuO6AyGOuRppPUiQ5LuCBsAndyhumeutRgqJy5oPTvPKBjzZx%2B7m1oR%2FRY09%2B7t9nNKNWLOw%2BKL9m1rhq7bh6DBGpAIOqxvL9QG3sx9eI31cpTLn3hENzo1nm0ksS98P83IgptvNVF27CKjCOJTg6VhLvHT3xDbWgx2SYltA%2B2NQidysqOV%2FG2oVneRP1J5f2cjh82TISrgk2FmcTwT0obobxaNl5nGKWYKIfbayreuMnaW24nBOA%2F616Hs3iLLhhcW6F14cZYS%2FSq5p0yWirZ2kp%2B2u5ECxsPGO4Yeht1goM3fwBv6OiR%2Bkv0cTlRxepn5PuCagk87%2F4SrxetH90%2FZ3A1rwGsw%2Fk6BTlTvYs1Ru3WPUwv566hQChBcZ2xdni8Ktp6iqPs5H7PSviYN7a4oxCkZEWrkxUN4qy9pr0r5rCR6ttQKSH6fXi%2FxKbBrXOFwxljDs8PKFBjq0AueZc08WPz3injSVDouj73pLKyuYTPlXPbnY4kfBE6MmH9J1DuVEsRW6mhJOCUes5QXbwL2h9GnYSStwgUWOHkMTHA1hrmEe2EfsuWEkqa1F59yD9GDyCsDR6fHQ%2BGEEyRZY09hsLWQLDpBZ1FpQUaLaiaj7lHdfWEJVSmIc93u8q4waErqLihr2xw4iPAuFhaKRjoA%2FEdCATNliDFEApEpNZDtKkTGpbJ%2Bz68bVmey9%2F9b%2FOCZw5ejFaBAt9kGiGhD%2F4Fhwr37l1IjaAaKNYDzJnut4pZWEdSf1opmAcZ4HfWIlEPHqfmvTG78BH9BHaeImrypeqBbr8kIXugQUoljTzMqW7I7njg9LorzubRa2VfBiROIxB7kJsIHzlmkyCO5RIL%2FQHvuk3xycjAIQpsRbG0%2Bz&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210606T134156Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVAPECIIBQOVS7M7R%2F20210606%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=c7ce2bd3c28f1bd635cd591195c946b69c5596d0c21b9d37ad057c622cc0acd0' 
          style={linkStyle} 
          target='blank'> 
          VIEW RESUME 
        </a>
      </div>

      <div style={landingContainer}>
        <div style={info}>
          <h1 style={nameText}> Safwan Mansuri </h1> <br/>
          <div style={de}>
            <p>A Software Developer</p>
          </div>
        </div>
        <div style={imageDiv}>
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
