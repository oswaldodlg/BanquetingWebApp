import React, { useState, useEffect} from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function PhotoApp() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [retrieveCaption, setRetrieveCaption] = useState(null);
  // const [retrieveDate, setRetrieveDate] = useState(null);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 700);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  return (
    <div className="PhotoApp">
        {isDesktop ? (
        <div>
          <Title/>
          <UploadForm />
          <ImageGrid setSelectedImg={setSelectedImg} selectedImg={selectedImg} retrieveCaption={retrieveCaption} setRetrieveCaption={setRetrieveCaption} />
          {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} retrieveCaption={retrieveCaption} setRetrieveCaption={setRetrieveCaption}/>}
        </div>
      ) : (
        <div>
          <Title/>
          <UploadForm />
          <ImageGrid setSelectedImg={setSelectedImg} selectedImg={selectedImg} isDesktop={isDesktop} />
        </div>
      )}

      
    </div>
  );
}

export default PhotoApp;
