import React from "react";

const Home = () => (
  <main>
    <div className="home-grid">
      <div className="home-header">
        <h1>Hello!</h1>
      </div>
      <div className="home-text-container">
        <p>
          Recovering-attorney-turned-software-developer who took advantage of Covid-19 to make a long-overdue career change into coding and software development. 
        </p>
        <p>
          Problem-solving, puzzles, and figuring out how things work are some of my favorite things. Brazilian Jiu Jitsu Brown Belt and instructor.
        </p>
        <p>
          Thanks for visiting.  Find out more about me <a href={'./about'}>here</a> or have a look at some of my projects <a href={'./Projects/ProjectGallery.js'}>here</a>.
        </p>
      </div>
    </div>
  </main>
);

export default Home;
