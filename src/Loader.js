import React, { Component } from "react";

export default class Loader extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
    };
  }

  fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.addEventListener("load", (evt) => {
        resolve(evt.currentTarget.result);
      });

      fileReader.addEventListener("error", (evt) => {
        reject(new Error(evt.currentTarget.error));
      });

      fileReader.readAsDataURL(file);
    });
  };

  handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map((o) => this.fileToDataUrl(o)));
    this.setState((state) => {
      const imgs = state.imgs.concat(urls);

      return {
        imgs,
      };
    });


  };
  onRemoveItem = i => {
    this.setState((state) => {
      const imgs = state.imgs.filter((item, j) => i !== j);
 
      return {
        imgs,
      };
    });
  };
  // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img

  // onChange = (e) => {
  //   let files = [...e.target.files];
  //   this.setState(
  //       state => {
  //           const imgs = state.imgs.concat(files);

  //           return {
  //             imgs,

  //           }})}

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
                onChange={this.handleSelect}
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

        <div
          style={{
            margin: "50px",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap:'wrap'
          }}
        >
          {this.state.imgs.length !== 0 &&
            this.state.imgs.map((item, index) => (
              <div >
                <div style={{ width: "200px", position: "relative" }}>
                  <img style={{ width: "200px", margin: "20px" }} src={item} />

                  <button
                    
                    style={{ position: "absolute", top: "0", right: "0" }}
                    onClick={() => this.onRemoveItem(index)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
