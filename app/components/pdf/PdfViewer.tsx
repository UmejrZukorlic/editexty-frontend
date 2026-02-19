"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useState, useMemo } from "react";

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
        className="mx-auto display-table min-w-full"
        style={{ display: "table" }}>
        <div className="flex flex-col items-center">
          <Document
            file={fileSource}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<div className="text-blue-600">Loading document...</div>}>
            {Array.from(new Array(numPages), (_, index) => (
              <div key={index} className="mb-6 shadow-2xl">
                <Page
                  pageNumber={index + 1}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={false}
                  loading={null}
                />
              </div>
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
