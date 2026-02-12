"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

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

  if (!file) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        No PDF selected
      </div>
    );
  }

  return (
    <div className="overflow-auto h-full flex flex-col items-center">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={index}
            pageNumber={index + 1}
            scale={scale}
            className="mb-6 shadow-lg"
          />
        ))}
      </Document>
    </div>
  );
}
