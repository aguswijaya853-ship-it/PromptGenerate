import { MediaCategory, PromptFormData } from '../types';

export function generateEducationalPrompt(
  category: MediaCategory,
  data: PromptFormData,
  customAnswers: Record<string, string>
): string {
  const {
    educationLevel,
    subject,
    topic,
    targetAI,
    learningObjectives,
    difficulty,
    pancasilaDimensions,
    differentiation,
    additionalNotes,
  } = data;

  const levelLabel = getLevelLabel(educationLevel);
  const targetAIName = getTargetAIName(targetAI);

  let categorySpecificInstructions = '';

  switch (category.id) {
    case 'presentasi': {
      const slides = customAnswers.slideCount || '8 Slide';
      const style = customAnswers.presentationStyle || 'Canva Edukasi Ceria';
      const interactive = customAnswers.interactiveElement || 'Pertanyaan Pemantik';
      categorySpecificInstructions = `
[DETAIL STRUKTUR PRESENTASI]
- Alokasi Slide: ${slides}
- Gaya Desain / Visual: ${style}
- Elemen Interaktif di Kelas: ${interactive}
- Panduan Format Output Tiap Slide:
  * Slide [Nomor]: [Judul Slide yang Menarik]
  * Konten Utama: 3-4 poin ringkas (bullet points yang mudah dibaca siswa)
  * Panduan Visual / Ilustrasi: Deskripsi instruksi visual untuk Canva / PowerPoint (misal: "Gunakan ilustrasi kartun anak mengamati air hujan")
  * Narasi Guru (Script Guru): Kalimat penjelasan hangat dan komunikatif yang bisa dibacakan oleh guru saat slide ditampilkan
  * Aktivitas Interaktif Siswa: Pertanyaan cepat atau respon siswa di slide tersebut`;
      break;
    }

    case 'kuis': {
      const qType = customAnswers.quizType || 'Pilihan Ganda HOTS';
      const qCount = customAnswers.questionCount || '10 Butir Soal';
      const answerKey = customAnswers.includeAnswerKey || 'Lengkap Kunci + Pembahasan';
      categorySpecificInstructions = `
[DETAIL SPESIFIKASI SOAL & KUIS]
- Bentuk / Tipe Soal: ${qType}
- Jumlah Soal: ${qCount}
- Tingkat Kesulitan: ${difficulty || 'HOTS (Higher Order Thinking Skills - C4, C5, C6 Bloom)'}
- Kelengkapan Asesmen: ${answerKey}
- Format Penulisan:
  1. Sajikan stimulus kontekstual berupa cerita singkat, data, atau diagram nyata
  2. Pertanyaan yang menguji nalar, bukan sekadar hafalan fakta
  3. Opsi pilihan ganda A, B, C, D (atau E untuk SMA/SMK) dengan pengecoh (distractor) yang logis
  4. Bagian Kunci Jawaban & Pembahasan Mendalam (jelaskan mengapa jawaban tersebut benar dan mengapa opsi lain salah)`;
      break;
    }

    case 'game': {
      const gFormat = customAnswers.gameFormat || 'Game Tanpa Alat';
      const gDuration = customAnswers.duration || '10-15 Menit';
      const gEnergy = customAnswers.classEnergy || 'Meningkatkan Fokus & Konsentrasi';
      categorySpecificInstructions = `
[DETAIL PERMAINAN EDUKASI & ICE BREAKING]
- Jenis Game: ${gFormat}
- Estimasi Durasi: ${gDuration}
- Target Suasana Kelas: ${gEnergy}
- Struktur Penyusunan:
  * Nama Game yang Unik & Menarik bagi Siswa
  * Filosofi & Kaitan Materi dengan Game
  * Alat & Bahan (jika ada, utamakan yang ramah lingkungan / tanpa alat)
  * Aturan Main & Langkah Pelaksanaan Langkah Demi Langkah (Step-by-Step)
  * Kalimat Aba-Aba / Seruan Pembuka Guru untuk Memancing Antusiasme
  * Variasi Adaptasi untuk Siswa yang Pemalu atau Memerlukan Bantuan
  * Pertanyaan Refleksi Singkat (Debriefing 2 Menit) setelah game selesai`;
      break;
    }

    case 'modul': {
      const model = customAnswers.teachingModel || 'Problem Based Learning (PBL)';
      const comp = customAnswers.curriculumComponents || 'Lengkap Kurikulum Merdeka';
      const meet = customAnswers.meetingCount || '1 Pertemuan';
      categorySpecificInstructions = `
[DETAIL KOMPONEN MODUL AJAR KURIKULUM MERDEKA]
- Model Pembelajaran: ${model}
- Kelengkapan Modul: ${comp}
- Alokasi Pertemuan: ${meet}
- Susun dengan Struktur Resmi:
  A. INFORMASI UMUM: Identitas Modul, Kompetensi Awal, Sarana Prasarana, Target Murid, Model Pembelajaran
  B. KOMPONEN INTI:
     1. Tujuan Pembelajaran (berdasarkan Capaian Pembelajaran)
     2. Pemahaman Bermakna (manfaat nyata di kehidupan murid)
     3. Pertanyaan Pemantik (3 pertanyaan menggugah rasa ingin tahu)
     4. Alur Kegiatan Pembelajaran:
        - Kegiatan Pendahuluan (Apersepsi, Orientasi, Motivasi - 10-15 menit)
        - Kegiatan Inti (Sesuai sintaks model ${model} - 50-60 menit)
        - Kegiatan Penutup (Refleksi, Rangkuman, Doa/Penutup - 10-15 menit)
  C. ASESMEN & TINDAK LANJUT:
     - Asesmen Diagnostik, Formatif, dan Sumatif
     - Rencana Pengayaan (murid mahir) & Remedial (murid butuh bimbingan)`;
      break;
    }

    case 'lkpd': {
      const selectedLkpdType = data.lkpdType || customAnswers.lkpdStyle || 'LKPD Eksperimen';
      const pictureActs = data.pictureActivities && data.pictureActivities.length > 0
        ? data.pictureActivities.join(', ')
        : 'Mengamati gambar, Memberi label pada gambar, Mengisi jawaban';
      const exercises = data.includeExercises && data.includeExercises.length > 0
        ? data.includeExercises.join(', ')
        : 'Pilihan Ganda, Isian Singkat';
      const styleArt = data.illustrationStyle || 'Kartun Edukatif';
      const target = customAnswers.targetStudent || 'Kolaborasi Kelompok Kecil';

      categorySpecificInstructions = `
[DETAIL SPESIFIKASI LKPD WORKBOOK MODERN A4 PORTRAIT]
- Jenis / Bentuk LKPD: ${selectedLkpdType}
- Format Tata Letak: Standar A4 Portrait Full-Color (Clean, Edukatif, Student-Friendly & Profesional seperti Workbook Sekolah Modern)
- Sasaran Interaksi: ${target}
- Gaya Seni Ilustrasi: ${styleArt} (Warna cerah dan menarik, tidak terlalu ramai, mendukung pemahaman materi dan diletakkan dekat soal atau aktivitas terkait)
- Rangkaian Kegiatan Bergambar yang Wajib Ada: ${pictureActs}
  * Syarat Kegiatan: Interaktif, menarik, sesuai usia jenjang, dan memiliki ruang jawaban (kolom bergaris atau kotak respon) yang proporsional.
- Latihan Tambahan: ${exercises} (Relevan, bervariasi, tidak terlalu sulit, dan tetap berbasis ilustrasi/aktivitas kontekstual).
- Keseimbangan Desain: Perpaduan teks, ilustrasi edukatif, dan ruang kosong (white space) yang seimbang agar tidak terlalu padat dan nyaman dibaca siswa.
- Struktur Komponen LKPD Wajib:
  1. HEADER MENARIK & IDENTITAS SISWA:
     * Banner Judul Eksploratif: Judul misi belajar yang memikat (misal: "Misi Detektif Sains: Menyelidiki ${topic}")
     * Kotak Identitas Siswa Lengkap: Nama Siswa / Nama Kelompok, Kelas/Fase, No. Absen, Hari/Tanggal, serta Kotak Nilai / Paraf Guru dengan bintang penilaian.
  2. HIGHLIGHT BOX (TUJUAN & PROFIL PANCASILA):
     * Kotak sorot berbingkai rapi berisi Capaian Pembelajaran kontekstual dan integrasi Dimensi Profil Pelajar Pancasila (Bernalar Kritis, Kreatif, Bergotong Royong).
  3. STIMULUS SOAL CERITA / SKENARIO KONTEKSTUAL:
     * Narasi cerita singkat yang dekat dengan kehidupan sehari-hari siswa di Indonesia beserta instruksi penempatan ilustrasi visual pendukung bergaya ${styleArt}.
  4. LANGKAH KEGIATAN BERBENTUK STEP VISUAL INTERAKTIF:
     * Ubah petunjuk kerja menjadi tahapan berurutan (Step 1, Step 2, Step 3, Step 4) dengan ikon modern dan instruksi yang jelas dan bertahap.
  5. AKTIVITAS BERGAMBAR & TABEL OBSERVASI MODERN:
     * Integrasikan aktivitas ${pictureActs} dengan tabel kerja estetis yang terstruktur dan mudah diisi siswa.
  6. LATIHAN SOAL RELEVAN & HOTS:
     * Soal bervariasi (${exercises}) dengan stimulus ilustrasi dan ruang jawaban yang jelas.
  7. KOTAK REFLEKSI SISWA (SELF-REFLECTION BOX):
     * Skala emotikon perasaan siswa (Sangat Paham 😊, Cukup Paham 🤔, Butuh Bantuan 🙋‍♂️) dan pertanyaan reflektif tentang hal paling seru yang dipelajari.`;
      break;
    }

    case 'infografis': {
      const vType = customAnswers.visualType || 'Poster Edukasi A3';
      const vTone = customAnswers.visualTone || 'Kartun Ceria Ramah Anak';
      const vExtra = customAnswers.canvaPromptIncluded || 'Susunan Teks Siap Tempel';
      categorySpecificInstructions = `
[DETAIL MEDIA VISUAL & INFOGRAFIS]
- Tipe Media Visual: ${vType}
- Tone Visual & Gaya Seni: ${vTone}
- Fitur Desain: ${vExtra}
- Struktur Desain Siap Canva / AI:
  * Judul Utama (Headline Besar & Menarik Perhatian)
  * Sub-Headline Penjelasan Ringkas (1 Kalimat)
  * 3-4 Bagian Utama / Alur dengan Ikon & Teks Singkat Padat
  * Kotak Fakta Unik / "Tahukah Kamu?"
  * Panduan Palet Warna (Color Palette Hex Code) yang Harmonis
  * Prompt Khusus untuk Text-to-Image AI (Canva / Midjourney / DALL-E) dalam Bahasa Inggris yang siap disalin`;
      break;
    }

    case 'audio': {
      const medium = customAnswers.audioMedium || 'Lirik Lagu Pembelajaran';
      const rhyme = customAnswers.rhymeScheme || 'Rima Berirama Mudah Dihafal';
      const movement = customAnswers.movementPrompt || 'Panduan Gerak Tubuh';
      categorySpecificInstructions = `
[DETAIL AUDIO & LAGU EDUKASI]
- Format Karya Audio: ${medium}
- Pola Rima: ${rhyme}
- Aksi Pelengkap: ${movement}
- Susun dengan Lengkap:
  * Judul Lagu / Audio: Nada acuan (misal: "Dinyanyikan dengan irama lagu Balonku Ada Lima")
  * Bait 1 (Pembuka & Pengenalan Masalah)
  * Reff / Chorus (Inti materi yang catchy dan mudah diulang-ulang murid)
  * Bait 2 (Penjelasan & Contoh Nyata)
  * Reff Ulang + Outro Ceria
  * Panduan Gerakan Tangan / Bahasa Tubuh di setiap baris agar murid aktif bergerak`;
      break;
    }

    case 'video': {
      const vFormat = customAnswers.videoFormat || 'Skrip 3 Kolom';
      const duration = customAnswers.videoDuration || '2-3 Menit';
      const hook = customAnswers.hookType || 'Pertanyaan Mengejutkan';
      categorySpecificInstructions = `
[DETAIL SKRIP VIDEO PEMBELAJARAN]
- Format Skrip: ${vFormat}
- Target Durasi: ${duration}
- Tipe Hook Pembuka: ${hook}
- Struktur Tabel Skrip 3 Kolom:
  | Waktu (Detik) | Visual & Gerakan Kamera (B-Roll) | Narasi Voiceover (Kata-kata Guru/Host) | Teks & Grafis di Layar (On-Screen Text) |
- Pastikan 5 detik pertama memiliki daya pikat tinggi (Hook)
- Gaya bahasa santai, ekspresif, dan ramah seperti guru kreator konten edukasi`;
      break;
    }

    case 'chatbot': {
      const persona = customAnswers.botPersona || 'Tutor Ramah Socratic';
      const antiCheat = customAnswers.antiCheatRules || 'Ketat: Beri petunjuk, bukan jawaban langsung';
      const promptStyle = customAnswers.systemInstructionOutput || 'System Instructions Siap Pasang';
      categorySpecificInstructions = `
[DETAIL CHATBOT AI ASISTEN KELAS]
- Persona AI: ${persona}
- Aturan Anti-Contekan: ${antiCheat}
- Format Instruksi: ${promptStyle}
- Buat System Prompt Lengkap Meliputi:
  * Identitas & Nada Suara: Ramah, sabar, memuji usaha murid, tidak menghakimi
  * Batasan Operasional: Jangan pernah memberi jawaban PR secara instan; gunakan metode dialog Socratic (tanyakan balik pemahaman murid)
  * Format Respon: Pendek (maksimal 2-3 paragraf), beri contoh konkret dengan analogi anak-anak
  * Contoh Percakapan (Few-Shot Examples): 2 contoh dialog tanya-jawab murid vs bot saat murid mentok belajar`;
      break;
    }

    case 'cetak': {
      const pType = customAnswers.printableType || 'Flashcard 2 Sisi';
      const pCount = customAnswers.cardQuantity || '20 Kartu';
      const pLayout = customAnswers.printLayout || 'Panduan Garis Potong A4';
      categorySpecificInstructions = `
[DETAIL ALAT PERAGA & MEDIA CETAK]
- Format Media Fisik: ${pType}
- Target Jumlah: ${pCount}
- Format Percetakan: ${pLayout}
- Rincian Konten Siap Cetak:
  * Daftar Isi Kartu / Komponen (Nomor, Bagian Depan, Bagian Belakang)
  * Instruksi Perakitan untuk Guru/Murid (Kertas yang disarankan, laminasi, cara memotong)
  * 3 Variasi Cara Bermain / Menggunakan Alat Peraga Ini di Kelas`;
      break;
    }

    case 'literasi': {
      const genre = customAnswers.storyGenre || 'Fabel Edukatif Fiksi Karakter';
      const length = customAnswers.wordCount || '400 - 600 Kata';
      const assess = customAnswers.readingAssessment || '5 Soal Pemahaman Literasi AKM';
      categorySpecificInstructions = `
[DETAIL BACAAN LITERASI & CERITA EDUKATIF]
- Genre & Bentuk Cerita: ${genre}
- Estimasi Panjang: ${length}
- Fitur Asesmen Literasi: ${assess}
- Struktur Teks Literasi:
  * Judul Cerita yang Memikat
  * Karakter Utama & Karakter Pembantu yang Punya Ciri Khas
  * Alur Cerita (Orientasi, Komplikasi Menarik, Resolusi Bermakna)
  * Sisipkan Nilai-Nilai Kearifan Lokal dan Kebaikan
  * Glosarium Kata-Kata Baru (3-5 kata penting beserta artinya)
  * 5 Pertanyaan Pemahaman Literasi (Menemukan informasi, Menginterpretasikan makna, Merefleksikan isi cerita)`;
      break;
    }

    case 'projek': {
      const p5 = customAnswers.p5Theme || 'Gaya Hidup Berkelanjutan';
      const flow = customAnswers.stageFlow || 'Lengkap 4 Tahap';
      const assess = customAnswers.p5Assessment || 'Rubrik 4 Kategori (BB, MB, BSH, SB)';
      categorySpecificInstructions = `
[DETAIL MODUL PROJEK KOKURIKULER (P5)]
- Tema Projek: ${p5}
- Alur Pelaksanaan: ${flow}
- Instrumen Asesmen: ${assess}
- Struktur Lengkap Projek P5:
  * Judul Projek Aksi Nyata yang Inspiratif
  * Latar Belakang Masalah Kontekstual di Lingkungan Sekolah / Masyarakat
  * Dimensi, Elemen, dan Subelemen Profil Pelajar Pancasila yang Dikembangkan
  * Rencana Aktivitas Per Tahap:
    1. Tahap Pengenalan (Membangun kesadaran murid)
    2. Tahap Kontekstualisasi (Riset & wawancara di lingkungan sekitar)
    3. Tahap Aksi (Pembuatan karya / solusi nyata)
    4. Tahap Refleksi & Tindak Lanjut (Pameran karya / Gelar karya & evaluasi)
  * Rubrik Penilaian dengan Indikator Jelas`;
      break;
    }

    default:
      break;
  }

  const dimensionsText = pancasilaDimensions && pancasilaDimensions.length > 0
    ? pancasilaDimensions.map(d => `- ${d}`).join('\n')
    : '- Bernalar Kritis\n- Kreatif\n- Bergotong Royong';

  const diffText = differentiation
    ? `\n[PENDEKATAN BERDIFERENSIASI]
- Sediakan variasi aktivitas untuk 3 kelompok kesiapan belajar:
  1. Murid Butuh Bimbingan: Instruksi lebih visual & bertahap dengan scaffolding
  2. Murid Reguler: Aktivitas sesuai standar Capaian Pembelajaran
  3. Murid Mahir: Tantangan pengayaan / eksplorasi tingkat lanjut`
    : '';

  const objText = learningObjectives && learningObjectives.trim()
    ? `\n[TUJUAN PEMBELAJARAN KHUSUS]\n${learningObjectives.trim()}`
    : '';

  const noteText = additionalNotes && additionalNotes.trim()
    ? `\n[CATATAN TAMBAHAN DARI GURU]\n${additionalNotes.trim()}`
    : '';

  return `Kamu adalah seorang Konsultan Kurikulum Merdeka senior, Ahli Desain Instruksional, dan Pengembang Media Pembelajaran Interaktif terkemuka di Indonesia.

TUGAS UTAMA:
Buatkan rancangan dan konten menyeluruh untuk: "${category.title}" yang siap pakai, berkualitas tinggi, dan interaktif untuk guru di kelas.

[PROFIL KELAS & SASARAN]
- Jenjang Pendidikan & Fase: ${levelLabel}
- Mata Pelajaran: ${subject}
- Materi / Topik Utama: ${topic}
- Model AI Sasaran: ${targetAIName}

[INTEGRASI DIMENSI PROFIL PELAJAR PANCASILA]
${dimensionsText}
${diffText}
${objText}
${categorySpecificInstructions}
${noteText}

[PEDOMAN BAHASA & KUALITAS]
1. Gunakan Bahasa Indonesia yang baku, edukatif, inspiratif, hangat, dan ramah terhadap dunia anak/remaja.
2. Hindari teori yang terlalu berbelit-belit; prioritaskan instruksi praktis, interaktif, dan langsung bisa dieksekusi di ruang kelas.
3. Gunakan formatting Markdown yang rapi (headings, bold, lists, tabel) agar mudah dibaca dan disalin ke dokumen atau slide.

Mulailah hasil karyamu langsung dengan judul yang menarik, tanpa basa-basi pengantar klise seperti "Tentu, ini adalah...".`;
}

function getLevelLabel(level: string): string {
  switch (level) {
    case 'PAUD': return 'PAUD / TK (Usia 4-6 Tahun)';
    case 'SD_FASE_A': return 'SD Kelas 1-2 (Fase A - Membaca Dasar & Konkret)';
    case 'SD_FASE_B': return 'SD Kelas 3-4 (Fase B - Pemahaman Konsep & Eksplorasi)';
    case 'SD_FASE_C': return 'SD Kelas 5-6 (Fase C - Berpikir Kritis & Mandiri)';
    case 'SMP_FASE_D': return 'SMP Kelas 7-9 (Fase D - Kolaborasi & Penalaran)';
    case 'SMA_FASE_E': return 'SMA Kelas 10 (Fase E - Eksplorasi Minat & Analisis)';
    case 'SMA_FASE_F': return 'SMA Kelas 11-12 (Fase F - Pendalaman Konsep & HOTS)';
    case 'SMK': return 'SMK (Kejuruan & Keterampilan Praktik Kerja Nyata)';
    default: return level;
  }
}

function getTargetAIName(ai: string): string {
  switch (ai) {
    case 'dola': return 'Dola AI (Asisten Edukasi Web & WhatsApp)';
    case 'chatgpt': return 'ChatGPT (OpenAI)';
    case 'gemini': return 'Google Gemini (Google AI)';
    case 'claude': return 'Claude (Anthropic)';
    case 'canva': return 'Canva Magic Studio / Canva Code';
    case 'deepseek': return 'DeepSeek AI';
    case 'copilot': return 'Microsoft Copilot';
    case 'perplexity': return 'Perplexity AI';
    case 'quizizz': return 'Quizizz AI';
    case 'gamma': return 'Gamma App AI';
    case 'poe': return 'Poe AI';
    default: return ai;
  }
}
