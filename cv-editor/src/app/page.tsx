"use client";

import { useState } from "react";
import CVRenderer from "@/components/cv-renderer/CVRenderer";
import { defaultTemplate } from "@/data/defaultTemplate";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"paste" | "file">("paste");
  const [pasteValue, setPasteValue] = useState("");
  const [dragover, setDragover] = useState(false);
  const [importedHTML, setImportedHTML] = useState<string | null>(null);

  function applyImport(html: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const newCV =
      doc.querySelector(".cv-page") ||
      doc.querySelector("main") ||
      doc.body;
    if (newCV) {
      setImportedHTML(newCV.innerHTML);
    }
  }

  function handleConfirmImport() {
    if (activeTab === "paste" && pasteValue.trim()) {
      applyImport(pasteValue);
    }
    closeModal();
  }

  function handleFileRead(file: File) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const html = ev.target?.result as string;
      applyImport(html);
      closeModal();
    };
    reader.readAsText(file);
  }

  function closeModal() {
    setShowModal(false);
    setPasteValue("");
    setActiveTab("paste");
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-8 print:!p-0 print:!m-0 print:!min-h-0">
      {/* Toolbar */}
      <div className="flex gap-3 mb-4 flex-wrap justify-center print:hidden">
        <button
          onClick={async () => { await document.fonts.ready; window.print(); }}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#ff3131] text-white font-bold rounded-md hover:opacity-85 transition-opacity cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Télécharger en PDF
        </button>
        <a
          href="/cv.html"
          download="cv.html"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white font-bold rounded-md hover:opacity-85 transition-opacity cursor-pointer no-underline"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            <polyline points="7 11 12 16 17 11" />
            <line x1="12" y1="16" x2="12" y2="4" />
          </svg>
          Exporter HTML
        </a>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white font-bold rounded-md hover:opacity-85 transition-opacity cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            <polyline points="7 9 12 4 17 9" />
            <line x1="12" y1="4" x2="12" y2="16" />
          </svg>
          Importer HTML
        </button>
        {importedHTML !== null && (
          <button
            onClick={() => setImportedHTML(null)}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#d9d9d9] text-black font-bold rounded-md hover:opacity-85 transition-opacity cursor-pointer"
          >
            Réinitialiser
          </button>
        )}
      </div>

      {/* Modal d'import */}
      {showModal && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 print:hidden"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-white rounded-xl p-[30px] max-w-[600px] w-[90%] shadow-[0_10px_40px_rgba(0,0,0,0.3)] font-[Zen_Maru_Gothic,sans-serif]">
            <h3 className="text-lg font-bold mb-5 text-black">Importer du code HTML</h3>

            {/* Tabs */}
            <div className="flex mb-5 border-b-2 border-[#d9d9d9]">
              <button
                className={`px-5 py-2 bg-transparent border-none text-sm font-bold cursor-pointer -mb-[2px] border-b-2 ${
                  activeTab === "paste"
                    ? "text-black border-b-[#ff3131]"
                    : "text-[#999] border-b-transparent"
                }`}
                onClick={() => setActiveTab("paste")}
              >
                Coller du code
              </button>
              <button
                className={`px-5 py-2 bg-transparent border-none text-sm font-bold cursor-pointer -mb-[2px] border-b-2 ${
                  activeTab === "file"
                    ? "text-black border-b-[#ff3131]"
                    : "text-[#999] border-b-transparent"
                }`}
                onClick={() => setActiveTab("file")}
              >
                Importer un fichier
              </button>
            </div>

            {/* Panel: Coller du code */}
            {activeTab === "paste" && (
              <textarea
                value={pasteValue}
                onChange={(e) => setPasteValue(e.target.value)}
                placeholder="Collez votre code HTML ici..."
                className="w-full h-[200px] font-mono text-xs p-3 border-2 border-[#d9d9d9] rounded-md resize-y mb-4"
              />
            )}

            {/* Panel: Importer un fichier */}
            {activeTab === "file" && (
              <div
                className={`border-2 border-dashed rounded-md px-5 py-10 text-center text-sm cursor-pointer mb-4 transition-colors ${
                  dragover
                    ? "border-[#ff3131] bg-[#fff5f5]"
                    : "border-[#d9d9d9] text-[#999] hover:border-[#ff3131] hover:bg-[#fff5f5]"
                }`}
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = ".html,.htm";
                  input.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (file) handleFileRead(file);
                  };
                  input.click();
                }}
                onDragOver={(e) => { e.preventDefault(); setDragover(true); }}
                onDragLeave={() => setDragover(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragover(false);
                  const file = e.dataTransfer.files[0];
                  if (file) handleFileRead(file);
                }}
              >
                <p>Glissez un fichier .html ici ou cliquez pour parcourir</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 justify-end">
              <button
                onClick={closeModal}
                className="px-5 py-2 rounded-md text-sm font-bold cursor-pointer border-none bg-[#d9d9d9] text-black"
              >
                Annuler
              </button>
              <button
                onClick={handleConfirmImport}
                className="px-5 py-2 rounded-md text-sm font-bold cursor-pointer border-none bg-[#ff3131] text-white"
              >
                Importer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CV Preview */}
      <div id="cv-print-wrapper" className="shadow-[0_0_15px_rgba(0,0,0,0.2)] print:!shadow-none">
        {importedHTML !== null ? (
          <main className="cv-page" dangerouslySetInnerHTML={{ __html: importedHTML }} />
        ) : (
          <CVRenderer data={defaultTemplate} />
        )}
      </div>
    </div>
  );
}
