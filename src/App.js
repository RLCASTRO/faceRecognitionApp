import React, {Component} from 'react';
import Particles from './components/Particles/Particles';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
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
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value);

  }

  onButtonSubmit = () => {
    console.log('click');
    // here the first parameter is the key related to the face FACE_DETECT_MODEL, you can find it by clicking over the 'clarifai' library import
    app.models.predict("d02b4508df58432fbb84e800597b8959", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        console.log(response);
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
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
