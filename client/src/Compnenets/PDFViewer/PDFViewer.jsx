import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

/**
 * PDFViewer component.
 * Displays a PDF file using react-pdf library.
 * @param {string} pdfFile - The URL or file object of the PDF file.
 */
const PDFViewer = ({ pdfFile }) => {
  const [numPages, setNumPages] = useState(null);

  /**
   * Event handler for successful PDF document loading.
   * Sets the number of pages in the PDF.
   * @param {Object} event - The event object.
   */
  function onDocumentSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <style>
        {`
          .react-pdf__Page__textContent {
            display: none !important;
          }
          .react-pdf__Page__canvas {
            margin: 0 auto;
            width: 80% !important;
            height: 100% !important;
          }
        `}
      </style>
      <div className='d-flex align-items-center justify-content-center' style={{ height: '120vh', overflow: 'hidden' }}>
        <Document file={pdfFile} onLoadSuccess={onDocumentSuccess}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </>
  );
};

export default PDFViewer;
