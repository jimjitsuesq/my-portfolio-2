import React from "react";
import { Document, Page } from "react-pdf";

import resume from "../JimPeters.pdf";

function Resume() {
  return (
    <main>
      <div className="home-grid">
        <div className="resume-header">
          <h1>My Resume</h1>
        </div>
        <div className="resume-text-container">
          <a href="../JimPeters.pdf" download>
            Click to Download
          </a>
          <a className="resume" href="../JimPeters.pdf" download>
            <div className="resume">
            <Document file={resume} options={{ workerSrc: "/pdf.worker.js" }}>
              <Page 
                pageNumber={1} 
                scale={3}
                width={400} />
              <Page 
                pageNumber={2} 
                scale={3}
                width={400} />
            </Document>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Resume;
