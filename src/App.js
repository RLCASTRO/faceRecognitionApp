import React, {Component} from 'react';
import Particles from './components/Particles/Particles';
// import Particles from 'react-particles-js';
// import tsParticles from 'tsparticles-engine'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value);

  }

  onButtonSubmit = () => {
    console.log('click');
  }


  render() {

    return (
      <div className="App">
        <Particles />
        <Navigation />
        <Logo />
        <Rank />
        {/* passing this.onInputChange as a parameter */}
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/> 
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
