import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const IntrestList = (props) => {
  useEffect(() => {
    $(".services-item-two").on("mouseenter", function () {
      $(this)
        .addClass("active")
        .parent()
        .siblings()
        .find(".services-item-two")
        .removeClass("active");
    });
  }, []);

  return (
    <div className="services-item-two">
      <div className="services-content-two">
        <h2 className="title">
          <img src={props.item.src} alt="" srcset="" style={{"height":'50px',"width":"50px","padding":"5px"}} />
          {props.item.title}
        </h2>
      </div>
    </div>
  );
};

export default IntrestList;
