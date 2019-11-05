import React, { Component } from "react";
import "./HomepageTopview.css";

class HomepageTopView extends Component {
  render() {
    return (
      <div>
        <section className="hero-section">
          <div className="container">
            <div className="w-75 hero-text col-sm-12 text-center">
              <h3 className="text-uppercase" style={{ fontWeight: "bold" }}>
                Providing best health care you deserve
              </h3>
              <p className="text-left">
                Purity is a private owned hospital that has been providing
                excellent health care services to clients for a decade now.
                <br />
                We are fully equipped with the best health practioners, state of
                the art equipments, innovative technologies and we are open 24/7
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default HomepageTopView;
