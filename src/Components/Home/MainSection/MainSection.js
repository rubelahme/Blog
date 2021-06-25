import React from "react";
import "./MainSection.scss";
import LightSpeed from "react-reveal/LightSpeed";
const MainSection = () => {
  return (
    <LightSpeed top duration={7000} distance="5px">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="center-1">
              <h1 className="text-center">
                World Book Story <br />
                <div className="input-1">
                  <form action="">
                    <input
                      className="input-3"
                      type="text"
                      placeholder="Book List Search..."
                    />
                    <input className="input-2" type="submit" value="Search" />
                  </form>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </LightSpeed>
  );
};

export default MainSection;
