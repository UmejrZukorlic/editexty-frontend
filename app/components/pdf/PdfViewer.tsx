"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useState, useMemo, useEffect, type MouseEvent } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type Props = {
  file: File | null;
  scale: number;
  addTextArmed: boolean;
  onTextAdded: () => void;
};

type AddedTextBox = {
  id: string;
  page: number;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
};

export default function PDFViewer({
  file,
  scale,
  addTextArmed,
  onTextAdded,
}: Props) {
  const [numPages, setNumPages] = useState<number>(0);
  const [addedTextBoxes, setAddedTextBoxes] = useState<AddedTextBox[]>([]);
  const [selectedTextBoxId, setSelectedTextBoxId] = useState<string | null>(
    null,
  );
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    textBoxId: string;
  } | null>(null);
  const fileSource = useMemo(() => file, [file]);

  const removeTextBox = (textBoxId: string) => {
    setAddedTextBoxes((prev) => prev.filter((item) => item.id !== textBoxId));
    setContextMenu(null);
    setSelectedTextBoxId((prev) => (prev === textBoxId ? null : prev));
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!selectedTextBoxId) {
        return;
      }

      if (event.key === "Delete" || event.key === "Backspace") {
        event.preventDefault();
        setAddedTextBoxes((prev) =>
          prev.filter((item) => item.id !== selectedTextBoxId),
        );
        setContextMenu(null);
        setSelectedTextBoxId(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedTextBoxId]);

  useEffect(() => {
    const closeContextMenu = () => setContextMenu(null);
    window.addEventListener("click", closeContextMenu);
    return () => window.removeEventListener("click", closeContextMenu);
  }, []);

  const handlePageClick = (
    event: MouseEvent<HTMLDivElement>,
    pageNumber: number,
  ) => {
    setContextMenu(null);

    if (addTextArmed === false) {
      setSelectedTextBoxId(null);
      return;
    }

    if ((event.target as HTMLElement).closest("[contenteditable='true']")) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / scale;
    const y = (event.clientY - rect.top) / scale;

    setAddedTextBoxes((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        page: pageNumber,
        text: "New text",
        x,
        y,
        width: 140,
        height: 28,
        fontSize: 16,
      },
    ]);
    onTextAdded();
  };

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
            {Array.from(new Array(numPages), (_, index) => {
              const pageNumber = index + 1;
              const pageTextBoxes = addedTextBoxes.filter(
                (item) => item.page === pageNumber,
              );

              return (
                <div
                  key={pageNumber}
                  className={`relative mb-6 shadow-2xl ${
                    addTextArmed ? "cursor-text" : "cursor-default"
                  }`}
                  onClick={(event) => handlePageClick(event, pageNumber)}>
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    loading={null}
                  />
                  <div className="pointer-events-none absolute inset-0 z-30">
                    {pageTextBoxes.map((word) => (
                      <div
                        key={word.id}
                        contentEditable
                        suppressContentEditableWarning
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedTextBoxId(word.id);
                          setContextMenu(null);
                        }}
                        onContextMenu={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          setSelectedTextBoxId(word.id);
                          setContextMenu({
                            x: event.clientX,
                            y: event.clientY,
                            textBoxId: word.id,
                          });
                        }}
                        onInput={(event) => {
                          const nextText = event.currentTarget.textContent ?? "";
                          setAddedTextBoxes((prev) =>
                            prev.map((item) =>
                              item.id === word.id
                                ? { ...item, text: nextText }
                                : item,
                            ),
                          );
                        }}
                        className={`pointer-events-auto absolute focus:outline-none ${
                          selectedTextBoxId === word.id
                            ? "border border-red-400"
                            : "border border-transparent hover:border-blue-400 focus:border-blue-500"
                        }`}
                        style={{
                          left: word.x * scale,
                          top: word.y * scale,
                          width: word.width * scale,
                          height: word.height * scale,
                          fontSize: word.fontSize * scale,
                          backgroundColor: "transparent",
                        }}>
                        {word.text}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </Document>
        </div>
      </div>
      {contextMenu && (
        <button
          className="fixed z-50 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-red-600 shadow"
          style={{ left: contextMenu.x, top: contextMenu.y }}
          onClick={() => removeTextBox(contextMenu.textBoxId)}>
          Delete textbox
        </button>
      )}
    </div>
  );
}
