import React, {Component} from 'react';
import Particles from './components/Particles/Particles';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';

const app = new Clarifai.App({
  // this is your key found in the clarifai portal over the API keys
 apiKey: '865481b8696842178603f181dfd59d79'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value})

  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {

      }

    )
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
