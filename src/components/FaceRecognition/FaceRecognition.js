import React from 'react';

const FaceRecognition = ({imageUrl}) => {
    return(
        <div className='center ma pa3'>
            <img id='inputImage' width={600} height={'auto'} src={imageUrl} alt={''} />
        </div>
    )
}

export default FaceRecognition;