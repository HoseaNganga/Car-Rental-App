import React from "react";
import icon1 from "../../../ImageAssests/download/appstore.svg";
import icon2 from "../../../ImageAssests/download/googleapp.svg";
import icon3 from "../../../ImageAssests/download/bg02.png";
import "./DownloadApp.css";

const DownloadApp = () => {
  return (
    <div className="downloadContainer">
      <div className="downloadImg">
        <img src={icon3} alt="icon 3" />
      </div>
      <div className="downloadHeader">
        <h3>Download our app to get most out of it</h3>
        <p>
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className="flexDownloadImages">
          <div>
            <img src={icon1} alt="appStore" />
          </div>
          <div>
            <img src={icon2} alt="googleApp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
