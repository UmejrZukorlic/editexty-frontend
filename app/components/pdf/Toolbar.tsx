"use client";

import {
  Download,
  ZoomIn,
  ZoomOut,
  Sparkles,
  Type,
  Highlighter,
  Pencil,
  MousePointer2,
  Undo2,
  Redo2,
} from "lucide-react";

type Props = {
  onRunOCR: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  isAddTextArmed: boolean;
  onAddTextOnce: () => void;
  onCancelAddText: () => void;
};

export default function Toolbar({
  onRunOCR,
  onZoomIn,
  onZoomOut,
  isAddTextArmed,
  onAddTextOnce,
  onCancelAddText,
}: Props) {
  return (
    <div className="w-full h-18 border-b border-slate-100 flex items-center justify-between px-6 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <button
          onClick={onRunOCR}
          className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-1.5 rounded-full font-bold text-xs transition-all shadow-sm active:scale-95">
          <Sparkles className="w-5.5 h-5.5" />
          AI Scan to Text
        </button>
      </div>

      <div className="flex items-center bg-slate-100/80 p-1 rounded-xl border border-slate-200/50 gap-1">
        <ToolButton
          icon={<MousePointer2 className="w-5 h-5" />}
          active={!isAddTextArmed}
          onClick={onCancelAddText}
        />
        <div className="w-px h-5 bg-slate-300 mx-1" />
        <ToolButton
          icon={<Type className="w-5 h-5" />}
          label="Text"
          active={isAddTextArmed}
          onClick={onAddTextOnce}
        />
        <ToolButton
          icon={<Highlighter className="w-5 h-5" />}
          label="Highlight"
        />
        <ToolButton icon={<Pencil className="w-5 h-5" />} label="Draw" />
        <div className="w-px h-5 bg-slate-300 mx-1" />
        <ToolButton icon={<Undo2 className="w-5 h-5" />} />
        <ToolButton icon={<Redo2 className="w-5 h-5" />} />
      </div>

      {/* Grupa 3: Zoom i Export */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/50">
          <button
            onClick={onZoomOut}
            className="text-slate-500 hover:text-blue-600">
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="text-[13px] font-bold text-slate-400 w-10 text-center uppercase tracking-tighter">
            100%
          </span>
          <button
            onClick={onZoomIn}
            className="text-slate-500 hover:text-blue-600">
            <ZoomIn className="w-5 h-5" />
          </button>
        </div>
        <button className="bg-slate-900 hover:bg-black text-white p-2 rounded-lg transition-colors">
          <Download className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function ToolButton({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  label?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
        active
          ? "bg-white shadow-sm text-blue-600"
          : "text-slate-500 hover:bg-white/50 hover:text-slate-700"
      }`}>
      {icon}
      {label && (
        <span className="py-2 text-sm font-semibold hidden lg:inline">
          {label}
        </span>
      )}
    </button>
  );
}
