import React, { Component } from 'react';
import Particles from './components/Particles/Particles';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';

const clarifaiApp = new Clarifai.App({
  // this is your key found in the clarifai portal over the API keys
  apiKey: '865481b8696842178603f181dfd59d79'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }


  // I can do this in a adiffer way by returning a css style position relative with the 
  // percentages provided by the API, avoiding those calculations
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col + "%",
      topRow: clarifaiFace.top_row + "%",
      rightCol: clarifaiFace.right_col + "%",
      bottomRow: clarifaiFace.bottom_row + "%"
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  }


  onInputChange = (e) => {
    this.setState({ input: e.target.value })

  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    clarifaiApp.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      // .then((response) => {this.calculateFaceLocation(response.outputs[0].data.regions[0].region_info.bounding_box)})
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response))) 
      .catch(err => console.log(err));
  }


  render() {

    return (
      <div className="App">
        <Particles />
        <Navigation />
        <Logo />
        <Rank />
        {/* passing this.onInputChange as a parameter */}
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
