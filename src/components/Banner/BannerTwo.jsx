import React from "react";
import { Link } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";

const BannerTwo = () => {
  const parallax = useParallax({
    translateY: [-24, 24],
    rootMargin: 0,
  });

  const filePath = "/pdf/Resume.pdf";
  return (
    <section className="about-area-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="about-img-two text-center">
              <img src="/img/images/h2_about_img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content-two">
              <div className="section-title white-title title-style-two mb-30">
                <span className="sub-title">I'm a Developer</span>
                <h2 className="title">
                  I Can Develop per <br />
                  Your Requirement
                </h2>
              </div>
              <p>
                Hello there! I'm a web developer, and I'm very passionate and
                dedicated to my work. With 1 years experience as 
                web developer, I have acquired the skills and knowledge
                necessary to make your project a success. I enjoy every step of
                the design process, from discussion and collaboration.
              </p>
             
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img
          src="/img/images/h2_about_shape01.png"
          alt=""
          className="shape-one"
          ref={parallax.ref}
        />
        <img
          src="/img/images/h2_about_shape02.png"
          alt=""
          className="shape-two"
        />
        <img
          src="/img/images/h2_about_shape03.png"
          alt=""
          className="shape-three"
        />
      </div>
    </section>
  );
};

export default BannerTwo;
