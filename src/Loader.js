import React, { Component } from "react";

export default class Loader extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
    };
  }

  onChange = (e) => {
    this.setState({
      imgs: e.target.files,
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: "inline-grid" }}>
          <div style={{ position: "relative" }}>
            <div>
              <input
                style={{ width: "300px", height: "100px" }}
                ref="file"
                type="file"
                name="user[image]"
                multiple="true"
                onChange={this.onChange}
              />
            </div>
            <div
              style={{
                pointerEvents: "none",
                position: "absolute",
                width: "300px",
                height: "100px",
                color: "black",
                fontSize: "2rem",
                backgroundColor: "green",
                bottom: "0px",
                left: "0",
                right: "0",
              }}
            >
              <p> Click Here</p>
            </div>
          </div>
        </div>

        <div style={{ margin: "50px", textAlign: "center" }}>
          {this.state.imgs &&
            [...this.state.imgs].map((file) => (
              <img
                style={{ width: "200px", margin: "20px" }}
                src={URL.createObjectURL(file)}
              />
            ))}
        </div>
      </div>
    );
  }
}
