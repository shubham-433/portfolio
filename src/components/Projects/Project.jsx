import React from "react";

const Project = ({ item }) => {
  return (
    <div className="tools-item">
      <div className="tools-icon">
        <img src={item.src} alt="" />
      </div>

      <div className="tools-content">
        <h3 className="title ">{item?.title}</h3>
        {item?.desc ? (
          <p>{item.desc}</p>
        ) : (
          <p className="p-4">
            <a href="https://github.com/shubham-433" target="_blank">
              More Projects
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Project;
