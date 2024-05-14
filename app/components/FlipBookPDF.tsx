"use client";
import { useCallback, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};
const resizeObserverOptions = {};

type PDFFile = string | File | null;

const FlipBookPDF = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();
  const [file, setFile] = useState<PDFFile>("/static/catalog.pdf");
  const [pageWidth, setPageWidth] = useState(0);

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: {
    numPages: number;
  }) {
    setNumPages(nextNumPages);
  }

  function onPageLoadSuccess() {
    setPageWidth(window.innerWidth);
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center rounded-2xl gap-4 ">
      <button
        disabled={pageNumber === 1}
        className="bg-zinc-600 text-[#C4FE01] rounded-full w-8 h-8 flex justify-center items-center
          disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed
          hover:bg-zinc-700 hover:text-[#C4FE01] hover:cursor-pointer
          transition-all duration-300 ease-in-out"
        onClick={() => {
          if (pageNumber === 1) {
            return;
          }
          setPageNumber(pageNumber - 1);
        }}
      >
        {"<"}
      </button>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        renderMode="canvas"
        className="relative rounded-2xl overflow-hidden"
      >
        <Page
          className="rounded-2xl"
          key={pageNumber}
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          onLoadSuccess={onPageLoadSuccess}
          width={Math.max(pageWidth * 0.4, 200)}
        />
      </Document>

      <button
        className="bg-zinc-600 text-[#C4FE01] rounded-full w-8 h-8 flex justify-center items-center
          disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed
          hover:bg-zinc-700 hover:text-[#C4FE01] hover:cursor-pointer
          transition-all duration-300 ease-in-out
        "
        disabled={pageNumber === numPages}
        onClick={() => {
          if (pageNumber === numPages) {
            return;
          }
          setPageNumber(pageNumber + 1);
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default FlipBookPDF;
