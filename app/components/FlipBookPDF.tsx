"use client"
import { useCallback, useState } from 'react';
import { Document as Doc, Page as Pag, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
// import file from '/static/catalog.pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};
const resizeObserverOptions = {};

const maxWidth = 500;

type PDFFile = string | File | null;

const FlipBookPDF = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();
    const [file, setFile] = useState<PDFFile>('/static/catalog.pdf');


    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, resizeObserverOptions, onResize);


    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
    }
    return (
        <div className="Example__container select-none">
            <div className="Example__container__document " ref={setContainerRef}>
                <Doc className="relative" file={file} onLoadSuccess={onDocumentLoadSuccess as any} options={options}>
                    <div className='relative  h-screen'>
                        <Pag
                            pageNumber={pageNumber}
                            width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                        />
                        <button
                            style={{
                                // display: pageNumber === 1 ? 'none' : 'block',
                                position: 'absolute',
                                width: "32px",
                                height: "32px",
                                bottom: '50%',
                                left: '-35px',
                                backgroundColor: "white",
                                color: "black",
                                borderRadius: "50%"
                            }}
                            onClick={
                                () => {
                                    setPageNumber(pageNumber - 1)
                                }
                            }>
                            {"<"}
                        </button>
                        <button
                            style={{
                                // display: pageNumber === 9 ? 'none' : 'block',
                                position: 'absolute',
                                width: "32px",
                                height: "32px",
                                bottom: '50%',
                                right: '-35px',
                                backgroundColor: "white",
                                color: "black",
                                borderRadius: "50%"
                            }}
                            onClick={
                                () => {
                                    setPageNumber(pageNumber + 1)
                                }
                            }>
                            {">"}
                        </button>
                    </div>
                </Doc>
            </div>
        </div>
    )
}

export default FlipBookPDF