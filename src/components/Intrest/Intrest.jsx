import React from "react";
import IntrestList from "./IntrestList";

const Intrest = () => {
  const IntrestItemList = [
    {
      src: "/img/icon/programming.gif",
      title: "Programming",
    },
    {
      src: "/img/icon/website-builder.gif",
      title: "Web Development",
    },
    {
      src: "/img/icon/big-data.gif",
      title: "Cloud Computing",
    },
    {
      src: "/img/icon/ux-design.gif",
      title: "UI/UX Design",
    },
    {
      src: "/img/icon/virtual-lab.gif",
      title: "Database Management",
    },
    {
      src: "/img/icon/webhosting.gif",
      title: "Deployment & Hosting",
    },

    {
      src: "/img/icon/digital-collaboration.gif",
      title: "Collaborative Projects",
    },
    {
      src: "/img/icon/online-lesson.gif",
      title: "Continuous Learning",
    },
  ];

  return (
    <section className="services-area-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-two white-title mb-65 text-center">
              <span className="sub-title">Intrest</span>
              <h2 className="title">Technology I Use</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {IntrestItemList.map((x, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <IntrestList item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intrest;
