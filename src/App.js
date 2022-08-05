import React from 'react';
// import Particles from 'react-particles-js';
// import tsParticles from 'tsparticles-engine'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

// just to make the code clean, we separate the params object
// const particleOptions = {
//   particles: {
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: "#3CA9D1",
//         blur: 5
//       }
//     }
//   }
// }

function App() {
  return (
    <div className="App">
      {/* <tsParticles params={particleOptions} /> */}
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
