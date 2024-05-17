import React from "react";
import Project from "./Project";

const ToolsArea = () => {
  const Project_items = [
    {
      src: "/img/icon/tools_icon04.png",
      title: "ChargEv",
      desc: `website to locate nearby EV charging points, providing users with accurate and real-time information.`,
    },
    {
      src: "/img/icon/tools_icon02.png",
      title: "NewsHub",
      desc: `Dynamic website using Node.js for an online news system, ensuring robust performance and scalability.`,
    },
    {
      src: "/img/icon/tools_icon02.png",
      title: "DiagnoHealth",
      desc: `Designed and developed a web-based diagnostic tool for disease assessment
Used machine learning algorithms.`,
    },
    {
      src: "/img/icon/tools_icon04.png",
      title: "CodeVisualizer",
      desc: `Vs code extension to visualize code structre in graphical formate.`,
    },
    {
      src: "/img/icon/tools_icon02.png",
      title: "web summrizer",
      desc: `website to summerize webpage based on given input link.`,
    },
    {
      src: "/img/icon/tools_icon06.png",
      title: "More Projects",
    },
  ];

  return (
    <section className="tools-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title title-style-two white-title text-center mb-50">
              <span className="sub-title">My Projcet</span>
              <h2 className="title">My Projcet </h2>
            </div>
          </div>
        </div>

        <div className="tools-item-wrap">
          <div className="row lg-justify-content-center">
            {Project_items.map((x, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <Project item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsArea;
