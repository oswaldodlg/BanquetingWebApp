import React from 'react';
import ContactForm from './ContactForm';
import Pdf from './AvisoPrivacidad_Banqueting.pdf';
import Whatsapp from '../Banqueting-Inicio/images/whatsapimg.png'

import './Info.css'

export default function Info() {
    return (
        <div>
          <section className="u-align-center u-clearfix u-section-info" id="sec-a2ef">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-align-left u-social-icons u-spacing-25 u-text-palette-5-base u-social-icons-1">
              <a className="u-social-url" target="_blank" href="https://facebook.com/banquetingcelaya/"><span className="u-icon u-icon-circle u-social-facebook u-social-type-logoColor u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-b651" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 112 112" x="0px" y="0px" id="svg-b651" style={{color: 'rgb(59, 89, 152)'}}><path fill="currentColor" d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z" /></svg></span>
              </a>
              <a className="u-social-url" target="_blank" href="https://www.instagram.com/banqueting/"><span className="u-icon u-icon-circle u-social-instagram u-social-type-logoColor u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-3989" /></svg><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 112 112" x="0px" y="0px" id="svg-3989" style={{color: 'rgb(197, 54, 164)'}}><path fill="currentColor" d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z" /><path fill="currentColor" d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z" /><path fill="currentColor" d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z" /></svg></span>
              </a>
            </div>
            <a href="https://wa.link/sozy9v">
            <img src={Whatsapp} alt="WhatsLogo" className="u-image u-image-default u-image-1" data-image-width={360} data-image-height={360}/>
            </a>
          </div>
        </section>

  <section
    className="u-clearfix u-palette-1-light-3 u-section-2"
    id="carousel_0cf7"
  >
    <div
      style={{
        position: "absolute",
        width: "178%",
        left: "-39%",
        height: "178%",
        top: "-39%"
      }}
      className="embed-responsive"
    >
      <iframe
        style={{
          title: "maps3",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        className="embed-responsive-item"
        src="//maps.google.com/maps?output=embed&q=18%20Vieille%20Rue%20du%20Moulin&z=10&t=m"
        frameBorder={0}
        allowFullScreen
      />
    </div>
  </section>
  <section className="Contacto u-clearfix u-palette-1-light-3 u-section-3" id="sec-3b14">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-clearfix u-gutter-18 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-col">
            <div className="u-size-30">
              <div className="u-layout-row">
                <div className="u-align-center-xs u-container-style u-layout-cell u-left-cell u-palette-1-base u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h2 className="u-text u-text-1">Contáctanos</h2>
                    <p className="u-text u-text-2">Con gusto te atenderemos</p>
                    <p className="u-text u-text-3">
                      Jaime Nuno 212 Zona Centro
                      <br />
                      Celaya, Guanajuato&nbsp;
                      <br />
                      banquetesarqserv_isela@hotmail.com
                      <br />
                      461-616-51-74
                    </p>
                    <a
                      href = {Pdf} 
                      target = "_blank"
                      className="u-active-none u-border-2 u-border-white u-btn u-btn-rectangle u-button-style u-hover-none u-none u-btn-1"
                    >
                      Aviso de privacidad
                    </a>
                  </div>
                </div>
                <div className="u-align-left u-container-style u-expand-resize u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle">
                    <span className="u-icon u-icon-circle u-text-palette-1-base u-icon-1">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 50 50"
                        style={{}}
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="#svg-7dc6"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        xmlSpace="preserve"
                        className="u-svg-content"
                        viewBox="0 0 50 50"
                        x="0px"
                        y="0px"
                        id="svg-7dc6"
                        style={{ color: "rgb(215, 90, 74)" }}
                      >
                        <path
                          style={{ fill: "currentColor" }}
                          d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
	c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
	c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-size-30">
              <div className="u-layout-row">
                <div
                  className="u-container-style u-image u-layout-cell u-left-cell u-size-30 u-image-1"
                  data-image-width={2000}
                  data-image-height={1333}
                >
                  <div className="u-container-layout">
                    <div className="u-expanded u-grey-light-2 u-map u-map-1">
                      <div className="embed-responsive">
                        <iframe
                          title = "maps2"
                          className="embed-responsive-item"
                          src="//maps.google.com/maps?output=embed&q=Jaime%20Nuno%20212%20Zona%20Centro.%20Celaya%2C%20Guanajuato%2C%20Mexico&z=10&t=m"
                          data-map="JTdCJTIycG9zaXRpb25UeXBlJTIyJTNBJTIybWFwLWFkZHJlc3MlMjIlMkMlMjJhZGRyZXNzJTIyJTNBJTIySmFpbWUlMjBOdW5vJTIwMjEyJTIwWm9uYSUyMENlbnRyby4lMjBDZWxheWElMkMlMjBHdWFuYWp1YXRvJTJDJTIwTWV4aWNvJTIyJTJDJTIyem9vbSUyMiUzQTEwJTJDJTIydHlwZUlkJTIyJTNBJTIycm9hZCUyMiUyQyUyMmxhbmclMjIlM0ElMjIlMjIlN0Q="
                        />
                      </div>
                    </div>
                    <div className="u-expanded u-opacity u-opacity-10 u-palette-2-base u-shape u-shape-rectangle u-shape-1" />
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-4">
                  <div className="u-container-layout">
                    <div className="u-form u-form-1">
                     <ContactForm /> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
}
