"use client";

import { useState } from "react";
import UploadZone from "../components/pdf/UploadZone";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf/PdfViewer"), {
  ssr: false,
});

import Toolbar from "../components/pdf/Toolbar";

export default function DashboardPage() {
  const [file, setFile] = useState<File | null>(null);
  const [scale, setScale] = useState(1);

  const handleOCR = () => {
    alert("OCR will run here");
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Toolbar */}
      <Toolbar
        onRunOCR={handleOCR}
        onZoomIn={() => setScale((prev) => prev + 0.2)}
        onZoomOut={() => setScale((prev) => Math.max(prev - 0.2, 0.5))}
      />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        {!file ? (
          <UploadZone onFileSelect={setFile} />
        ) : (
          <PDFViewer file={file} scale={scale} />
        )}
      </div>
    </div>
  );
}
