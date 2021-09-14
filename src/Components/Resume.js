import React from 'react';
import { Document, Page } from 'react-pdf';

import resume from '../JimPeters.pdf';

function Resume () {

  return (
    <main>
    <div className="home-grid">
      <div className="home-header">
        <h1>My Resume</h1>
      </div>
      <div className="resume-text-container">
        <a href = '../JimPeters.pdf' download>Click to download</a>
        <a href = '../JimPeters.pdf' download>
        <Document file={resume}
                  options={{ workerSrc: "/pdf.worker.js"}}
        >
          <Page pageNumber={1} />
        </Document>
        </a>
      </div>
    </div>
  </main>
    
  )
    
}

export default Resume;