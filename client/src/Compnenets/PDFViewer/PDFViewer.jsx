import { Button, HStack, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

/**
 * PDFViewer component.
 * Displays a PDF file using react-pdf library.
 * @param {string} pdfFile - The URL or file object of the PDF file.
 */
const PDFViewer = ({ pdfFile }) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * Event handler for successful PDF document loading.
   * Sets the number of pages in the PDF.
   * @param {Object} event - The event object.
   */
  function onDocumentSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPreviousPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function goToNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
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
      <VStack spacing={2}>
      <div className='d-flex align-items-center justify-content-center' style={{ height: '110vh', overflow: 'hidden' }}>
        <Document file={pdfFile} onLoadSuccess={onDocumentSuccess}>
          <Page pageNumber={currentPage} />
        </Document>
      </div>
      <HStack mt={4} justifyContent={'right'} alignItems={'right'}>
      <Button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="btn btn-primary mr-2"
          colorScheme='blue'
        >
          Previous Page
        </Button>
        <Button
          onClick={goToNextPage}
          disabled={currentPage === numPages}
          className="btn btn-primary"
          colorScheme='blue'
        >
          Next Page
        </Button>
      </HStack>
        </VStack>
    </>
  );
};

export default PDFViewer;
