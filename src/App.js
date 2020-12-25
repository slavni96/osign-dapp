import './App.css';

import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundImage: `url("https://osignature.tk/images/blockchain.jpg")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: "100%",
  transition: 'border .24s ease-in-out',
  color: "white",
  position: "fixed",
    height: "100%",
    width: "100%",
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function StyledDropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: 'image/*' });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p class="center">Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* <img src="https://osignature.tk/images/blockchain.jpg" 
      style={{
        backgroundImage: `url("https://osignature.tk/images/blockchain.jpg")`, backgroundRepeat: 'no-repeat', width: "100%", height: "100%",
      }}
      alt="Blockchain" /> */}

      {/* <img
        style={{
          backgroundImage: `url("https://osignature.tk/images/blockchain.jpg")`, backgroundRepeat: 'no-repeat', position: "fixed", width: "100%", height: "100%",
        }}>
      </img> */}
      <StyledDropzone />
    </div>
  );
}

export default App;
