import React, { Component } from "react";
import portrait from "../img/image.jpg";

class Info extends Component {
  render() {
    return (
      <main>
        <article>
          <h1>Intro</h1>
          <img src={portrait} alt="Sam image" />

          <section id="about">
            <h2>About</h2>
            <div className="circle">
              <p>Samikshya KC. </p>
              <p>
                She is a front-end web developer, currently studying a Web
                design and development course at Humber.
              </p>
              <p>
                She has a Software engineer degree and a Project Management-IT
                degree as well.
              </p>
              <p>
                In addition to that She has done numerous other courses to
                enhance her skill such as: Shecodes, Udemy courses,
                Javascript30.
              </p>
            </div>
          </section>
        </article>
      </main>
    );
  }
}

export default Info;
