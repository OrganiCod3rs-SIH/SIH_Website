import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfLink =
  "https://raw.githubusercontent.com/aman-raza/img/ddd78b04a08f626c8acb6a65e0a1208657c87068/Microsoft%20Word%20-%20Revise%20ADIP%20Scheme.doc.pdf";
  //https://raw.githubusercontent.com/aman-raza/img/02820b6175b05b60c0bf10d98e8065e5e852f57c/Resume.pdf
  // http://organicoders.epizy.com/ADIP/pdfs/adip1.pdf

function Adip1() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Head>
        <title>Adip-1 Pdf</title>
      </Head>
      <div>
        <row>
          <Document file={PdfLink}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={3} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={4} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={5} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={6} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={7} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={8} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={9} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={10} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={32} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </row>
      </div>
    </>
  );
}

export default Adip1;
