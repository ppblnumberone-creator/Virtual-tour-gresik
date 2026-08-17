# Jelajah Gresik — Virtual Tour 360 v5 (Sampling Assets)

Struktur ini sudah sinkron dengan repository GitHub `Virtual-tour-gresik` dan folder `assets` yang kamu buat:

```text
assets/
├── panoramas/   ← foto 360 equirectangular
├── images/      ← foto detail / galeri
├── videos/      ← video hotspot
├── audio/       ← audio latar
├── logo/        ← logo
└── maps/        ← denah/peta
```

## Sampling yang disertakan
- 13 panorama 360 dummy/test berformat 2:1 di `assets/panoramas/`
- 3 foto detail di `assets/images/`
- 1 video sample di `assets/videos/`
- 1 audio sample di `assets/audio/`
- logo dan denah sample di `assets/logo/` dan `assets/maps/`

## Cara penggantian
Ganti file sample dengan file asli memakai nama file yang sama agar JavaScript tidak perlu diubah. Untuk panorama asli, gunakan equirectangular 2:1.

## Sinkronisasi kode
`script.js` sekarang memakai path lokal `assets/...`, termasuk audio lokal dan sample hotspot foto/video. Struktur ini cocok dengan folder yang sudah kamu buat di GitHub.
