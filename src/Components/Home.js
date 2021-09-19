import React from "react";

const Home = () => (
  <main>
    <div className="home-grid">
      <div className="main-header">
        <h1>Hello!</h1>
      </div>
      <div className="home-text-container">
        <p>
          Recovering-attorney-turned-software-developer who took advantage of Covid-19 to make a long-overdue career change into tech. 
        </p>
        <p>
          Problem-solving, puzzles, and figuring out how things work are some of my favorite things. I am also a Brazilian Jiu Jitsu instructor.
        </p>
        <p>
          Thanks for visiting.  You can find out more <a href={'./about'}>about me</a> or have a look at some of my <a href={'/projects'}>projects</a>.
        </p>
      </div>
    </div>
  </main>
);

export default Home;
