# Panduan Admin EverLetter

## Daftar Isi

1. [Cara Memesan (Untuk Customer)](#cara-pemesanan)
2. [Cara Mengedit Config (Untuk Admin)](#cara-mengedit-config)
3. [Mengganti Foto](#mengganti-foto)
4. [Mengganti Musik](#mengganti-musik)
5. [Mengganti Nomor WhatsApp](#mengganti-nomor-whatsapp)
6. [Mengganti Warna/Theme](#mengganti-warna)
7. [Deploy ke Vercel](#deploy-ke-vercel)
8. [Troubleshooting](#troubleshooting)

---

## Cara Pemesanan

### Alur Pemesanan:
1. Customer memilih template di landing page
2. Customer klik "Pesan via WhatsApp"
3. Customer mengirim data:
   - Nama penerima
   - Nama pengirim
   - Pesan personal
   - Foto (4-6 foto)
   - Musik opsional
4. Admin mengedit config.json
5. Admin push ke GitHub
6. Vercel auto-deploy
7. Admin mengirim link ke customer

### Target Waktu:
- Premium: 15-30 menit
- Ultra: 30-60 menit

---

## Cara Mengedit Config

### Lokasi File
Setiap template punya config di:
```
/public/config.json
```

### Contoh Config Lengkap
```json
{
  "recipient": "Sena",
  "sender": "Aku",
  "title": "Untuk Sena, Hari Spesial Ini",
  "message": "Di hari yang istimewa ini, aku ingin kamu tahu satu hal: keberadaanmu adalah hadiah terindah yang pernah aku terima.",
  "photos": [
    "https://contoh.com/foto1.jpg",
    "https://contoh.com/foto2.jpg",
    "https://contoh.com/foto3.jpg",
    "https://contoh.com/foto4.jpg"
  ],
  "theme": "pink",
  "music": "romantic-piano.mp3",
  "musicTitle": "Romantic Piano",
  "captions": [
    "Momen pertama kita bertemu",
    "Senyummu yang selalu kurindukan",
    "Saat kita tertawa bersama",
    "Cinta kita, abadi selamanya"
  ],
  "closing": "Selamat ulang tahun, Sena. Aku sayang kamu lebih dari kata-kata.",
  "reasons": [
    "Senyummu yang selalu mencerahkan hariku",
    "Caramu mendengarkanku tanpa menghakimi",
    "Keberanianmu menghadapi setiap tantangan",
    "Ketulusan hatimu yang tak pernah berubah",
    "Setiap momen kecil bersamamu yang berarti"
  ]
}
```

### Penjelasan Field

| Field | Wajib | Keterangan |
|-------|-------|------------|
| `recipient` | Ya | Nama penerima (misal: "Sena") |
| `sender` | Ya | Nama pengirim (misal: "Aku") |
| `title` | Ya | Judul surat |
| `message` | Ya | Isi pesan utama |
| `photos` | Ya | Array URL foto (min 1, max 12) |
| `theme` | Ya | Warna tema: `pink`, `rose`, `lavender`, `dark-luxury`, `gold-accent` |
| `music` | Tidak | Nama file musik di folder `/public/music/` |
| `musicTitle` | Tidak | Judul musik yang ditampilkan |
| `captions` | Tidak | Keterangan untuk setiap foto |
| `closing` | Ya | Pesan penutup |
| `reasons` | Tidak | Alasan cinta (khusus template Bloom) |
| `chapters` | Tidak | Chapter untuk template Cinematic Letter |
| `sections` | Tidak | Section untuk template Signature Memory |

---

## Mengganti Foto

### Cara 1: Upload ke Hosting
1. Upload foto ke layanan hosting (Cloudinary, Imgur, dll)
2. Copy URL foto
3. Paste ke array `photos` di config.json

### Cara 2: Pakai URL Publik
```json
"photos": [
  "https://images.unsplash.com/photo-1234567890.jpg?w=800",
  "https://images.unsplash.com/photo-0987654321.jpg?w=800"
]
```

### Tips Foto:
- Gunakan resolusi 800x800 atau 1200x1200
- Format JPG atau PNG
- Ukuran max 2MB per foto
- Minimal 4 foto untuk hasil terbaik

---

## Mengganti Musik

### Langkah-langkah:
1. Siapkan file musik format `.mp3`
2. Rename file sesuai keinginan (misal: `romantic-piano.mp3`)
3. Upload ke folder `/public/music/` di template yang sesuai
4. Edit config.json:

```json
{
  "music": "romantic-piano.mp3",
  "musicTitle": "Romantic Piano"
}
```

### Musik yang Tersedia:
- `romantic-piano.mp3` - Piano romantis (Premium)
- `elegant-piano.mp3` - Piano elegan (Premium)
- `cinematic-strings.mp3` - Strings sinematik (Ultra)

### Tips Musik:
- Gunakan musik royalty-free
- Durasi ideal: 2-5 menit
- Volume otomatis diatur ke 30%

---

## Mengganti Nomor WhatsApp

### Lokasi File
Nomor WhatsApp ada di 2 tempat:

1. **Landing page**: `/landing/pages/index.tsx`
2. **Admin config**: `/shared/admin-config.ts`

### Cara Mengganti:
1. Edit `admin-config.ts`:
```typescript
export const ADMIN_CONFIG = {
  whatsapp: "6281234567890", // Ganti nomor di sini
  // ...
};
```

2. Update di landing page (jika belum pakai admin-config):
```tsx
href="https://wa.me/6281234567890?text=..."
```

---

## Mengganti Warna

### Theme yang Tersedia:

| Nama | Warna | Cocok Untuk |
|------|-------|-------------|
| `pink` | Pink lembut | Birthday, Anniversary |
| `rose` | Rose elegan | Apology, Confession |
| `lavender` | Lavender calming | Appreciation, Surprise |
| `dark-luxury` | Hitam mewah | Ultra Premium |
| `gold-accent` | Emas glamour | Ultra Premium |

### Cara Mengganti:
Edit field `theme` di config.json:
```json
{
  "theme": "dark-luxury"
}
```

---

## Deploy ke Vercel

### Alur Deploy:
1. Edit config.json
2. Push ke GitHub:
```bash
cd /root/everletter/workspace/[nama-template]
git add -A
git commit -m "Update config untuk [nama customer]"
git push origin main
```
3. Vercel otomatis deploy dalam 1-2 menit

### Cek Status Deploy:
1. Buka Vercel Dashboard
2. Pilih project
3. Lihat tab "Deployments"

### Manual Deploy (jika perlu):
```bash
vercel --prod
```

---

## Troubleshooting

### Masalah: Foto tidak muncul
**Solusi:**
- Pastikan URL foto benar dan bisa diakses
- Cek format URL (harus `https://...`)
- Pastikan foto tidak lebih dari 2MB

### Masalah: Musik tidak bunyi
**Solusi:**
- Pastikan file musik ada di folder `/public/music/`
- Cek nama file di config.json sesuai dengan nama file aktual
- Browser mungkin memblokir autoplay (user harus klik play)

### Masalah: Deploy gagal
**Solusi:**
- Cek syntax JSON di config.json (tidak ada koma di akhir)
- Pastikan semua field wajib terisi
- Cek log deploy di Vercel Dashboard

### Masalah: Tampilan berantakan di mobile
**Solusi:**
- Gunakan foto dengan aspect ratio 1:1
- Pastikan teks tidak terlalu panjang
- Test di berbagai ukuran layar

### Masalah: WhatsApp tidak terbuka
**Solusi:**
- Pastikan nomor WhatsApp benar (format: 628xxxxxxxxxx)
- Cek apakah user membuka di HP atau desktop
- Di desktop, WhatsApp Web akan terbuka

---

## Kontak

Untuk bantuan teknis, hubungi admin via WhatsApp yang tertera di landing page.

---

*Terakhir diperbarui: 18 Juni 2026*
