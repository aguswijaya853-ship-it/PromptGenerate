import { PresetTemplate } from '../types';

export const POPULAR_TEMPLATES: PresetTemplate[] = [
  {
    id: 'tmpl-dola-1',
    categoryId: 'lkpd',
    title: 'LKPD Workbook A4 Modern: Detektif Siklus Air (Dola AI)',
    description: 'Format lembar kerja A4 full color lengkap dengan step visual, tabel observasi, stimulus cerita, dan refleksi emotikon.',
    subject: 'IPAS (Sains)',
    level: 'SD Fase B (Kelas 4)',
    targetAI: 'dola',
    tags: ['Dola AI', 'LKPD A4', 'Workbook'],
    prompt: `Kamu adalah Asisten Edukasi Dola AI dan Kurikulum Merdeka Specialist.
Buatkan rancangan Lembar Kerja Peserta Didik (LKPD) format A4 Portrait modern seperti workbook sekolah internasional untuk materi "Siklus Air dan Pengaruhnya bagi Bumi" siswa Kelas 4 SD (Fase B).

Format Penyusunan:
1. Header Identitas: Judul Eksploratif, Nama Siswa, Kelas 4, Tanggal, Kotak Nilai Paraf.
2. Highlight Box: Capaian Pembelajaran & Dimensi Bernalar Kritis & Bergotong Royong.
3. Cerita Kontekstual: Kisah genangan air di halaman sekolah yang menghilang saat siang terik.
4. Langkah Visual Bertahap (Step 1 Amati, Step 2 Diskusi, Step 3 Uji Coba, Step 4 Simpulan).
5. Tabel Observasi 3 Kolom yang Bersih dan Teratur.
6. Soal Penalaran HOTS Bergaris.
7. Kotak Refleksi Diri Emotikon (Sangat Paham, Cukup, Butuh Bantuan).`,
  },
  {
    id: 'tmpl-1',
    categoryId: 'game',
    title: 'Ice Breaking 5 Menit Pecah Suasana Kelas',
    description: 'Game tanpa alat yang membangkitkan konsentrasi siswa setelah jam istirahat atau materi berat.',
    subject: 'Semua Mapel (Umum)',
    level: 'SD / SMP / SMA',
    targetAI: 'gemini',
    tags: ['Ice Breaking', 'Konsentrasi', 'Tanpa Alat'],
    prompt: `Kamu adalah fasilitator pembelajaran aktif dan guru kreatif Kurikulum Merdeka.
Buatkan rancangan 3 ide ice breaking seru berdurasi 3-5 menit TANPA ALAT untuk siswa kelas 4 SD yang mulai mengantuk di jam siang.

Kriteria Ice Breaking:
1. Tidak membutuhkan ruangan luas (bisa dilakukan di kursi/meja masing-masing).
2. Melatih konsentrasi, refleks audio-motorik, dan mengundang tawa positif.
3. Berikan instruksi aba-aba guru kata demi kata yang ekspresif.
4. Sertakan variasi hukuman lucu yang edukatif (misal: mempraktikkan suara hewan atau pantun singkat).`,
  },
  {
    id: 'tmpl-2',
    categoryId: 'kuis',
    title: '10 Soal HOTS Matematika: Pecahan Senilai (Fase B)',
    description: 'Paket asesmen berpikir kritis dengan stimulus cerita kehidupan sehari-hari anak Indonesia.',
    subject: 'Matematika',
    level: 'SD Fase B (Kelas 4)',
    targetAI: 'chatgpt',
    tags: ['HOTS', 'Matematika', 'Asesmen'],
    prompt: `Kamu adalah Guru Matematika Berprestasi dan Penyusun Soal Asesmen Nasional.
Buatkan 10 butir soal pilihan ganda HOTS (Higher Order Thinking Skills - level C4 dan C5) untuk siswa SD Kelas 4 dengan topik "Pecahan Senilai dan Perbandingan Pecahan".

Persyaratan Soal:
1. Setiap soal wajib diawali stimulus kontekstual yang dekat dengan keseharian anak (misal: memotong martabak, membagi pita kerajinan, resep membuat kue tradisional).
2. Pilihan jawaban A, B, C, D dengan opsi pengecoh yang memiliki alasan logis jika siswa keliru menghitung.
3. Kunci jawaban dan pembahasan analitis lengkap langkah demi langkah di bagian akhir.
4. Sertakan tabel kisi-kisi dan indikator ketercapaian tujuan pembelajaran.`,
  },
  {
    id: 'tmpl-3',
    categoryId: 'presentasi',
    title: 'Outline Slide Canva Interaktif: Siklus Air & Hujan',
    description: 'Format 8 slide storytelling interaktif lengkap dengan script narasi guru dan arahan desain Canva.',
    subject: 'IPAS (Sains)',
    level: 'SD Fase B (Kelas 4-5)',
    targetAI: 'canva',
    tags: ['Canva', 'Presentasi', 'IPAS'],
    prompt: `Kamu adalah Instructional Designer dan Desainer Media Edukasi Canva bersertifikat.
Buatkan struktur dan isi lengkap 8 Slide Presentasi Canva Interaktif untuk materi IPAS Kelas 4: "Bagaimana Air Mengalir dan Menjadi Hujan? (Siklus Hidrologi)".

Untuk setiap slide (Slide 1 sampai 8), tuliskan dengan format:
1. Judul Slide & Sub-judul
2. Konten Teks di Slide (Maksimal 3-4 poin ringkas agar tidak menumpuk)
3. Rekomendasi Elemen Visual Canva (kata kunci pencarian elemen grafis di Canva, misal: "cute watercolor cloud", "water cycle arrow")
4. Script Guru: Kata-kata ramah yang dibacakan guru secara interaktif
5. Pertanyaan Cepat untuk Murid: Satu pertanyaan seru di tengah slide agar kelas tetap hidup`,
  },
  {
    id: 'tmpl-4',
    categoryId: 'lkpd',
    title: 'LKPD Kolaboratif: Rantai Makanan & Jaring Ekosistem',
    description: 'Lembar kerja kelompok berbasis gambar dengan misi detektif sains dan refleksi perasaan.',
    subject: 'IPAS / Biologi',
    level: 'SD Fase C / SMP Fase D',
    targetAI: 'gemini',
    tags: ['LKPD', 'Eksplorasi', 'Kelompok'],
    prompt: `Kamu adalah Pengembang Kurikulum Merdeka spesialis Lembar Kerja Peserta Didik (LKPD).
Buatkan naskah LKPD ramah anak yang menarik untuk materi "Rantai Makanan dan Keseimbangan Ekosistem Sawah" untuk kelompok 4 orang siswa.

Komponen LKPD yang wajib ada:
1. Judul Misi: Buat seperti "Detektif Ekosistem Sawah"
2. Tujuan Pembelajaran & Profil Pelajar Pancasila yang disasar (Bergotong Royong & Bernalar Kritis)
3. Studi Kasus Bergambar: Cerita singkat tentang apa yang terjadi jika ular sawah diburu habis oleh manusia
4. Tabel Pengamatan & Kolom Penyelidikan
5. Tantangan Menggambar Jaring-Jaring Makanan
6. 3 Pertanyaan Refleksi Pribadi dengan skala emotikon (Senang, Tertantang, Butuh Bantuan)`,
  },
  {
    id: 'tmpl-5',
    categoryId: 'audio',
    title: 'Lirik Lagu Hafalan Nama Planet (Irama Balonku)',
    description: 'Lirik lagu ceria dan catchy untuk menghafal urutan planet tata surya beserta ciri khasnya.',
    subject: 'IPAS / Tata Surya',
    level: 'SD / TK',
    targetAI: 'chatgpt',
    tags: ['Lagu Edukatif', 'Menghafal Ceria', 'Musik'],
    prompt: `Kamu adalah pencipta lagu anak edukatif legendaris Indonesia.
Tuliskan lirik lagu pembelajaran untuk memudahkan siswa menghafal urutan 8 Planet Tata Surya dari yang terdekat dengan Matahari (Merkurius sampai Neptunus) beserta 1 ciri khas masing-masing planet.

Instruksi Khusus:
1. Gunakan nada irama lagu anak terkenal yang akrab di telinga anak (misal: "Balonku Ada Lima" atau "Naik Becak").
2. Setiap bait terdiri dari rima yang harmonis (AABB atau ABAB).
3. Berikan instruksi gerakan tangan / ekspresi tubuh guru dan murid di sebelah baris lirik agar murid bergerak aktif saat bernyanyi.
4. Buatkan Reff (Chorus) yang sangat membekas dan riang!`,
  },
  {
    id: 'tmpl-6',
    categoryId: 'projek',
    title: 'Modul P5: Gaya Hidup Berkelanjutan (Karya Dari Daur Ulang)',
    description: 'Rencana aksi nyata 4 tahap pengolahan sampah plastik sekolah untuk pameran karya murid.',
    subject: 'Projek P5',
    level: 'SMP Fase D / SD Fase C',
    targetAI: 'claude',
    tags: ['P5', 'Lingkungan', 'Karya Nyata'],
    prompt: `Kamu adalah Koordinator Projek Penguatan Profil Pelajar Pancasila (P5) Berpengalaman.
Susunlah Rencana Kegiatan Projek P5 dengan tema "Gaya Hidup Berkelanjutan" berjudul "Sekolahku Bebas Sampah: Mengubah Botol Plastik Jadi Vertikultur Kebun Sekolah".

Susun lengkap dengan alur:
1. Identitas Projek: Sasaran Dimensi (Kreatif & Gotong Royong), Alokasi Waktu (2 Pekan).
2. Tahap 1: Pengenalan (Eksplorasi jejak sampah di kantin & sekolah).
3. Tahap 2: Kontekstualisasi (Wawancara penjaga sekolah & riset bahaya mikroplastik).
4. Tahap 3: Aksi Nyata (Panduan langkah pembuatan rak tanaman dari botol plastik bekas).
5. Tahap 4: Refleksi dan Gelar Karya Pameran di Depan Orang Tua.
6. Lembar Rubrik Penilaian 4 Kriteria (Mulai Berkembang, Berkembang, Berkembang Sesuai Harapan, Sangat Berkembang).`,
  },
];
