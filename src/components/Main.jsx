import React, { Component } from "react";
import LoginImage from "../images/login.jpg"
class Main extends Component {
  render() {
    return (
      <div className="uk-container">
        <div className="section-1">
          <h4>
            <span uk-icon="star" /> Starred Boards
          </h4>
          <div
            class="uk-child-width-1-5@m uk-grid-small uk-grid-match"
            data-uk-grid="true"
          >
            <div>
            <div class="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage: `url(${LoginImage})`}}>
                <h3 class="uk-card-title">arcgis Learning</h3>
              </div>
            </div>
            <div>
              <div class="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage: `url(${LoginImage})`}}>
                <h3 class="uk-card-title">arcgis Learning</h3>
              </div>
            </div>
            <div>
            <div class="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{background: "#1e87f0"}}>
                <h3 class="uk-card-title">arcgis Learning</h3>
            </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="section-2">
          <h4>
            <span uk-icon="user" /> Personal Boards
          </h4>
          <div class="uk-child-width-1-5@m uk-grid-small uk-grid-match" data-uk-grid="true" >
      
          <div>
              <div class="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage: `url(${LoginImage})`}}>
                <h3 class="uk-card-title">arcgis Learning</h3>
              </div>
            </div>
            <div>
              <div class="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage: `url(${LoginImage})`}}>
                <h3 class="uk-card-title">arcgis Learning</h3>
              </div>
            </div>
            <div>
              <div class="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage: `url(${LoginImage})`}}>
                <h3 class="uk-card-title">arcgis Learning</h3>
              </div>
            </div>
            <div>
              <div class="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage: `url(${LoginImage})`}}>
                <h3 class="uk-card-title">arcgis Learning</h3>
              </div>
            </div>
            <div>
              <div class="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage: `url(${LoginImage})`}}>
                <h3 class="uk-card-title">arcgis Learning</h3>
              </div>
            </div>

            <div>
              <div class="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage: `url(${LoginImage})`}}>
                <h3 class="uk-card-title">arcgis Learning</h3>
              </div>
            </div>
                    
          </div>
           <div className="uk-margin">
            <a href="dd" className="uk-button uk-button-danger">Show More ...</a>
         </div> 
        </div>
        <hr/>
        <div className="section-3">
        <h4>
            <span uk-icon="users" /> test***
          </h4>
        </div>
      </div>
    );
  }
}

export default Main;
