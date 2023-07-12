import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

/**
 * PDFCard component.
 * Displays a PDF file in a card-like container.
 * @param {string} pdfFile - The URL or file object of the PDF file.
 */
const PDFCard = ({ pdfFile }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  /**
   * Event handler for successful PDF document loading.
   * Sets the number of pages in the PDF.
   * @param {Object} event - The event object.
   */
  function onDocumentSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Box maxH={'50vh'} maxW={'40vh'} overflow={'hidden'} justifyContent={"center"}>
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
      <div className="pdf-card-container">
        <Document file={pdfFile} onLoadSuccess={onDocumentSuccess}>
          <Page
            scale={0.4}
            pageNumber={pageNumber}
            className="pdf-card"
            renderMode="svg"
            height={document.getElementsByClassName('PdfDiv')[0]?.clientHeight * 0.1 ?? 150}
          />
        </Document>
      </div>
    </Box>
  );
};

export default PDFCard;
