"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useState, useMemo } from "react";

// Standardno podešavanje workera
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type Props = {
  file: File | null;
  scale: number;
};

export default function PDFViewer({ file, scale }: Props) {
  const [numPages, setNumPages] = useState<number>(0);

  // Memoizujemo fajl da sprečimo re-render Document komponente
  // osim ako se sam fajl ne promeni
  const fileSource = useMemo(() => file, [file]);

  if (!file) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        No PDF selected
      </div>
    );
  }

  return (
    <div className="overflow-auto h-full w-full bg-gray-100 p-8">
      <div
        className="flex flex-col items-center origin-top transition-transform duration-200 ease-out"
        style={{
          transform: `scale(${scale})`,
          // transformOrigin: 'top center' je ključno da PDF ne "beži" van ekrana pri zoom-u
        }}>
        <Document
          file={fileSource}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<div className="text-blue-600">Loading document...</div>}>
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`${file?.name}-${index}`}
              pageNumber={index + 1}
              scale={1.5}
              className="mb-6 shadow-2xl"
              renderTextLayer={true}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
