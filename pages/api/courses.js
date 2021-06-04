export default (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: "TSKK410203-Algoritma dan Pemrograman C 19/20 Ganjil",
      assignment: true,
    },
    { id: 2, title: "TSKK410106-Kalkulus C 19/20 Ganjil", assignment: false },
    {
      id: 3,
      title: "TSKK310104-Logika Informatika C 19/20 Ganjil",
      assignment: false,
    },
    {
      id: 4,
      title: "TSPK310001-Pendidikan Agama C 19/20 Ganjil",
      assignment: false,
    },
    {
      id: 5,
      title: "TSKK310205-Pengantar Teknologi Informasi C 19/20 Ganjil",
      assignment: false,
    },
    {
      id: 6,
      title: "TSKK320513-Sistem Operasi C 19/20 Genap",
      assignment: true,
    },
    {
      id: 7,
      title: "TSKK320512-Organisasi dan Arsitektur Komputer C 19/20 Genap",
      assignment: true,
    },
    {
      id: 8,
      title: "TSKK320211-Sistem Basis Data C 19/20 Genap",
      assignment: false,
    },
    {
      id: 9,
      title: "TSKK320210-Struktur Data C 19/20 Genap",
      assignment: true,
    },
    {
      id: 10,
      title: "TSKK320109-Matematika Diskrit C 19/20 Genap",
      assignment: true,
    },
    {
      id: 11,
      title: "TSPK220008-Bahasa Inggris Lanjut C 19/20 Genap",
      assignment: false,
    },
  ]);
};
