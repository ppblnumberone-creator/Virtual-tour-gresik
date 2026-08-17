# Jelajah Gresik — Virtual Tour 360° v4

Versi ini dikembangkan dari `virtual-tour-360-v3.zip` menjadi antarmuka yang lebih siap dipakai untuk proyek/UAS: data destinasi terpusat, pencarian, filter kategori, favorit LocalStorage, detail destinasi, share link per scene, peta/denah, auto-rotate, zoom, fullscreen, tombol sebelumnya/berikutnya, modal info/foto/video, keyboard navigation, dan layout responsive.

## Struktur

```text
virtual-tour-gresik-v4/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── panoramas/   # FOTO 360 equirectangular 2:1 Anda
    ├── images/      # foto hotspot
    ├── videos/      # video hotspot
    ├── logo/        # logo
    ├── maps/        # denah/peta
    └── audio/       # musik latar opsional
```

## Cara menjalankan

### VS Code
Gunakan Live Server lalu buka `index.html`.

### Python
```bash
python -m http.server 8000
```
Buka `http://localhost:8000`.

Jangan mengandalkan `file://` karena beberapa browser membatasi pemuatan aset lokal.

## Bagian yang perlu Anda isi

Semua data destinasi berada di bagian `TOUR_DATA` pada `script.js`.

Contoh:

```js
setigi: {
  title: 'Setigi Gresik',
  category: 'Alam',
  description: 'Deskripsi...',
  area: 'Sekapuk, Panceng',
  ticket: '...',
  hours: '...',
  image: 'assets/panoramas/setigi.jpg',
  thumb: 'assets/panoramas/setigi.jpg',
  mapPosition: { x: 22, y: 28 },
  source: 'https://...',
  initialView: { pitch: 0, yaw: 0, hfov: 105 },
  hotspots: []
}
```

**Foto 360 harus equirectangular, rasio 2:1**, misalnya 4096×2048 atau 6000×3000.

File contoh di `assets/panoramas/` adalah placeholder agar project langsung dapat diuji. **Ganti dengan foto 360 Anda sendiri** dan pertahankan nama file atau ubah path di `TOUR_DATA`.

## Hotspot

Tambahkan ke `hotspots`:

```js
{ type:'scene', pitch:0, yaw:90, sceneId:'dalegan', text:'Menuju Pantai Dalegan' }
{ type:'info', pitch:4, yaw:-30, title:'Sejarah', text:'Keterangan...' }
{ type:'photo', pitch:5, yaw:30, image:'assets/images/foto.jpg', caption:'Keterangan foto' }
{ type:'video', pitch:5, yaw:120, video:'assets/videos/video.mp4' }
```

Untuk mencari pitch/yaw, arahkan kamera ke titik yang diinginkan lalu di Console browser jalankan:

```js
viewer.getPitch()
viewer.getYaw()
```

## Deploy ke GitHub Pages

Upload `index.html`, `style.css`, `script.js`, dan folder `assets` ke repository. Di **Settings → Pages**, pilih `Deploy from a branch`, branch `main`, folder `/ (root)`.

## Catatan sumber materi

Data contoh destinasi disusun dari sumber yang Anda berikan dan beberapa halaman resmi/rujukan yang relevan. Harga/jam pada sumber diberi tanda `*` dan sebaiknya diverifikasi kembali sebelum dipublikasikan sebagai informasi operasional.

- Disparekrafbudpora Gresik — Wisata Buatan
- Disparekrafbudpora Gresik — Wisata Budaya
- detikTravel — 10 Wisata Gresik yang Sayang Dilewatkan
- Tripadvisor — Objek Wisata Gresik

## Catatan akurasi peta

`assets/maps/denah.svg` adalah denah visual contoh, bukan peta geografis presisi. Untuk publikasi resmi, ganti dengan peta/denah yang benar dan sesuaikan `mapPosition`.
