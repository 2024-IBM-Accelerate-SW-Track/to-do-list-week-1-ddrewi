import React, { Component } from 'react';
import "./About.css";
import pic from "../assets/profile_pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img className="profile_image" src={ pic } alt="Profile Pic"></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Andrew Di</div>
              <div className="brief_description">
                <p>
                  CS major at the University of Illinois Urbana-Champaign.<br />
                  Broadly interested in "making things go fast".<br />
                  Loves to take walks and look at trees.<br />
                  Spends too much time playing Sudoku, wondering what to eat, and dreading existential crises.<br />
                  Excited to meet new people. Feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}