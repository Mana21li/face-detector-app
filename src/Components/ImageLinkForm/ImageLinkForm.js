import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div>
            <p className='white pb2 para'>
            {'This App will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center db'>
                <div className='form center ma2 pa4 pr5 pl5 br3 shadow-5'>
                    <input className='ml2 pa2 input' type="text"  placeholder="Enter the URL" onChange ={ onInputChange }/>
                    <button className='link grow dib btn mr2 white pointer' onClick = { onButtonSubmit }>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;