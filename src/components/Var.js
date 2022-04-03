import React, { Component } from "react";

class Var extends Component {
  render() {
    return (
      <section className="projects">
        {/* Hello my name is {this.state.name}. I am {this.state.age} years old. */}

        <div className="project">
          <a
            style={{
              backgroundImage: "url(" + this.props.Imgsrc + ")",
              alt: "app-images",
              height: "600px",
              width: "100%",
            }}
            href={this.props.link}
            target={"_blank"}
          >
            {/* <img src={this.props.Imgsrc} alt={this.props.alt} /> */}

            <h3>{this.props.title}</h3>
          </a>
          <figcaption>{this.props.description}</figcaption>
        </div>
      </section>
    );
  }
}
export default Var;
