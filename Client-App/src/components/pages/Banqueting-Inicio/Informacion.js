import React from 'react'

import "./nicepage.css";


export default function Informacion() {
    return (
        <div>
  <section
    className="u-clearfix u-palette-1-light-3 u-section-1"
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
    </div>
  </section>
  <section className="u-clearfix u-palette-1-light-3 u-section-2" id="sec-3b14">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-clearfix u-gutter-18 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-col">
            <div className="u-size-30">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-left-cell u-palette-1-base u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h2 className="u-text u-text-1">Contáctanos</h2>
                    <p className="u-text u-text-2">Con gusto te atenderemos</p>
                    <p className="u-text u-text-3">
                      18 Vieille Rue du Moulin
                      <br />
                      1180 Uccle
                      <br />
                      info@digital.com
                      <br />
                      +32 478 66 77 56
                      <br />
                    </p>
                  </div>
                </div>
                <div className="u-align-left u-container-style u-expand-resize u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout" />
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
                    <div className="u-expanded u-grey-light-2 u-map">
                      <div className="embed-responsive">
                      </div>
                    </div>
                    <div className="u-expanded u-opacity u-opacity-10 u-palette-2-base u-shape u-shape-rectangle u-shape-1" />
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-4">
                  <div className="u-container-layout">
                    <div className="u-form u-form-1">
                      <form
                        action="#"
                        method="POST"
                        className="u-block-f8dd-19 u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                        source="custom"
                      >
                        {/* hidden inputs for siteId and pageId */}
                        <div className="u-form-group u-form-name u-form-group-1">
                          <label
                            htmlFor="name-c08e"
                            className="u-form-control-hidden u-label"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your Name"
                            id="name-c08e"
                            name="name"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                            required
                          />
                        </div>
                        {/* always visible */}
                        <div className="u-form-email u-form-group u-form-group-2">
                          <label
                            htmlFor="email-c08e"
                            className="u-form-control-hidden u-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="Enter a valid email address"
                            id="email-c08e"
                            name="email"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                            required
                          />
                        </div>
                        <div className="u-form-group u-form-message u-form-group-3">
                          <label
                            htmlFor="message-c08e"
                            className="u-form-control-hidden u-label"
                          >
                            Message
                          </label>
                          <textarea
                            placeholder="Enter your message"
                            rows={4}
                            cols={50}
                            id="message-c08e"
                            name="message"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                            required
                            defaultValue={""}
                          />
                        </div>
                        <div className="u-form-group u-form-submit u-form-group-4">
                          <a
                            href="#"
                            className="u-btn u-btn-submit u-button-style u-custom-font u-font-ubuntu u-palette-2-base u-btn-1"
                          >
                            Submit
                          </a>
                          <input
                            type="submit"
                            defaultValue="submit"
                            className="u-form-control-hidden"
                          />
                        </div>
                        <div className="u-form-send-message u-form-send-success">
                          {" "}
                          Thank you! Your message has been sent.{" "}
                        </div>
                        <div className="u-form-send-error u-form-send-message">
                          {" "}
                          Unable to send your message. Please fix errors then
                          try again.{" "}
                        </div>
                        <input
                          type="hidden"
                          defaultValue
                          name="recaptchaResponse"
                        />
                      </form>
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
