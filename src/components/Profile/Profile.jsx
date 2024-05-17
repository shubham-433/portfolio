import React from "react";
import EducationRoadMap from "./EducationRoadMap";
import Skills from "./Skills";
const Profile = () => {
  return (
    <>
      <div className="container p-4">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="details-tab"
              data-bs-toggle="tab"
              data-bs-target="#details-tab-pane"
              type="button"
              role="tab"
              aria-controls="details-tab-pane"
              aria-selected="true"
            >
              My Details
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="awards-tab"
              data-bs-toggle="tab"
              data-bs-target="#awards-tab-pane"
              type="button"
              role="tab"
              aria-controls="awards-tab-pane"
              aria-selected="false"
              txtct
            >
              My Skills
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="skils-tab"
              data-bs-toggle="tab"
              data-bs-target="#skils-tab-pane"
              type="button"
              role="tab"
              aria-controls="skils-tab-pane"
              aria-selected="false"
            >
              Education
            </button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="details-tab-pane"
            role="tabpanel"
            aria-labelledby="details-tab"
            tabIndex="0"
          >
            <div className="developer-info-wrap mt-4">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-wrap">
                    <li>
                      <div className="icon">
                        <img src="/img/icon/developer_icon01.png" alt="" />
                      </div>
                      <div className=" title">
                        <span className="text-white">Name:</span>
                        <p className="text-white">Shubham Varma</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/img/icon/developer_icon02.png" alt="" />
                      </div>
                      <div className="text-white">
                        <span>Email:</span>
                        <p className="text-white">shubham.vr.333@gmail.com</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/img/icon/developer_icon04.png" alt="" />
                      </div>
                      <div className="text-white">
                        <span>Phone No:</span>
                        <p className="text-white">+919920354977</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-wrap">
                    <li>
                      <div className="icon">
                        <img src="/img/icon/developer_icon05.png" alt="" />
                      </div>
                      <div className="text-white">
                        <span className="title">Address:</span>
                        <p className="text-white">Kapurbawadi Thane West Maharashtra</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/img/icon/developer_icon06.png" alt="" />
                      </div>
                      <div className="text-white">
                        <span>Languages:</span>
                        <p className="text-white">English, Hindi</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="awards-tab-pane"
            role="tabpanel"
            aria-labelledby="awards-tab"
            tabIndex="0"
          >
            <div className="developer-info-wrap mt-4">
              <div className="row">
                <div className="col-md-12">
                  <Skills/>
                </div>
               
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="skils-tab-pane"
            role="tabpanel"
            aria-labelledby="skils-tab"
            tabIndex="0"
          >
            <div className="developer-info-wrap mt-4">
              <div className="row">
                <div className="col-md-12">
                  <EducationRoadMap/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
