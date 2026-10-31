import React, { useState } from 'react';
import { EducationLevel } from '../types';
import {
  ALL_LKPD_TYPES,
  LKPD_PICTURE_ACTIVITIES,
  LKPD_EXERCISES,
  ILLUSTRATION_STYLES,
} from '../data/curriculumData';
import {
  Printer,
  Copy,
  Check,
  Sparkles,
  CheckCircle2,
  Smile,
  Meh,
  Frown,
  ZoomIn,
  ZoomOut,
  Tag,
  Palette,
  Image as ImageIcon,
  CheckSquare,
  HelpCircle,
  Layers,
  ArrowRight,
  ListOrdered,
} from 'lucide-react';

interface LkpdWorkbookViewProps {
  topic: string;
  subject: string;
  educationLevel: EducationLevel;
  gradeClass: string;
  lkpdType?: string;
  pictureActivities?: string[];
  includeExercises?: string[];
  illustrationStyle?: string;
  onClose?: () => void;
}

export const LkpdWorkbookView: React.FC<LkpdWorkbookViewProps> = ({
  topic,
  subject,
  educationLevel,
  gradeClass,
  lkpdType = 'LKPD Eksperimen',
  pictureActivities = ['Mengamati gambar', 'Mengisi jawaban', 'Memberi label pada gambar'],
  includeExercises = ['Pilihan Ganda', 'Isian Singkat'],
  illustrationStyle = 'Kartun Edukatif',
  onClose,
}) => {
  const [activeType, setActiveType] = useState<string>(lkpdType);
  const [activeStyle, setActiveStyle] = useState<string>(illustrationStyle);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedMood, setSelectedMood] = useState<'senang' | 'cukup' | 'bantuan'>('senang');

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `LEMBAR KERJA PESERTA DIDIK (LKPD) - KURIKULUM MERDEKA
Mata Pelajaran: ${subject}
Kelas / Fase: ${gradeClass} (${educationLevel})
Materi Pokok: ${topic}
Bentuk LKPD: ${activeType}
Gaya Seni Ilustrasi: ${activeStyle}
Kegiatan Bergambar: ${pictureActivities.join(', ')}
Latihan Tambahan: ${includeExercises.join(', ')}

1. CAPAIAN & TUJUAN AKTIVITAS:
- Mengidentifikasi konsep esensial materi "${topic}" melalui kegiatan interaktif.
- Profil Pelajar Pancasila: Bernalar Kritis, Gotong Royong, dan Kreatif.

2. LANGKAH PENYELIDIKAN STEP-BY-STEP:
Step 1: Amati stimulus bergambar dan fenomena kontekstual di lingkungan sekitar.
Step 2: Diskusikan bersama teman kelompok / guru.
Step 3: Kerjakan aktivitas ${pictureActivities.join(' & ')}.
Step 4: Jawab latihan soal dan tarik kesimpulan belajar.

3. REFLEKSI DIRI SISWA:
- Lingkari emotikon perasaan (Sangat Paham 😊, Cukup 🤔, Butuh Bantuan 🙋‍♂️).`;

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar (Hidden during print) */}
      <div className="print:hidden bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-extrabold border border-emerald-200 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Format Cetak A4 Portrait Full-Color Modern Workbook</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-800 leading-tight">
            Pratinjau LKPD: {topic}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {subject} • {gradeClass} • {activeType} • Gaya {activeStyle}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-100 rounded-xl p-1 border border-slate-200 text-xs font-bold text-slate-600">
            <button
              onClick={() => setZoomLevel(Math.max(75, zoomLevel - 10))}
              className="p-1.5 hover:bg-white rounded-lg transition"
              title="Perkecil"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-1.5">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel(Math.min(125, zoomLevel + 10))}
              className="p-1.5 hover:bg-white rounded-lg transition"
              title="Perbesar"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-600">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Teks</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition active:scale-95"
          >
            <Printer className="w-4 h-4 stroke-[2.5]" />
            <span>Cetak / Simpan PDF (A4)</span>
          </button>
        </div>
      </div>

      {/* Quick Selectors Toolbar (Hidden during print) */}
      <div className="print:hidden bg-slate-100 p-3 rounded-2xl border border-slate-200 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
            <Tag className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ubah Cepat Jenis LKPD:</span>
            <select
              value={activeType}
              onChange={(e) => setActiveType(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-emerald-500"
            >
              {ALL_LKPD_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
            <Palette className="w-3.5 h-3.5 text-purple-600" />
            <span>Gaya Ilustrasi:</span>
            <select
              value={activeStyle}
              onChange={(e) => setActiveStyle(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-purple-500"
            >
              {ILLUSTRATION_STYLES.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name} ({s.badge})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* THE A4 PORTRAIT WORKBOOK SHEET CANVAS                    */}
      {/* ======================================================== */}
      <div className="flex justify-center overflow-x-auto pb-8 print:p-0 print:overflow-visible">
        <div
          style={{
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'top center',
          }}
          className="w-full max-w-[800px] bg-white text-slate-800 shadow-2xl rounded-2xl print:rounded-none print:shadow-none border border-slate-200 print:border-none p-6 sm:p-10 transition-transform duration-200 relative flex flex-col justify-between space-y-5"
        >
          {/* Decorative Corner Watermark */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-emerald-100/70 to-transparent rounded-tr-2xl pointer-events-none print:opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-sky-100/70 to-transparent rounded-bl-2xl pointer-events-none print:opacity-40"></div>

          {/* 1. TOP HEADER BANNER */}
          <div className="border-b-2 border-emerald-600 pb-3.5 relative z-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-[10.5px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-0.8 rounded-full border border-emerald-200 mb-1">
                  <span>Lembar Kerja Peserta Didik (LKPD)</span>
                  <span>•</span>
                  <span>Kurikulum Merdeka</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  {topic}
                </h1>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">
                  Mata Pelajaran: <span className="text-emerald-700 font-bold">{subject}</span> |{' '}
                  <span className="text-slate-800 font-bold">{gradeClass}</span>
                </p>
              </div>

              {/* Badges on right */}
              <div className="text-right shrink-0 space-y-1">
                <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-xl shadow-xs">
                  {activeType}
                </div>
                <div className="text-[10px] text-slate-500 font-bold block">
                  Ilustrasi: <span className="text-purple-700 font-black">{activeStyle}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. STUDENT IDENTITY BOX */}
          <div className="bg-[#f8faf9] rounded-2xl p-3.5 border border-emerald-200/90 grid grid-cols-1 sm:grid-cols-12 gap-3 relative z-10 shadow-xs">
            <div className="sm:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600 w-28 shrink-0">
                  Nama Siswa/Regu :
                </span>
                <div className="flex-1 border-b-2 border-dotted border-slate-300 min-h-[20px]"></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-600 w-16 shrink-0">Kelas :</span>
                  <div className="flex-1 border-b-2 border-dotted border-slate-300 min-h-[20px] text-xs font-semibold text-emerald-900">
                    {gradeClass}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-600 w-20 shrink-0">No. Absen :</span>
                  <div className="flex-1 border-b-2 border-dotted border-slate-300 min-h-[20px]"></div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600 w-28 shrink-0">Hari / Tanggal :</span>
                <div className="flex-1 border-b-2 border-dotted border-slate-300 min-h-[20px]"></div>
              </div>
            </div>

            {/* Score & Teacher Check Box */}
            <div className="sm:col-span-4 bg-white rounded-xl p-2 border border-emerald-200 flex flex-col justify-between text-center shadow-xs">
              <span className="text-[10px] uppercase font-extrabold text-emerald-800 tracking-wider">
                Nilai / Paraf Guru
              </span>
              <div className="flex-1 flex items-center justify-center my-0.5">
                <div className="w-14 h-9 border-2 border-dashed border-emerald-300 rounded-lg flex items-center justify-center text-slate-400 font-bold text-xs">
                  Skor
                </div>
              </div>
              <div className="flex items-center justify-center gap-1 text-amber-400 text-xs">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>

          {/* 3. HIGHLIGHT BOX: CAPAIAN & TUJUAN BELAJAR */}
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50/50 to-emerald-50 rounded-2xl p-3.5 border-l-4 border-emerald-600 shadow-xs relative z-10">
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-emerald-950">
                  Tujuan Pembelajaran &amp; Profil Pelajar Pancasila
                </h3>
                <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                  Peserta didik mampu menelaah materi <strong>{topic}</strong> secara aktif,
                  berpikir kritis melalui eksplorasi visual, dan bergotong royong dalam kerja tim.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  <span className="text-[10px] font-bold bg-white px-2 py-0.5 rounded-md border border-emerald-200 text-emerald-800">
                    ✓ Bernalar Kritis
                  </span>
                  <span className="text-[10px] font-bold bg-white px-2 py-0.5 rounded-md border border-emerald-200 text-emerald-800">
                    ✓ Kreatif
                  </span>
                  <span className="text-[10px] font-bold bg-white px-2 py-0.5 rounded-md border border-emerald-200 text-emerald-800">
                    ✓ Bergotong Royong
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. STIMULUS SOAL CERITA BERGAMBAR (Ilustrasi Kontekstual) */}
          <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-200 relative z-10 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-amber-400 text-amber-950 font-black text-[10px] uppercase">
                  Cerita Kontekstual &amp; Gambar
                </span>
                <h4 className="text-xs font-extrabold text-slate-900">
                  Misi Penyelidikan: Kasus "{topic}"
                </h4>
              </div>
              <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                Gaya {activeStyle}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              {/* Contextual Illustration Box */}
              <div className="w-full sm:w-44 h-28 bg-white rounded-xl border border-amber-200 p-2 flex flex-col items-center justify-center text-center shadow-xs shrink-0">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-1">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-700">
                  Ilustrasi Edukatif
                </span>
                <span className="text-[9px] text-slate-400">
                  Visual {activeStyle} terkait {topic}
                </span>
              </div>

              <div className="flex-1 text-xs text-slate-700 leading-relaxed italic space-y-1">
                <p>
                  "Di sebuah lingkungan sekolah, para siswa sedang mengamati fenomena unik yang berkaitan langsung
                  dengan <strong>{topic}</strong>. Mereka mencatat perubahan yang terjadi pada setiap tahapan dan ingin membuktikan
                  faktor apa saja yang paling memengaruhi proses tersebut."
                </p>
                <div className="pt-1 flex items-center gap-2 text-[11px] font-bold text-emerald-800 not-italic">
                  <span>✦ Pertanyaan Pemantik:</span>
                  <div className="flex-1 border-b border-dotted border-emerald-400 min-h-[16px]">
                    Menurut dugaanmu, apa penyebab utama fenomena pada gambar di samping?
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. KEGIATAN BERGAMBAR (Mengamati, Memberi Label, Mencocokkan, Mengurutkan) */}
          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black">
                  A
                </span>
                <span>Kegiatan Bergambar Interaktif</span>
              </h3>
              <div className="flex items-center gap-1">
                {pictureActivities.slice(0, 3).map((act) => (
                  <span
                    key={act}
                    className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200"
                  >
                    {act}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Visual Activity Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Box 1: Diagram / Memberi Label */}
              <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Aktivitas 1: Beri Label &amp; Amati</span>
                  </span>
                  <span className="text-[10px] text-slate-400">Tuliskan nama bagian</span>
                </div>

                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 flex flex-col items-center justify-center min-h-[100px] text-center space-y-2">
                  <div className="grid grid-cols-2 gap-2 w-full text-xs">
                    <div className="p-1.5 bg-white border border-slate-200 rounded flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-sky-500 text-white text-[10px] font-black flex items-center justify-center">1</span>
                      <div className="flex-1 border-b border-dotted border-slate-300 h-4"></div>
                    </div>
                    <div className="p-1.5 bg-white border border-slate-200 rounded flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-[10px] font-black flex items-center justify-center">2</span>
                      <div className="flex-1 border-b border-dotted border-slate-300 h-4"></div>
                    </div>
                    <div className="p-1.5 bg-white border border-slate-200 rounded flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] font-black flex items-center justify-center">3</span>
                      <div className="flex-1 border-b border-dotted border-slate-300 h-4"></div>
                    </div>
                    <div className="p-1.5 bg-white border border-slate-200 rounded flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-purple-500 text-white text-[10px] font-black flex items-center justify-center">4</span>
                      <div className="flex-1 border-b border-dotted border-slate-300 h-4"></div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 italic">
                    Amati gambar di atas dan tuliskan istilah yang tepat pada kotak nomor!
                  </span>
                </div>
              </div>

              {/* Box 2: Menjodohkan / Mengurutkan */}
              <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <ListOrdered className="w-3.5 h-3.5 text-purple-600" />
                    <span>Aktivitas 2: Hubungkan Konsep</span>
                  </span>
                  <span className="text-[10px] text-slate-400">Tarik garis penghubung</span>
                </div>

                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 flex flex-col justify-between min-h-[100px] space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Konsep A
                    </span>
                    <span className="text-slate-400 text-xs">• • •</span>
                    <span className="font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Definisi / Gambar 2
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Konsep B
                    </span>
                    <span className="text-slate-400 text-xs">• • •</span>
                    <span className="font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Definisi / Gambar 1
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Konsep C
                    </span>
                    <span className="text-slate-400 text-xs">• • •</span>
                    <span className="font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Definisi / Gambar 3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. TABEL OBSERVASI & LEMBAR ANALISIS DATA */}
          <div className="space-y-2.5 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black">
                B
              </span>
              <h3 className="text-sm font-extrabold text-slate-800">
                Tabel Observasi &amp; Pengamatan Kerja
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-300 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-emerald-600 text-white font-extrabold">
                    <th className="py-2 px-3 w-10 text-center border-r border-emerald-500">No</th>
                    <th className="py-2 px-3 border-r border-emerald-500">Objek / Tahap Aktivitas</th>
                    <th className="py-2 px-3 border-r border-emerald-500 w-36">Hasil Pengamatan</th>
                    <th className="py-2 px-3">Penjelasan &amp; Analisis Nalar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-700 bg-white">
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 text-center font-bold text-slate-400 border-r border-slate-200">
                      1
                    </td>
                    <td className="py-2.5 px-3 border-r border-slate-200 font-semibold text-slate-800">
                      Pengamatan awal kondisi {topic}
                    </td>
                    <td className="py-2.5 px-3 border-r border-slate-200">
                      <div className="border-b border-dotted border-slate-300 h-4"></div>
                    </td>
                    <td className="py-2.5 px-3">
                      <div className="border-b border-dotted border-slate-300 h-4"></div>
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50 hover:bg-slate-50">
                    <td className="py-2.5 px-3 text-center font-bold text-slate-400 border-r border-slate-200">
                      2
                    </td>
                    <td className="py-2.5 px-3 border-r border-slate-200 font-semibold text-slate-800">
                      Perlakuan / Uji coba yang dilakukan
                    </td>
                    <td className="py-2.5 px-3 border-r border-slate-200">
                      <div className="border-b border-dotted border-slate-300 h-4"></div>
                    </td>
                    <td className="py-2.5 px-3">
                      <div className="border-b border-dotted border-slate-300 h-4"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 7. LATIHAN TAMBAHAN (OPSIONAL) */}
          {includeExercises && includeExercises.length > 0 && (
            <div className="space-y-2.5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black">
                    C
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-800">
                    Latihan Soal Relevan (Berbasis Gambar &amp; Aktivitas)
                  </h3>
                </div>
                <div className="flex gap-1">
                  {includeExercises.map((ex) => (
                    <span
                      key={ex}
                      className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-xs">
                {/* Soal 1: Pilihan Ganda */}
                {includeExercises.includes('Pilihan Ganda') && (
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-800 block">
                      1. Manakah dari pernyataan berikut yang paling tepat menggambarkan prinsip utama dari {topic}?
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 pl-2 text-slate-600">
                      <div>A. Pernyataan konsep dasar A</div>
                      <div>B. Pernyataan konsep perbandingan B</div>
                      <div>C. Pernyataan hasil analisis C</div>
                      <div>D. Pernyataan dampak lingkungan D</div>
                    </div>
                  </div>
                )}

                {/* Soal 2: Isian Singkat */}
                {includeExercises.includes('Isian Singkat') && (
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800 block mb-1">
                      2. Faktor utama yang menyebabkan terjadinya fenomena pada materi ini adalah:{' '}
                      <span className="inline-block border-b-2 border-dotted border-slate-400 w-44"></span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 8. SELF-REFLECTION BOX (EMOTIKON & REFLEKSI DIRI SISWA) */}
          <div className="bg-[#f0fbf5] rounded-2xl p-3.5 border border-emerald-300 relative z-10 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">
                  D
                </span>
                <h4 className="text-xs font-extrabold text-emerald-950">
                  Refleksi Belajar Siswa (Student Self-Check)
                </h4>
              </div>
              <span className="text-[10px] font-semibold text-slate-500">
                Lingkari ekspresi perasaanmu hari ini!
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedMood('senang')}
                className={`p-1.5 rounded-xl border flex items-center justify-center gap-1.5 transition ${
                  selectedMood === 'senang'
                    ? 'bg-emerald-600 text-white font-bold border-emerald-600 shadow-xs'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <Smile className="w-4 h-4" />
                <span className="text-xs">Sangat Paham 😊</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMood('cukup')}
                className={`p-1.5 rounded-xl border flex items-center justify-center gap-1.5 transition ${
                  selectedMood === 'cukup'
                    ? 'bg-amber-500 text-white font-bold border-amber-500 shadow-xs'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <Meh className="w-4 h-4" />
                <span className="text-xs">Cukup Paham 🤔</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMood('bantuan')}
                className={`p-1.5 rounded-xl border flex items-center justify-center gap-1.5 transition ${
                  selectedMood === 'bantuan'
                    ? 'bg-rose-500 text-white font-bold border-rose-500 shadow-xs'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <Frown className="w-4 h-4" />
                <span className="text-xs">Butuh Bantuan 🙋‍♂️</span>
              </button>
            </div>

            <div className="pt-0.5">
              <span className="text-[11px] font-bold text-slate-700 block mb-0.5">
                Hal paling menyenangkan atau hal baru yang kupelajari hari ini:
              </span>
              <div className="border-b border-dotted border-emerald-300 h-4"></div>
            </div>
          </div>

          {/* FOOTER OF WORKBOOK (Page Number & Tagline) */}
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400 font-medium">
            <span>Workbook Pembelajaran Interaktif • Format Kurikulum Merdeka</span>
            <span>Halaman 1 dari 1 (Format A4 Portrait)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
