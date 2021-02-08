import React, {useState} from 'react';
import {Modal, Button, Carousel} from 'react-bootstrap';

import Logo from './images/circlecropped.png';
import cert1 from './images/cert1.png';
import cert2 from './images/cert2.png';
import mision from './images/mision.png';
import brujula from './images/brujula.png';
import bn32 from "./images/bn32.jpg";
import bn33 from "./images/bn33.jpg";
import bn34 from "./images/bn34.jpg";
import bn37 from "./images/bn37.jpg";
import bn45 from "./images/bn45.jpeg";
import bn46 from "./images/bn46.jpeg";
import bn47 from "./images/bn47.jpeg";
import bn48 from "./images/bn48.jpeg";
import logoemp1 from "./images/logoemp1.png";
import logoemp2 from "./images/logoemp2.jpg";

import boda1 from "./images/boda1.jpg";
import boda2 from "./images/boda2.jpeg";
import boda3 from "./images/boda3.jpg";
import boda4 from "./images/boda4.jpeg";
import boda5 from "./images/boda5.jpeg";
import boda6 from "./images/boda6.jpeg";

import xv1 from "./images/xv1.jpeg";
import xv2 from "./images/xv2.jpeg";
import xv3 from "./images/xv3.jpg";
import xv4 from "./images/xv4.jpg";

import grad1 from "./images/grad1.jpg";
import grad2 from "./images/grad2.jpg";
import grad3 from "./images/grad3.jpg";
import grad4 from "./images/grad4.jpg";

import aniv1 from "./images/aniv1.jpg";
import aniv2 from "./images/aniv2.jpg";
import aniv3 from "./images/aniv3.jpg";

import emp1 from "./images/emp1.jpg";
import emp2 from "./images/emp2.jpg";
import emp3 from "./images/emp3.jpeg";
import emp4 from "./images/emp4.jpg";

import buffet1 from "./images/buffet1.jpg";
import buffet2 from "./images/buffet2.jpg";
import buffet3 from "./images/buffet3.jpg";
import buffet4 from "./images/buffet4.jpg";
import buffet5 from "./images/buffet5.jpg";

import "./nicepage.css";
import "./Pagina-1.css";

export default function Inicio() {
  const [weddingModalShow, setWeddingModalShow] = useState(false);
  const [xvModalShow, setXvModalShow] = useState(false);
  const [gradModalShow, setGradModalShow] = useState(false);
  const [anivModalShow, setAnivModalShow] = useState(false);
  const [empModalShow, setEmpModalShow] = useState(false);
  const [buffetModalShow, setBuffetModalShow] = useState(false);


  function WeddingModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Bodas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-50"
                  src={boda1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={boda2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={boda3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={boda4}
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={boda5}
                  alt="Fifth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={boda6}
                  alt="Sixth slide"
                />
              </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function XvModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            XV Años
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-50"
                  src={xv1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={xv2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={xv3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={xv4}
                  alt="Fourth slide"
                />
              </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function GradModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Graduaciones
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-50"
                  src={grad1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={grad2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={grad3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={grad4}
                  alt="Fourth slide"
                />
              </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function AnivModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Aniversarios
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-50"
                  src={aniv1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={aniv2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={aniv3}
                  alt="Third slide"
                />
              </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function EmpModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Eventos Empresariales
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-50"
                  src={emp1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={emp2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={emp3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={emp4}
                  alt="Third slide"
                />
              </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function BuffetModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Buffet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-50"
                  src={buffet1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={buffet2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={buffet3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={buffet4}
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={buffet5}
                  alt="Fifth slide"
                />
              </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
    return (
      <div className="u-body">
  <section className="u-clearfix u-image u-section-1" id="carousel_396c" data-image-width={1280} data-image-height={853}>
    <div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
      <div className="u-align-center u-container-style u-expanded-width-xs u-group u-group-1">
        <div className="u-container-layout u-valign-middle-lg u-valign-middle-xl u-container-layout-1">
          <img src={Logo} alt="logo-banqueting" className="u-image u-image-default u-image-1" data-image-width={603} data-image-height={603} />
        </div>
      </div>
    </div>
  </section>
  <section className="u-clearfix u-palette-1-light-3 u-section-2" id="carousel_ec0b">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-col">
            <div className="u-size-30">
              <div className="u-layout-row">
                <div className="u-align-center-xs u-container-style u-custom-color-1 u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h2 className="u-text u-text-white u-text-1">Sobre nosotros</h2>
                    <p className="u-align-justify-lg u-align-justify-md u-align-justify-xl u-text u-text-2">Banqueting Eventos y Catering, es una empresa que nació en 1993.<br /><br />Somos expertos en la creación de eventos sociales, siendo el ámbito gastronómico nuestra principal especialidad. Asimismo, a todos tus eventos proporcionamos capital humano, mobiliario, venue, ambientación, decoración, elementos de seguridad e higiene.<br /><br />Somos miembros de la Cámara Nacional de la Industria de Restaurantes y Alimentos Condimentados (CANIRAC).<br />Contamos con la certificación del Sello de Calidad “Punto Limpio”, emitido por la Secretaría de Turismo.<br />
                    </p>
                    <img src={cert2} alt className="u-image u-image-default u-image-1" data-image-width={512} data-image-height={512} />
                    <img src={cert1} alt className="u-image u-image-default u-image-2" data-image-width={217} data-image-height={276} />
                  </div>
                </div>
                <div className="u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <img src={mision} al="icono-mision" className="u-image u-image-default u-image-3" data-image-width={720} data-image-height={720} />
                    <h4 className="u-align-center-lg u-align-center-xl u-text u-text-3">MISIÓN</h4>
                    <p className="u-align-left-xl u-large-text u-text u-text-variant u-text-4">Proporcionar
                      banquetes de excelente servicio y calidad, mediante la integración de todos los elementos necesarios para cumplir con las expectativas de nuestros clientes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-size-30">
              <div className="u-layout-row">
                <div className="u-container-style u-image u-layout-cell u-left-cell u-size-30 u-size-60-md u-image-4">
                  <div className="u-container-layout" />
                </div>
                <div className="u-align-center u-container-style u-custom-color-1 u-layout-cell u-size-15 u-size-30-md u-layout-cell-4">
                  <div className="u-container-layout u-valign-middle u-container-layout-4">
                    <img src={brujula} alt="icono-vision" className="u-align-center u-image u-image-default u-image-5" data-image-width={512} data-image-height={512} />
                    <h4 className="u-text u-text-5">VISIÓN</h4>
                    <p className="u-align-center-sm u-align-center-xs u-text u-text-6">Ser la empresa líder en servicios
                      gastronómicos y organización de eventos en el Bajío<u />
                    </p>
                  </div>
                </div>
                <div className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-custom-color-1 u-layout-cell u-right-cell u-size-15 u-size-30-md u-layout-cell-5">
                  <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-5"><span className="u-icon u-icon-circle u-text-black u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-504c" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 512 512" id="svg-504c"><title /><path d="M435.1,298.2l-2.372,1.28c-9.582-11.628-26.183-16.134-38.831-9.724-.045.022-.09.046-.134.069l-5.6,3.015a42.527,42.527,0,0,0-48.7-4.4l-30.155,16.4H269.182a57.961,57.961,0,0,1-25.09-5.749l-5.52-2.67a94.693,94.693,0,0,0-98.552,9.625c-.131.1-.259.2-.381.313l-13.327,11.864a46.226,46.226,0,0,1-17.443,9.723L101.3,303.1a6,6,0,0,0-5.739-4.25H31.108a6,6,0,0,0-5.956,6.726l21.484,176.16a6,6,0,0,0,5.956,5.274h96.674a6,6,0,0,0,5.739-7.75l-12.7-41.674,39.554-25a23.8,23.8,0,0,1,17.365-2.247c.124.031.249.059.375.081l80.459,14.816a104.117,104.117,0,0,0,64.337-9.084,5.918,5.918,0,0,0,.734-.43l139.164-95.552a6,6,0,0,0,1.744-8.041A38.2,38.2,0,0,0,435.1,298.2Zm-35.717,2.228c7.315-3.663,16.524-.66,22.406,4.953l-52.772,28.47-3.1,1.633a45.752,45.752,0,0,0-7.228-13.131Zm-54.113-1.485c.047-.027.1-.053.142-.081a30.516,30.516,0,0,1,31.037.292L349.618,313.6a45.592,45.592,0,0,0-17.138-7.713ZM57.9,475.01,37.885,310.85H91.114l50.05,164.16Zm280.784-69.431a92.038,92.038,0,0,1-56.479,7.848l-80.261-14.78a35.777,35.777,0,0,0-26.085,3.535c-.093.051-.186.107-.277.165l-36.915,23.337-26.3-86.251a58.265,58.265,0,0,0,21.917-12.257l13.139-11.7a82.736,82.736,0,0,1,85.918-8.265l5.519,2.67a70.036,70.036,0,0,0,30.315,6.946h53.525a33.851,33.851,0,0,1,33.2,27.49l-38.795-1.755a232.313,232.313,0,0,0-42.22,1.951,6,6,0,0,0,1.646,11.886,219.979,219.979,0,0,1,40.031-1.848l45.656,2.065c.091,0,.182.006.272.006a6,6,0,0,0,6-6c0-.971-.041-1.933-.1-2.89l6.261-3.3L440.8,308.756a26.214,26.214,0,0,1,31.544,5.056Z" /><path d="M76.974,450.188a18.89,18.89,0,1,0,18.89-18.89A18.911,18.911,0,0,0,76.974,450.188Zm18.89-6.89a6.89,6.89,0,1,1-6.89,6.89A6.9,6.9,0,0,1,95.864,443.3Z" /><path d="M301.622,90.305V70.533a45.544,45.544,0,0,0-91.087,0V90.305a45.544,45.544,0,0,0,91.087,0Zm-79.087,0V70.533a33.544,33.544,0,0,1,67.087,0V90.305a33.544,33.544,0,0,1-67.087,0Z" /><path d="M182.668,259.425H329.49a6,6,0,0,0,6-6V239.653H436a6,6,0,0,0,6-6V194.709a44.973,44.973,0,0,0-42.108-44.856c-3.2-.235-4.845,1.791-6.179,3.418a27.535,27.535,0,0,1-43.442-1.061,6,6,0,0,0-4.975-2.433,44.48,44.48,0,0,0-22.071,6.439,50.437,50.437,0,0,0-35.2-17.459c-3.1-.126-4.668,1.756-6.187,3.6a32.308,32.308,0,0,1-50.977-1.245,5.982,5.982,0,0,0-4.975-2.432,50.215,50.215,0,0,0-34.845,15.2c-.758.775-1.477,1.578-2.178,2.393a44.612,44.612,0,0,0-20.457-6.422c-3.189-.235-4.846,1.791-6.179,3.418a27.534,27.534,0,0,1-43.441-1.061,6.015,6.015,0,0,0-4.975-2.433A44.955,44.955,0,0,0,70,194.709v38.944a6,6,0,0,0,6,6H176.668v13.772A6,6,0,0,0,182.668,259.425Zm160.066-97.458a39.541,39.541,0,0,0,59.2.155A32.987,32.987,0,0,1,430,194.709v32.944H335.49V189.162a50.2,50.2,0,0,0-5.545-22.974A32.433,32.433,0,0,1,342.734,161.967ZM223.3,150.862a44.315,44.315,0,0,0,66.934.159,38.54,38.54,0,0,1,33.26,38.141v58.263H188.668V189.162A38.763,38.763,0,0,1,223.3,150.862ZM82,227.653V194.709a33.179,33.179,0,0,1,29.254-32.738,39.538,39.538,0,0,0,59.191.151,32.735,32.735,0,0,1,11.71,4.132,50.271,50.271,0,0,0-5.487,22.908v38.491Z" /><path d="M412.354,108.179V90.872a40.612,40.612,0,1,0-81.224,0v17.307a40.612,40.612,0,1,0,81.224,0Zm-69.224,0V90.872a28.612,28.612,0,1,1,57.224,0v17.307a28.612,28.612,0,1,1-57.224,0Z" /><path d="M180.87,108.179V90.872a40.612,40.612,0,1,0-81.224,0v17.307a40.612,40.612,0,1,0,81.224,0Zm-69.224,0V90.872a28.612,28.612,0,1,1,57.224,0v17.307a28.612,28.612,0,1,1-57.224,0Z" /></svg></span>
                    <h4 className="u-align-center-xl u-text u-text-7">Valores</h4>
                    <p className="u-align-center-xl u-text u-text-8">Honestidad<u />
                      <br />Compromiso<br />Profesionalismo<br />Transparencia<br />Responsabilidad<br />Excelencia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-align-center u-clearfix u-valign-middle-xs u-section-3" id="carousel_0cb9">
    <div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
      <div className="u-clearfix u-expanded-width-sm u-expanded-width-xs u-gutter-0 u-layout-wrap u-layout-wrap-1">
        <div className="u-gutter-0 u-layout">
          <div className="u-layout-row">
            <div className="u-align-center u-container-style u-image u-layout-cell u-left-cell u-size-31 u-image-1" data-image-width={853} data-image-height={1280}>
              <div className="u-container-layout u-valign-middle u-container-layout-1" />
            </div>
            <div className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-palette-4-base u-right-cell u-size-29 u-layout-cell-2">
              <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-top-sm u-valign-top-xs u-container-layout-2">
                <h1 className="u-align-center-md u-custom-font u-text u-text-font u-text-1">¡Tu satisfacción es lo más importante para nosotros!</h1>
                <h4 className="u-align-center-lg u-align-center-md u-align-center-xl u-custom-font u-text u-text-font u-text-2">En Banqueting, más que eventos, ¡creamos momentos inolvidables!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-clearfix u-hidden-md u-hidden-sm u-hidden-xs u-section-4" id="carousel_2c6d">
    <div className="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
      <div className="u-gallery u-layout-grid u-lightbox u-no-transition u-show-text-on-hover u-gallery-1" id="carousel-d60f">
        <div className="u-gallery-inner u-gallery-inner-1" role="listbox">
          <div className="u-effect-fade u-gallery-item">
            <div className="u-back-slide" data-image-width={1440} data-image-height={1440}>
              <img className="u-back-image u-expanded" src={bn47}/>
            </div>
            <div className="u-over-slide u-shading u-over-slide-1">
              <h3 className="u-gallery-heading" />
              <p className="u-gallery-text" />
            </div>
          </div>
          <div className="u-effect-fade u-gallery-item u-gallery-item-2">
            <div className="u-back-slide">
              <img className="u-back-image u-expanded u-back-image-2" src={bn37} />
            </div>
            <div className="u-over-slide u-shading u-over-slide-2">
              <h3 className="u-gallery-heading" />
              <p className="u-gallery-text" />
            </div>
          </div>
          <div className="u-effect-fade u-gallery-item u-gallery-item-3">
            <div className="u-back-slide">
              <img className="u-back-image u-expanded" src={bn48} />
            </div>
            <div className="u-over-slide u-shading u-over-slide-3">
              <h3 className="u-gallery-heading" />
              <p className="u-gallery-text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-align-center u-border-2 u-border-custom-color-2 u-clearfix u-custom-color-2 u-section-5" id="carousel_9f54">
    <div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
      <h1 className="u-text u-text-1">Nuestros Servicios</h1>
      <div className="u-expanded-width u-list u-repeater u-list-1">
        <div className="u-align-center u-container-style u-list-item u-repeater-item">
          <div className="u-container-layout u-similar-container u-container-layout-1">
              <span className="u-align-left u-custom-color-1 u-icon u-icon-circle u-spacing-22 u-text-body-alt-color u-icon-1" onClick={() => setWeddingModalShow(true)}><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-fe7f" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 512 512" id="svg-fe7f"><g id="outline"><path d="M462.27,232.513a152.859,152.859,0,0,0-71.846-49.278l10.466-10.467a24.139,24.139,0,0,0,5.864-24.839A29.145,29.145,0,0,0,358.5,136.537l-4.15,4.15-4.15-4.15a29.145,29.145,0,0,0-48.259,11.392,24.14,24.14,0,0,0,5.863,24.839l6.2,6.2c-4.119.825-8.2,1.816-12.216,2.975a7.96,7.96,0,0,0-.868.309A152.1,152.1,0,0,0,205.593,108.7l24.722-31.786A8,8,0,0,0,230.4,67.2l-24-32A8,8,0,0,0,200,32H136a8,8,0,0,0-6.4,3.2l-24,32a8,8,0,0,0,.085,9.712L130.408,108.7A152.045,152.045,0,0,0,16,256c0,83.813,68.187,152,152,152a151.532,151.532,0,0,0,43.083-6.229A151.524,151.524,0,0,0,344,480c83.813,0,152-68.187,152-152A152.361,152.361,0,0,0,462.27,232.513ZM317.115,152.989a13.145,13.145,0,0,1,21.766-5.139l9.807,9.807a8,8,0,0,0,11.313,0l9.807-9.806a13.145,13.145,0,0,1,21.767,5.138,8.229,8.229,0,0,1-2,8.466l-35.232,35.232-35.232-35.232A8.229,8.229,0,0,1,317.115,152.989ZM320,256a151.945,151.945,0,0,0-2.712-28.529,104.009,104.009,0,1,1-62.815,153.461A151.936,151.936,0,0,0,320,256Zm7.972-63.059,15.076,15.076a120.242,120.242,0,0,0-29.587,3.913A152.02,152.02,0,0,0,308,196.821,135.775,135.775,0,0,1,327.972,192.941ZM272,256a104.135,104.135,0,0,1-31.947,74.983c-.028-1-.053-1.989-.053-2.983a103.37,103.37,0,0,1,31.954-75C271.982,254,272,255,272,256Zm-62.026,95.186A137.259,137.259,0,0,1,208,328a135.8,135.8,0,0,1,56.633-110.442,103.149,103.149,0,0,1,4.981,16.276A119.391,119.391,0,0,0,224,328a121.573,121.573,0,0,0,.951,15.019A103.669,103.669,0,0,1,209.974,351.186ZM192,328a153.165,153.165,0,0,0,2.689,28.539,104.017,104.017,0,1,1,62.781-153.5A151.77,151.77,0,0,0,192,328ZM138.234,80l7.408,22.223L128.357,80Zm69.409,0-17.285,22.223L197.766,80ZM180.9,80,168,118.7,155.1,80ZM160,64l8-10.667L176,64Zm48,0H196L184,48h12ZM140,48h12L140,64H128ZM32,256A136.035,136.035,0,0,1,141.249,122.637l11.179,14.372a120,120,0,1,0,31.144,0l11.179-14.372A136.035,136.035,0,0,1,304,256c0,74.991-61.009,136-136,136S32,330.991,32,256ZM344,464a135.561,135.561,0,0,1-117.6-67.674,151.512,151.512,0,0,0,14.471-6.967A120,120,0,1,0,363.985,209.673L377.5,196.16A136.053,136.053,0,0,1,480,328C480,402.991,418.991,464,344,464Z" /><path d="M376,409.345a7.96,7.96,0,0,0,3.2-.671,88,88,0,0,0,8.8-4.451A8,8,0,1,0,380,390.372a72.235,72.235,0,0,1-7.2,3.64A8,8,0,0,0,376,409.345Z" /><path d="M403.2,382.4a8,8,0,0,0,11.2-1.591A87.255,87.255,0,0,0,432,328a8,8,0,0,0-16,0A71.369,71.369,0,0,1,401.609,371.2,8,8,0,0,0,403.2,382.4Z" />
                </g></svg>
              </span>
              <WeddingModal
                  show={weddingModalShow}
                  onHide={() => setWeddingModalShow(false)}
                />
            <h5 className="u-text u-text-2">Bodas<br />Wedding Planner
            </h5>
          </div>
        </div>
        <div className="u-align-center u-container-style u-list-item u-repeater-item">
          <div className="u-container-layout u-similar-container u-container-layout-2">
            <span className="u-align-left u-custom-color-1 u-icon u-icon-circle u-spacing-22 u-text-body-alt-color u-icon-2" onClick={() => setXvModalShow(true)}><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 480.187 480.187" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-35f7" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 480.187 480.187" x="0px" y="0px" id="svg-35f7" style={{enableBackground: 'new 0 0 480.187 480.187'}}><g><g><path d="M327.417,301.136c-1.498-4.157-6.082-6.312-10.238-4.814c-4.157,1.498-6.312,6.082-4.814,10.238    c0.037,0.102,0.076,0.203,0.117,0.304c7.296,19.04,7.824,33.6,1.44,40c-7.744,7.728-27.032,5.312-51.608-6.448    c-32.902-17.084-62.809-39.402-88.552-66.08c-62.664-62.672-88.52-124.168-72.528-140.16c5.103-4.03,11.736-5.578,18.096-4.224    c4.406,0.324,8.241-2.986,8.565-7.392c0.313-4.259-2.774-8.013-7.013-8.528c-11.123-1.968-22.535,1.275-30.96,8.8    c-29.312,29.304,15.496,105.744,72.528,162.784c27.021,27.962,58.419,51.333,92.96,69.192c6.255,2.995,12.701,5.574,19.296,7.72    l-56.84,21.552c-75.9-28.856-130.539-96.144-143.2-176.352c-0.685-4.365-4.779-7.349-9.144-6.664    c-4.365,0.685-7.349,4.779-6.664,9.144c1.256,8,2.936,16,4.992,23.824c18.422,69.799,66.943,127.784,132.4,158.224l-93.552,35.4    c-0.429-0.716-0.969-1.358-1.6-1.904c-23.776-19.089-38.694-47.084-41.28-77.464l-3.712-44.952    c-0.292-4.355-4.06-7.649-8.416-7.357c-0.083,0.006-0.166,0.012-0.248,0.021c-4.404,0.35-7.691,4.205-7.341,8.609    c0.001,0.018,0.003,0.037,0.005,0.055l3.776,44.936c2.812,32.473,17.96,62.633,42.328,84.28l-66.736,25.264l12-49.248    c1.047-4.295-1.585-8.625-5.88-9.672c-4.295-1.047-8.625,1.585-9.672,5.88l-15.608,64c-1.052,4.291,1.574,8.623,5.866,9.674    c1.574,0.386,3.227,0.284,4.742-0.29l296-112c0.471-0.23,0.916-0.509,1.328-0.832c6.406-0.984,12.345-3.946,16.984-8.472    C333.161,350.256,339.985,333.912,327.417,301.136z" />
                  </g>
                </g><g><g><path d="M402.913,280.504c-43.247-16.19-89.99-20.729-135.544-13.16l-28.584,4.8c-4.339,0.834-7.18,5.027-6.346,9.366    c0.806,4.192,4.761,7.013,8.986,6.41l28.576-4.76c42.782-7.113,86.683-2.847,127.296,12.368c0.901,0.319,1.852,0.479,2.808,0.472    c4.418,0.007,8.006-3.568,8.013-7.987C408.124,284.668,406.048,281.673,402.913,280.504z" />
                  </g>
                </g><g><g><path d="M431.353,156.56c-1.9-3.99-6.674-5.684-10.664-3.784l-168,80c-3.989,1.899-5.684,6.672-3.785,10.662    c0,0.001,0.001,0.002,0.001,0.002c1.899,3.989,6.672,5.684,10.662,3.785c0.001,0,0.001-0.001,0.002-0.001l168-80    C431.559,165.324,433.253,160.55,431.353,156.56z" />
                  </g>
                </g><g><g><path d="M194.377,54.296c-0.88-4.33-5.103-7.127-9.433-6.247c-4.33,0.88-7.127,5.103-6.247,9.433    c0.019,0.096,0.041,0.191,0.064,0.286c10.126,45.239,5.953,92.507-11.944,135.272l-11.632,27.912    c-1.681,4.067,0.238,8.728,4.296,10.432c0.972,0.409,2.017,0.618,3.072,0.616c3.229,0,6.141-1.94,7.384-4.92l11.64-27.88    C200.752,153.391,205.225,102.757,194.377,54.296z" />
                  </g>
                </g><g><g><path d="M440.105,288c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S453.36,288,440.105,288z M440.105,320    c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S444.523,320,440.105,320z" />
                  </g>
                </g><g><g><path d="M248.105,64c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S261.36,64,248.105,64z M248.105,96    c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S252.523,96,248.105,96z" />
                  </g>
                </g><g><g><circle cx="176.105" cy={16} r={16} />
                  </g>
                </g><g><g><path d="M400.105,40c-4.418,0-8,3.582-8,8v8c0,4.418,3.582,8,8,8s8-3.582,8-8v-8C408.105,43.582,404.523,40,400.105,40z" />
                  </g>
                </g><g><g><path d="M400.105,0c-4.418,0-8,3.582-8,8v8c0,4.418,3.582,8,8,8s8-3.582,8-8V8C408.105,3.582,404.523,0,400.105,0z" />
                  </g>
                </g><g><g><path d="M424.105,24h-8c-4.418,0-8,3.582-8,8s3.582,8,8,8h8c4.418,0,8-3.582,8-8S428.523,24,424.105,24z" />
                  </g>
                </g><g><g><path d="M384.105,24h-8c-4.418,0-8,3.582-8,8s3.582,8,8,8h8c4.418,0,8-3.582,8-8S388.523,24,384.105,24z" />
                  </g>
                </g><g><g><path d="M344.105,87.832h-40.168c-4.418,0-8,3.582-8,8V136c0,4.418,3.582,8,8,8h40.168c4.418,0,8-3.582,8-8V95.832    C352.105,91.414,348.523,87.832,344.105,87.832z M336.105,128h-24.168v-24.168h24.168V128z" />
                  </g>
                </g><g><g><path d="M285.826,154.636c-2.937-3.135-7.825-3.391-11.073-0.58l-80,72c-3.282,2.956-3.547,8.013-0.592,11.296    c2.956,3.282,8.013,3.547,11.296,0.592l80-72C288.682,162.923,288.847,157.861,285.826,154.636z" />
                  </g>
                </g><g><g><path d="M432.105,184c-4.418,0-8,3.582-8,8v8c0,4.418,3.582,8,8,8s8-3.582,8-8v-8C440.105,187.582,436.523,184,432.105,184z" />
                  </g>
                </g><g><g><path d="M466.049,182.624l-5.656-5.656c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l5.656,5.656    c3.178,3.07,8.242,2.982,11.312-0.196C469.044,190.639,469.044,185.724,466.049,182.624z" />
                  </g>
                </g><g><g><path d="M472.105,152h-8c-4.418,0-8,3.582-8,8s3.582,8,8,8h8c4.418,0,8-3.582,8-8S476.523,152,472.105,152z" />
                  </g>
                </g><g><g><path d="M465.853,126.064c-3.1-2.994-8.015-2.994-11.116,0l-5.656,5.656c-3.124,3.125-3.123,8.19,0.002,11.314    c1.5,1.499,3.534,2.342,5.654,2.342v0c2.122,0,4.156-0.844,5.656-2.344l5.656-5.656    C469.119,134.198,469.031,129.133,465.853,126.064z" />
                  </g>
                </g><g><g><path d="M432.105,112c-4.418,0-8,3.582-8,8v8c0,4.418,3.582,8,8,8s8-3.582,8-8v-8C440.105,115.582,436.523,112,432.105,112z" />
                  </g>
                </g><g><g><path d="M415.129,131.72l-5.656-5.656c-3.178-3.069-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l5.656,5.656    c3.178,3.07,8.242,2.982,11.312-0.196C418.124,139.735,418.124,134.82,415.129,131.72z" />
                  </g>
                </g><g><g><path d="M95.713,34.592c-0.942-2.894-3.445-5.002-6.456-5.44l-23.48-3.416L55.305,4.464c-2.334-3.963-7.439-5.284-11.402-2.95    c-1.218,0.717-2.233,1.732-2.95,2.95l-10.52,21.272l-23.48,3.416c-4.373,0.631-7.406,4.688-6.775,9.061    c0.251,1.741,1.069,3.35,2.327,4.579l16.984,16.56l-4,23.384c-0.768,4.351,2.136,8.501,6.487,9.269    c1.752,0.309,3.556,0.026,5.129-0.805l21-11.072l21,11.04c3.911,2.056,8.748,0.553,10.804-3.358    c0.819-1.557,1.101-3.34,0.804-5.074l-4-23.384l16.992-16.56C95.88,40.663,96.658,37.485,95.713,34.592z M62.505,50.832    c-1.884,1.835-2.745,4.479-2.304,7.072l1.984,11.56L51.825,64c-2.329-1.223-5.111-1.223-7.44,0l-10.4,5.456l1.984-11.56    c0.449-2.583-0.397-5.223-2.264-7.064l-8.408-8.184l11.608-1.688c2.606-0.378,4.859-2.015,6.024-4.376l5.176-10.504l5.184,10.504    c1.164,2.359,3.413,3.995,6.016,4.376l11.6,1.688L62.505,50.832z" />
                  </g>
                </g><g><g><path d="M453.081,401h-0.032l-3.296-4.944c-18.481-27.637-47.542-46.429-80.328-51.944c-4.374-0.624-8.426,2.416-9.05,6.79    c-0.603,4.226,2.218,8.181,6.41,8.986c23.648,4.014,45.199,16.028,61.048,34.032c-13.325,2.397-24.979,10.4-32,21.976    c-8.616,15.431-3.091,34.924,12.34,43.54c15.431,8.616,34.924,3.091,43.54-12.34c3.291-6.353,5.068-13.382,5.192-20.536    c8.512,12.363,9.193,28.508,1.752,41.544c-2.254,3.8-1.001,8.708,2.799,10.962c3.8,2.254,8.708,1.001,10.962-2.799    c0.072-0.122,0.141-0.245,0.207-0.371C487.273,449.732,478.645,416.671,453.081,401z M437.761,439.288    c-4.27,7.737-14.003,10.547-21.739,6.277s-10.547-14.003-6.277-21.739c0.024-0.043,0.048-0.087,0.072-0.13    c4.721-7.73,12.684-12.912,21.664-14.096c1.391-0.038,2.768,0.282,4,0.928C442.233,414.296,442.593,430.632,437.761,439.288z" />
                  </g>
                </g></svg>
              </span>
              <XvModal
                  show={xvModalShow}
                  onHide={() => setXvModalShow(false)}
                />
            <h5 className="u-text u-text-3">XV años</h5>
          </div>
        </div>
        <div className="u-align-center u-container-style u-list-item u-repeater-item">
          <div className="u-container-layout u-similar-container u-container-layout-3">
            <span className="u-align-left u-custom-color-1 u-icon u-icon-circle u-spacing-22 u-text-body-alt-color u-icon-3" onClick={() => setGradModalShow(true)}><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 511.97 511.97" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-a150" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 511.97 511.97" id="svg-a150"><g><path d="m502.091 157.105-108.075-36.525c-3.923-1.32-8.18.78-9.507 4.704-1.326 3.924.78 8.181 4.704 9.507l107.043 36.177-50.387 24.565c-2.092-1.411-4.44-2.494-6.986-3.159l-151.135-39.499c-4.804-24.715-35.234-35.088-53.925-17.499-6.469 6.088-10.179 14.673-10.179 23.554v.164c.053 10.457 8.708 18.964 19.295 18.964h26.094c6.738 0 13.477-3.516 16.972-10.135l140.943 36.836c-44.534 21.712-144.508 70.453-157.252 76.667-8.996 4.385-19.019 4.097-27.422 0l-226.561-110.458 230.254-77.818c6.459-2.184 13.576-2.184 20.035 0l89.897 30.383c3.925 1.325 8.18-.778 9.507-4.704 1.326-3.924-.78-8.181-4.704-9.507l-89.897-30.383c-9.558-3.229-20.083-3.229-29.641 0l-231.286 78.166c-12.288 4.156-13.397 21.175-1.718 26.868l118.698 57.87c-6.53 31.045-16.5 64.468-27.336 94.134-4.436 12.132-.614 25.628 9.508 33.584 34.255 26.923 74.729 47.721 116.212 61.09 19.494 6.281 41.231 6.523 61.481 0 41.496-13.375 81.974-34.181 116.211-61.09 10.159-7.987 13.929-21.489 9.508-33.584-10.607-29.008-20.713-62.649-27.335-94.131l55.834-27.221v112.88c-9.543.731-17.089 8.712-17.089 18.439v21.856c0 3.247 1.41 6.164 3.64 8.196l-2.786 42.122c-.544 8.229 5.999 15.223 14.249 15.223h18.974c8.246 0 14.792-6.991 14.248-15.223l-2.785-42.122c2.23-2.032 3.64-4.948 3.64-8.196v-21.857c0-9.727-7.547-17.708-17.09-18.439v-113.042c0-2.305-.363-4.538-1.011-6.658l48.878-23.83c11.664-5.687 10.59-22.707-1.718-26.869zm-233.058 5.953h-26.094c-2.317 0-4.284-1.85-4.295-4.002v-.126c0-4.832 1.938-9.317 5.459-12.631 10.801-10.165 28.501-2.848 29.202 11.772.167 3.501-2.087 4.987-4.272 4.987zm120.877 153.639c-40.522 31.714-98.028 54.401-117.836 58.177-4.069.776-6.738 4.704-5.962 8.772.776 4.07 4.715 6.739 8.772 5.962 20.719-3.951 77.486-26.012 120.101-57.903 1.048 2.989 2.262 6.392 3.369 9.421 2.2 6.02.315 12.706-4.689 16.641-40.39 31.743-82.951 49.391-111.543 58.604-17.078 5.505-35.627 5.369-52.279 0-28.592-9.214-71.153-26.861-111.543-58.604-5.003-3.933-6.891-10.618-4.688-16.642.044-.12.087-.242.131-.362 1.09-2.986 2.298-6.375 3.237-9.06 41.608 31.128 98.22 53.735 120.094 57.908 4.074.774 7.997-1.893 8.773-5.961.776-4.069-1.893-7.997-5.961-8.773-18.7-3.565-76.403-25.772-117.831-58.181 6.091-18.627 13.149-42.565 18.697-68.079l94.948 46.29c12.642 6.164 27.434 6.405 40.57 0l94.942-46.288c5.548 25.513 12.606 49.451 18.698 68.078zm49.813 101.643 2.609-39.439h12.218l2.608 39.439zm18.308-72.398v17.958h-19.179v-17.958c0-1.903 1.607-3.511 3.511-3.511h12.156c1.903.001 3.512 1.608 3.512 3.511z" />
                </g></svg>
              </span>
              <GradModal
                  show={gradModalShow}
                  onHide={() => setGradModalShow(false)}
              />
            <h5 className="u-text u-text-4">Graduaciones<br />#PromExperts
            </h5>
          </div>
        </div>
        <div className="u-align-center u-container-style u-list-item u-repeater-item">
          <div className="u-container-layout u-similar-container u-container-layout-4">
            <span className="u-align-left u-custom-color-1 u-icon u-icon-circle u-spacing-22 u-text-body-alt-color u-icon-4" onClick={() => setAnivModalShow(true)}><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-4aca" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" id="svg-4aca" style={{enableBackground: 'new 0 0 512 512'}}><g><path d="M257.17,274.956c-22.789-15.434-45.939-18.899-64.147-9.43c-16.84,8.758-26.492,26.971-25.82,48.719   c0.55,17.798,7.927,36.026,21.334,52.711c15.234,18.96,37.303,34.942,65.591,47.501c0.969,0.43,2.006,0.645,3.043,0.645   s2.074-0.215,3.043-0.645c28.288-12.559,50.356-28.541,65.591-47.501c13.407-16.685,20.784-34.913,21.334-52.711   c0.672-21.748-8.98-39.961-25.82-48.719C303.11,256.055,279.958,259.523,257.17,274.956z M332.145,313.782   c-0.313,10.122-3.695,25.934-18.033,43.779c-13.184,16.408-32.33,30.463-56.941,41.81c-24.611-11.347-43.758-25.402-56.941-41.81   c-14.338-17.845-17.721-33.657-18.033-43.779c-0.49-15.849,6.145-28.913,17.748-34.948c4.576-2.38,9.691-3.552,15.18-3.552   c11.415,0,24.44,5.071,37.553,14.885c2.664,1.994,6.324,1.994,8.988,0c19.416-14.532,38.636-18.662,52.732-11.333   C326,284.869,332.635,297.933,332.145,313.782z" /><path d="M91.04,497H27.5c-6.893,0-12.5-5.607-12.5-12.5V191.125c3.752,1.923,8.002,3.009,12.5,3.009h368.662   c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5H27.5c-6.893,0-12.5-5.607-12.5-12.5v-85c0-6.893,5.607-12.5,12.5-12.5h41.961   v17.821c0,15.164,12.337,27.5,27.5,27.5h1.217c0.237,0,0.473-0.003,0.709-0.009c13.425-0.341,24.488-10.35,26.474-23.309   c0.035-0.227,0.067-0.456,0.096-0.685c0.044-0.344,0.081-0.689,0.112-1.037c0.072-0.811,0.109-1.632,0.109-2.461V69.133h36.194   c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-36.194V27.5c0-15.164-12.337-27.5-27.5-27.5h-1.217   c-15.163,0-27.5,12.336-27.5,27.5v26.633H27.5c-15.163,0-27.5,12.336-27.5,27.5V484.5C0,499.664,12.337,512,27.5,512h63.54   c4.143,0,7.5-3.358,7.5-7.5S95.183,497,91.04,497z M84.461,27.5c0-6.893,5.607-12.5,12.5-12.5h1.217c6.893,0,12.5,5.607,12.5,12.5   v59.454c0,6.893-5.607,12.5-12.5,12.5h-1.217c-6.893,0-12.5-5.607-12.5-12.5V27.5z" /><path d="M484.5,54.133h-39.621V27.5c0-15.164-12.337-27.5-27.5-27.5h-1.217c-15.163,0-27.5,12.336-27.5,27.5v26.633h-191.79   c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h191.79v17.821c0,15.164,12.337,27.5,27.5,27.5h1.217   c15.163,0,27.5-12.336,27.5-27.5V69.133H484.5c6.893,0,12.5,5.607,12.5,12.5v85c0,6.893-5.607,12.5-12.5,12.5h-53.338   c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5H484.5c4.498,0,8.748-1.086,12.5-3.009V341.89c0,4.142,3.357,7.5,7.5,7.5   s7.5-3.358,7.5-7.5V81.633C512,66.469,499.663,54.133,484.5,54.133z M429.879,86.954c0,6.893-5.607,12.5-12.5,12.5h-1.217   c-6.893,0-12.5-5.607-12.5-12.5V27.5c0-6.893,5.607-12.5,12.5-12.5h1.217c6.893,0,12.5,5.607,12.5,12.5V86.954z" /><path d="M504.5,369.39c-4.143,0-7.5,3.358-7.5,7.5V484.5c0,6.893-5.607,12.5-12.5,12.5H126.04c-4.143,0-7.5,3.358-7.5,7.5   s3.357,7.5,7.5,7.5H484.5c15.163,0,27.5-12.336,27.5-27.5V376.89C512,372.748,508.643,369.39,504.5,369.39z" /><path d="M142.548,124.133c0,4.142,3.357,7.5,7.5,7.5h214.244c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5H150.048   C145.905,116.633,142.548,119.991,142.548,124.133z" />
                </g></svg>
            </span>
            <AnivModal
                  show={anivModalShow}
                  onHide={() => setAnivModalShow(false)}
              />
            <h5 className="u-text u-text-5">Aniversarios</h5>
          </div>
        </div>
        <div className="u-align-center u-container-style u-list-item u-repeater-item">
          <div className="u-container-layout u-similar-container u-container-layout-5"><span className="u-align-left u-custom-color-1 u-icon u-icon-circle u-spacing-22 u-text-body-alt-color u-icon-5" onClick={() => setEmpModalShow(true)}><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 -31 512 512" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-3963" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 -31 512 512" id="svg-3963"><path d="m497.09375 60.003906c-.03125 0-.0625-.003906-.09375-.003906h-136v-15c0-24.8125-20.1875-45-45-45h-120c-24.8125 0-45 20.1875-45 45v15h-136c-8.351562 0-15 6.84375-15 15v330c0 24.8125 20.1875 45 45 45h422c24.8125 0 45-20.1875 45-45v-329.683594c0-.019531 0-.039062 0-.058594-.574219-9.851562-6.632812-15.199218-14.90625-15.253906zm-316.09375-15.003906c0-8.269531 6.730469-15 15-15h120c8.269531 0 15 6.730469 15 15v15h-150zm295.1875 45-46.582031 139.742188c-2.042969 6.136718-7.761719 10.257812-14.226563 10.257812h-84.378906v-15c0-8.285156-6.714844-15-15-15h-120c-8.285156 0-15 6.714844-15 15v15h-84.378906c-6.464844 0-12.183594-4.121094-14.226563-10.257812l-46.582031-139.742188zm-175.1875 150v30h-90v-30zm181 165c0 8.269531-6.730469 15-15 15h-422c-8.269531 0-15-6.730469-15-15v-237.566406l23.933594 71.796875c6.132812 18.40625 23.289062 30.769531 42.6875 30.769531h84.378906v15c0 8.285156 6.714844 15 15 15h120c8.285156 0 15-6.714844 15-15v-15h84.378906c19.398438 0 36.554688-12.363281 42.6875-30.769531l23.933594-71.796875zm0 0" /></svg></span>
             <EmpModal
             show={empModalShow}
             onHide={() => setEmpModalShow(false)}
            />
            <h5 className="u-text u-text-6">Eventos Empresariales</h5>
          </div>
        </div>
        <div className="u-align-center u-container-style u-list-item u-repeater-item">
          <div className="u-container-layout u-similar-container u-container-layout-6"><span className="u-align-left u-custom-color-1 u-icon u-icon-circle u-spacing-22 u-text-body-alt-color u-icon-6" onClick={() => setBuffetModalShow(true)}><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 -21 512 512" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-a24a" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 -21 512 512" id="svg-a24a"><path d="m512 228.484375c0-11.214844-9.125-20.339844-20.34375-20.339844h-40.457031c-3.957031-4.558593-6.804688-10.515625-8.097657-16.78125h3.71875c8.789063 0 16.46875-5.941406 18.671876-14.457031l3.214843-12.410156h.277344c10.394531 0 18.851563-8.453125 18.851563-18.847656 0-9.773438-7.484376-17.835938-17.019532-18.757813-.007812-.0625-.015625-.121094-.019531-.183594-1.488281-13.421875-12.34375-24.035156-25.808594-25.238281-5.15625-.464844-10.3125.460938-14.929687 2.675781-2.25 1.078125-5.152344.523438-7.21875-1.378906-5.121094-4.714844-11.488282-7.585937-18.296875-8.304687l49.980469-19.15625s.003906-.003907.003906-.003907c2.953125-1.132812 5.257812-3.488281 6.332031-6.464843 1.070313-2.976563.792969-6.261719-.753906-9.011719-12.296875-21.832031-31.738281-38.746094-54.742188-47.617188-20.957031-8.085937-43.671875-8.996093-64.730469-2.714843l-1.792968-4.675782c-1.484375-3.867187-5.820313-5.800781-9.6875-4.316406-3.871094 1.480469-5.804688 5.816406-4.320313 9.6875l1.789063 4.671875c-41.859375 19.773437-64.859375 66.492187-55.96875 113.671875-6.46875 2.988281-10.96875 9.539062-10.96875 17.121094 0 10.390625 8.453125 18.847656 18.847656 18.847656h.277344l3.214844 12.410156c2.203124 8.511719 9.882812 14.457032 18.675781 14.457032h9.121093c-1.296874 6.265624-4.140624 12.21875-8.097656 16.777343h-104.152344c-3.957031-4.558593-6.800781-10.511719-8.097656-16.777343h7.9375c8.792969 0 16.472656-5.945313 18.675782-14.457032l3.214843-12.410156h.277344c10.390625 0 18.847656-8.457031 18.847656-18.847656 0-8.460938-5.605469-15.636719-13.292969-18.015625-7.882812-48.203125-46.488281-84.519531-93.28125-88.050781v-5.003907c0-4.140625-3.359374-7.5-7.5-7.5-4.144531 0-7.5 3.359375-7.5 7.5v5.003907c-46.796874 3.53125-85.402343 39.847656-93.285156 88.050781-7.6875 2.378906-13.292968 9.554687-13.292968 18.015625 0 10.390625 8.457031 18.847656 18.847656 18.847656h.277344l3.214843 12.410156c2.203125 8.511719 9.882813 14.457032 18.675781 14.457032h4.898438c-1.292969 6.265624-4.136719 12.21875-8.09375 16.777343h-27.75c-11.21875 0-20.34375 9.125-20.34375 20.339844 0 9.757813 6.902344 17.933594 16.082031 19.894531v28.15625c0 18.375 14.949219 33.324219 33.324219 33.324219 10.40625 0 19.710938-4.792969 25.828125-12.285156 6.117187 7.492187 15.421875 12.285156 25.824219 12.285156 10.40625 0 19.710937-4.792969 25.828125-12.285156 6.117187 7.492187 15.421875 12.285156 25.824219 12.285156 10.40625 0 19.710937-4.792969 25.828124-12.285156 6.113282 7.492187 15.421876 12.285156 25.824219 12.285156 10.40625 0 19.710938-4.792969 25.828125-12.285156 6.113282 7.492187 15.417969 12.285156 25.824219 12.285156s19.710937-4.792969 25.828125-12.285156c6.113281 7.492187 15.417969 12.285156 25.824219 12.285156 10.402343 0 19.710937-4.792969 25.824219-12.285156 6.117187 7.492187 15.421874 12.285156 25.828124 12.285156 10.402344 0 19.707032-4.792969 25.824219-12.285156 6.117188 7.492187 15.421875 12.285156 25.828125 12.285156 10.402344 0 19.707032-4.792969 25.824219-12.285156 6.117187 7.492187 15.421875 12.285156 25.824219 12.285156 18.378906 0 33.328125-14.949219 33.328125-33.324219v-28.160156c9.160156-1.972656 16.050781-10.140625 16.050781-19.890625zm-75.457031-110.816406c2.214843-1.0625 4.605469-1.480469 7.105469-1.261719 5.753906.515625 10.648437 4.867188 11.964843 10.394531h-71.648437c-.011719-.496093 0-.996093.027344-1.5.539062-8.613281 7.722656-15.644531 16.355468-16.003906 4.589844-.179687 8.96875 1.40625 12.332032 4.503906 6.644531 6.117188 16.011718 7.632813 23.863281 3.867188zm-67.519531 6.703125c-.050782.8125-.070313 1.621094-.0625 2.429687h-48.804688l57.214844-21.925781c-4.785156 5.25-7.886719 12.058594-8.347656 19.496094zm-30.128907-98.457032c9.632813-3.691406 19.792969-5.535156 30.003907-5.535156 10.476562 0 21.007812 1.941406 31.066406 5.820313 18.289062 7.058593 33.96875 20.050781 44.601562 36.855469l-159.457031 61.117187c-7.1875-42.085937 14.894531-83.351563 53.785156-98.257813zm-64.210937 119.734376c0-2.121094 1.726562-3.847657 3.847656-3.847657h99.066406c.050782 0 .105469.003907.160156.003907.054688 0 .109376-.003907.164063-.003907h84.9375c.117187.003907.238281.003907.355469 0h5.773437c2.121094 0 3.847657 1.726563 3.847657 3.847657 0 2.121093-1.726563 3.847656-3.847657 3.847656h-5.921875c-.117187-.003906-.234375-.003906-.351562 0h-178.058594c-.027344 0-.058594 0-.089844 0h-6.035156c-2.121094 0-3.847656-1.726563-3.847656-3.847656zm21.859375 27.5-2.238281-8.652344h158.910156l-2.242188 8.652344c-.488281 1.894531-2.199218 3.214843-4.152344 3.214843h-146.125c-1.953124 0-3.664062-1.320312-4.152343-3.214843zm28.507812 18.214843h102.820313c.855468 5.875 2.691406 11.585938 5.367187 16.78125h-113.558593c2.675781-5.195312 4.511718-10.90625 5.371093-16.78125zm-200.703125-137.058593c41.648438 0 77.039063 30.625 85.386719 72.496093h-170.773437c8.351562-41.871093 43.738281-72.496093 85.386718-72.496093zm-99.074218 91.34375c0-2.121094 1.726562-3.847657 3.847656-3.847657h189.257812.085938.066406 1.042969c2.125 0 3.851562 1.726563 3.851562 3.847657 0 2.121093-1.726562 3.847656-3.851562 3.847656h-5.917969c-.117188-.003906-.234375-.003906-.351562 0h-178.050782c-.035156 0-.066406 0-.097656 0h-6.035156c-2.121094 0-3.847656-1.726563-3.847656-3.847656zm21.859374 27.5-2.238281-8.652344h158.910157l-2.242188 8.652344c-.488281 1.894531-2.199219 3.214843-4.152344 3.214843h-146.121094c-1.957031 0-3.664062-1.320312-4.15625-3.214843zm24.289063 18.214843h102.820313c.855468 5.875 2.695312 11.585938 5.367187 16.78125h-113.558594c2.675781-5.195312 4.515625-10.90625 5.371094-16.78125zm-22.015625 103.496094c-10.105469 0-18.324219-8.21875-18.324219-18.324219v-27.707031h36.648438v27.707031c.003906 10.105469-8.21875 18.324219-18.324219 18.324219zm51.652344 0c-10.105469 0-18.324219-8.21875-18.324219-18.324219v-27.707031h36.648437v27.707031c0 10.105469-8.21875 18.324219-18.324218 18.324219zm51.652344 0c-10.105469 0-18.328126-8.21875-18.328126-18.324219v-27.707031h36.652344v27.707031c0 10.105469-8.21875 18.324219-18.324218 18.324219zm51.648437 0c-10.101563 0-18.324219-8.21875-18.324219-18.324219v-27.707031h36.652344v27.707031c0 10.105469-8.222656 18.324219-18.328125 18.324219zm51.652344 0c-10.105469 0-18.324219-8.21875-18.324219-18.324219v-27.707031h36.652344v27.707031c0 10.105469-8.222656 18.324219-18.328125 18.324219zm51.652343 0c-10.105468 0-18.324218-8.21875-18.324218-18.324219v-27.707031h36.648437v27.707031c0 10.105469-8.21875 18.324219-18.324219 18.324219zm51.652344 0c-10.105468 0-18.328125-8.21875-18.328125-18.324219v-27.707031h36.652344v27.707031c0 10.105469-8.21875 18.324219-18.324219 18.324219zm51.648438 0c-10.105469 0-18.324219-8.21875-18.324219-18.324219v-27.707031h36.648437v27.707031c.003907 10.105469-8.21875 18.324219-18.324218 18.324219zm51.652344 0c-10.105469 0-18.324219-8.21875-18.324219-18.324219v-27.707031h36.648437v27.707031c0 10.105469-8.21875 18.324219-18.324218 18.324219zm29.039062-61.03125h-471.3125c-2.945312 0-5.34375-2.394531-5.34375-5.34375 0-2.945313 2.398438-5.339844 5.34375-5.339844h471.3125c2.945312 0 5.34375 2.394531 5.34375 5.339844 0 2.949219-2.398438 5.34375-5.34375 5.34375zm0 0" /><path d="m488.441406 312.460938c-4.140625 0-7.5 3.355468-7.5 7.5v61.734374c0 6.941407-5.644531 12.59375-12.589844 12.59375h-424.675781c-6.945312 0-12.59375-5.648437-12.59375-12.59375v-62.152343c0-4.144531-3.359375-7.5-7.5-7.5s-7.5 3.355469-7.5 7.5v62.152343c0 15.214844 12.378907 27.59375 27.59375 27.59375h11.1875v40.972657c0 11.039062 8.980469 20.015625 20.015625 20.015625h6.195313c11.035156 0 20.015625-8.976563 20.015625-20.015625v-40.972657h310.332031v41.109376c0 11.039062 8.980469 20.019531 20.015625 20.019531h6.195312c11.039063 0 20.015626-8.980469 20.015626-20.019531v-41.109376h10.703124c15.214844 0 27.59375-12.378906 27.59375-27.59375v-61.734374c-.003906-4.144532-3.359374-7.5-7.503906-7.5zm-402.351562 137.800781c0 2.765625-2.25 5.015625-5.015625 5.015625h-6.195313c-2.765625 0-5.015625-2.25-5.015625-5.015625v-40.972657h16.226563zm356.558594.136719c0 2.769531-2.25 5.019531-5.015626 5.019531h-6.195312c-2.765625 0-5.015625-2.25-5.015625-5.019531v-41.109376h16.226563zm0 0" /></svg></span>
            <BuffetModal
              show={buffetModalShow}
              onHide={() => setBuffetModalShow(false)}
              />
            <h5 className="u-text u-text-7">Buffet</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-clearfix u-hidden-md u-hidden-sm u-hidden-xs u-section-6" id="carousel_be3c">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-clearfix u-gutter-20 u-layout-wrap u-layout-wrap-1">
        <div className="u-gutter-0 u-layout">
          <div className="u-layout-col">
            <div className="u-container-style u-image u-layout-cell u-left-cell u-right-cell u-size-20 u-image-1">
              <div className="u-container-layout u-container-layout-1" />
            </div>
            <div className="u-container-style u-image u-layout-cell u-left-cell u-right-cell u-size-20 u-image-2">
              <div className="u-container-layout u-container-layout-2" />
            </div>
            <div className="u-container-style u-image u-layout-cell u-left-cell u-right-cell u-size-20 u-image-3">
              <div className="u-container-layout u-container-layout-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="u-align-center u-container-style u-group u-palette-4-base u-group-1">
        <div className="u-container-layout u-valign-middle u-container-layout-4">
          <h2 className="u-text u-text-1">BANQUETES</h2>
          <p className="u-custom-font u-heading-font u-text u-text-default u-text-2">Toda una experiencia para tus sentidos, en cada uno de los tiempos&nbsp;</p>
        </div>
      </div>
    </div>
  </section>
  <section className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-clearfix u-hidden-lg u-hidden-xl u-section-7" id="carousel_86d7">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-clearfix u-expanded-width-xs u-gutter-20 u-layout-wrap u-layout-wrap-1">
        <div className="u-gutter-0 u-layout">
          <div className="u-layout-col">
            <div className="u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-image u-layout-cell u-left-cell u-right-cell u-size-20 u-image-1">
              <div className="u-container-layout u-container-layout-1" />
            </div>
            <div className="u-container-style u-image u-layout-cell u-left-cell u-right-cell u-size-20 u-image-2">
              <div className="u-container-layout u-container-layout-2" />
            </div>
            <div className="u-container-style u-image u-layout-cell u-left-cell u-right-cell u-size-20 u-image-3">
              <div className="u-container-layout u-container-layout-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="u-align-center u-container-style u-expanded-width-xs u-group u-palette-4-base u-group-1">
        <div className="u-container-layout u-valign-middle u-container-layout-4">
          <h2 className="u-text u-text-1">BANQUETES</h2>
          <p className="u-custom-font u-heading-font u-text u-text-default u-text-2">Toda una experiencia para tus sentidos, en cada uno de los tiempos&nbsp;</p>
        </div>
      </div>
    </div>
  </section>
  <section className="u-clearfix u-palette-4-light-3 u-section-8" id="carousel_5c32">
    <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-xl u-sheet-1">
      <div className="u-clearfix u-expanded-width-sm u-expanded-width-xs u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
              <div className="u-container-layout u-valign-middle-sm u-valign-middle-xs u-container-layout-1">
                <h1 className="u-custom-font u-font-roboto u-text u-text-default u-text-1">BODAS</h1>
                <p className="u-custom-font u-font-roboto u-text u-text-2">¡Nos encargamos de todos y cada uno de los detalles para ese dia tan especial!</p>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-palette-4-light-1 u-right-cell u-size-30 u-layout-cell-2">
              <div className="u-container-layout u-valign-middle-lg u-valign-middle-sm u-valign-middle-xl u-valign-middle-xs u-container-layout-2">
                <img src={bn32} alt className="u-border-8 u-border-white u-expanded-width-xs u-image u-image-default u-image-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-clearfix u-section-9" id="carousel_44c7">
    <div className="u-palette-4-base u-shape u-shape-rectangle u-shape-1" />
    <div className="u-palette-4-base u-shape u-shape-rectangle u-shape-2" />
    <img className="u-align-left u-image u-image-1" src={bn33} />
    <div className="u-align-center u-border-6 u-border-palette-4-base u-container-style u-group u-white u-group-1">
      <div className="u-container-layout u-valign-middle u-container-layout-1">
        <h1 className="u-text u-text-1">XV Años</h1>
        <p className="u-custom-font u-font-roboto u-text u-text-2">Festejamos mejor que nadie un evento tan importante y significativo.</p>
      </div>
    </div>
  </section>
  <section className="u-clearfix u-palette-4-light-2 u-section-10" id="sec-814f">
    <div className="u-clearfix u-sheet u-valign-middle-xl u-sheet-1">
      <div className="u-clearfix u-expanded-width u-gutter-44 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-expand-resize u-layout-cell u-left-cell u-size-28 u-layout-cell-1">
              <div className="u-container-layout">
                <div className="u-align-left u-border-10 u-border-palette-4-base u-shape u-shape-1" />
                <img className="u-align-left u-image u-image-1" src={bn34} />
              </div>
            </div>
            <div className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-layout-cell u-right-cell u-size-32 u-layout-cell-2">
              <div className="u-container-layout u-valign-middle-sm u-container-layout-2">
                <h1 className="u-text u-text-1">Graduaciones</h1>
                <p className="u-custom-font u-font-roboto u-text u-text-2">
                  <font className="u-text-palette-4-base">#PromExperts<br />
                  </font>¡Todo lo que necesitas para tu graduación, en un mismo lugar!&nbsp;<br />Por años hemos ofrecido nuestros servicios para las universidades más importantes del Bajío.¡Contamos con servicios Pre y After!&nbsp;
                </p>
                <div className="u-hidden-md u-hidden-sm u-hidden-xs u-palette-4-base u-shape u-shape-rectangle u-shape-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-align-center u-clearfix u-white u-section-11" id="carousel_8ec2">
    <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
      <h1 className="u-text u-text-default u-text-1">Eventos Empresariales</h1>
      <p className="u-text u-text-2">Hemos realizado eventos empresariales con un aforo de hasta 3800 personas, tanto para empresas del sector industrial como banquero.</p>
      <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
        <div className="u-gutter-0 u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-left-cell u-shape-rectangle u-size-30 u-layout-cell-1">
              <div className="u-container-layout u-valign-middle u-container-layout-1">
                <img src={logoemp1} alt="logo-empresa1" className="u-image u-image-contain u-image-default u-image-1" />
              </div>
            </div>
            <div className="u-align-center u-container-style u-layout-cell u-right-cell u-shape-rectangle u-size-30 u-layout-cell-2">
              <div className="u-container-layout u-valign-middle u-container-layout-2">
                <img src={logoemp2} alt="logo-empresa2" className="u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-image u-image-contain u-image-default u-image-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-align-center u-clearfix u-palette-4-base u-section-12" id="carousel_2f53">
    <div className="u-expanded-width u-palette-4-light-3 u-shape u-shape-rectangle u-shape-1" />
    <div className="u-align-center u-container-style u-group u-group-1">
      <div className="u-container-layout u-valign-middle u-container-layout-1">
        <h2 className="u-text u-text-body-color u-text-1">BUFFET</h2>
        <p className="u-text u-text-body-color u-text-2">Contamos con una amplia variedad de deliciosos platillos para tu buffet.<br />
        </p>
      </div>
    </div>
    <div className="u-gallery u-layout-grid u-lightbox u-no-transition u-show-text-on-hover u-gallery-1">
      <div className="u-gallery-inner u-gallery-inner-1">
        <div className="u-effect-fade u-gallery-item">
          <div className="u-back-slide" data-image-width={1280} data-image-height={828}>
            <img className="u-back-image u-expanded" src={bn45} />
          </div>
          <div className="u-over-slide u-shading u-over-slide-1">
            <h3 className="u-gallery-heading" />
            <p className="u-gallery-text" />
          </div>
        </div>
        <div className="u-effect-fade u-gallery-item">
          <div className="u-back-slide" data-image-width={1280} data-image-height={853}>
            <img className="u-back-image u-expanded u-back-image-2" src={bn46} />
          </div>
          <div className="u-over-slide u-shading u-over-slide-2">
            <h3 className="u-gallery-heading" />
            <p className="u-gallery-text" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
}
