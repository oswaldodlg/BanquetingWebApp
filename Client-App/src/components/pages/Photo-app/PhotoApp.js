import React, { useState, useContext, useEffect } from 'react';
import ImageGrid from './comps/ImageGrid';
import ImageGridPublic from './comps/ImageGridPublic';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import UserContext from '../../../context/UserContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function PhotoApp() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [retrieveCaption, setRetrieveCaption] = useState(null);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 700);

  const { userData } = useContext(UserContext);

   const updateMedia = () => {
     setDesktop(window.innerWidth > 700);
   };

   useEffect(() => {
     window.addEventListener("resize", updateMedia);
     return () => window.removeEventListener("resize", updateMedia);
   });


  return (
    <div className="PhotoApp">
           <Title/>
           {userData.user && (<UploadForm />)}
           {!userData.user && (<ImageGridPublic isDesktop={isDesktop} setSelectedImg={setSelectedImg} selectedImg={selectedImg} retrieveCaption={retrieveCaption} setRetrieveCaption={setRetrieveCaption} />)}
           {userData.user && <ImageGrid isDesktop={isDesktop} setSelectedImg={setSelectedImg} selectedImg={selectedImg} retrieveCaption={retrieveCaption} setRetrieveCaption={setRetrieveCaption} />}
           {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} retrieveCaption={retrieveCaption} setRetrieveCaption={setRetrieveCaption}/>}
    </div>
  );
}

export default PhotoApp;
