"use client";

import { ChangeEvent } from "react";

type Props = {
  onFileSelect: (file: File) => void;
};

export default function UploadZone({ onFileSelect }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    onFileSelect(file);
  };

  return (
    <div className="border-2 border-dashed border-gray-400 rounded-2xl p-10 text-center">
      <input
        type="file"
        accept="application/pdf"
        onChange={handleChange}
        className="hidden"
        id="pdfUpload"
      />

      <label
        htmlFor="pdfUpload"
        className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
        Upload PDF
      </label>

      <p className="mt-4 text-gray-500">Only PDF files are supported</p>
    </div>
  );
}
