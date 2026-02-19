"use client";

import { Download, ZoomIn, ZoomOut, Sparkles } from "lucide-react";

type Props = {
  onRunOCR: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export default function Toolbar({ onRunOCR, onZoomIn, onZoomOut }: Props) {
  return (
    <div className="w-full h-16 border-b border-slate-100 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <button
          onClick={onRunOCR}
          className="flex items-center gap-2 bg-primary hover:bg-secondary text-primary-foreground px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md shadow-blue-100 group active:scale-95">
          <Sparkles className="w-4 h-4 fill-white/20" />
          Run AI OCR
        </button>
      </div>

      <div className="flex items-center bg-slate-100/50 p-1 rounded-xl border border-slate-200/60">
        <button
          onClick={onZoomOut}
          className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-600 transition-all active:bg-slate-200"
          title="Zoom Out">
          <ZoomOut className="w-5 h-5" />
        </button>

        <div className="w-px h-4 bg-slate-300 mx-1" />

        <button
          onClick={onZoomIn}
          className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-600 transition-all active:bg-slate-200"
          title="Zoom In">
          <ZoomIn className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-slate-600 hover:text-primary font-medium text-sm transition-colors group">
          <div className="p-2 bg-slate-50 group-hover:bg-blue-50 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
          </div>
          <span className="hidden sm:inline">Export PDF</span>
        </button>
      </div>
    </div>
  );
}
