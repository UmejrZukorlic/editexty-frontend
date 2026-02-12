"use client";

import { Download, ZoomIn, ZoomOut } from "lucide-react";

type Props = {
  onRunOCR: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export default function Toolbar({ onRunOCR, onZoomIn, onZoomOut }: Props) {
  return (
    <div className="w-full h-16 border-b flex items-center px-6 gap-4 bg-white shadow-sm">
      <button
        onClick={onRunOCR}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
        Run OCR
      </button>

      <button className="bg-gray-200 px-4 py-2 rounded-lg">
        <Download />
      </button>

      <button onClick={onZoomIn} className="bg-gray-200 px-4 py-2 rounded-lg">
        <ZoomIn />
      </button>

      <button onClick={onZoomOut} className="bg-gray-200 px-4 py-2 rounded-lg">
        <ZoomOut />
      </button>
    </div>
  );
}
