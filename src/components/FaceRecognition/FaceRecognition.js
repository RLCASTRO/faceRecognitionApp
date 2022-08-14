import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className='center ma pa3'>
            <img id='inputImage' width={600} height={'auto'} src={imageUrl} alt={''} />
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    )
}

export default FaceRecognition;