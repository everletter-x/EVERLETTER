EverLetter — Master Blueprint v1.0

The uploaded reference already shows the right product direction: four distinct romantic/birthday styles ranging from cinematic-universe, floral-soft, luxury birthday, to minimalist-intimate. That is exactly the foundation for a template-based business, not one-off custom sites.  

1) Brand blueprint

Brand name: EverLetter
Brand promise: turn feelings into memories
What it sells: emotional digital gifts, not websites
Core use case: ucapan ke pasangan + customized photo + personal message

Brand positioning

EverLetter should feel:

premium

romantic

modern

clean

emotional

easy to order


Brand personality

elegant, not childish

intimate, not noisy

premium, not cheap-looking

emotional, not dramatic

simple, not confusing


Brand message

Use one idea everywhere:

> Buat ucapan yang terasa lebih spesial daripada chat biasa.



Tagline options

Turn Feelings Into Memories

A Digital Gift Full of Feeling

Make Them Feel Special

Ucapan yang Tidak Akan Dilupakan


My pick: Turn Feelings Into Memories


---

2) Product architecture

EverLetter should be a template engine business.

That means:

one product structure

one codebase per template

one config file per buyer

one deployment flow

buyer-specific domain or subdomain


Output naming

buyer-everletter.vercel.app

by-request.vercel.app

dearnama.vercel.app


Use buyer name in slug only after the order is confirmed.


---

3) Product ladder

Premium — 4 products

These are the main sellers.
Fast to understand. Fast to close. Fast to deliver.

Ultra Premium — 2 products

These are the high-value versions.
More cinematic, more custom, higher price.


---

4) PREMIUM PRODUCTS

Premium 1 — Countdown Reveal

Mechanic: intro loading → scroll countdown 3 2 1 → main page opens

Best for:

birthday

surprise

anniversary

romantic gift


Why it works:

creates anticipation

feels like an event

easy to make viral in TikTok teaser


Content structure in Indonesian:

1. intro singkat


2. countdown


3. hero ucapan


4. photo section


5. pesan personal


6. closing wish



Sample copy:

3... 2... 1...

Ada sesuatu yang ingin aku tunjukkan untukmu.

Selamat membuka halaman kecil yang kubuat khusus untukmu.



---

Premium 2 — Gift Box Open

Mechanic: animated gift box → click to open → page reveal

Best for:

birthday

apology

confession


Why it works:

interactive

simple to understand

strong emotional reveal


Content structure in Indonesian:

1. gift box opening


2. hero message


3. photo spotlight


4. alasan kenapa spesial


5. pesan utama


6. penutup lembut



Sample copy:

Buka hadiahnya ya.

Aku harap ini bisa bikin kamu senyum.

Hadiah ini mungkin sederhana, tapi niatnya besar.



---

Premium 3 — Love Letter Scroll

Mechanic: page terbuka langsung → scroll bertahap → section muncul satu per satu

Best for:

ucapan ke pasangan

anniversary

pesan panjang

romantic appreciation


Why it works:

paling fleksibel

paling cocok untuk copywriting panjang

terasa intimate dan personal


Content structure in Indonesian:

1. hero


2. opening letter


3. photo section


4. alasan sayang


5. memory section


6. closing message



Sample copy:

Aku cuma mau bilang satu hal.

Terima kasih sudah hadir di hidupku.

Kalau boleh jujur, kamu adalah bagian paling indah dari hariku.



---

Premium 4 — Photo Story Card

Mechanic: card/slider story → tiap foto punya caption → final wish

Best for:

customized photo

pasangan yang punya banyak kenangan

birthday

anniversary


Why it works:

photo-driven

gampang dijual

cocok untuk customer yang ingin melihat foto sebagai pusat pengalaman


Content structure in Indonesian:

1. hero singkat


2. photo card/slideshow


3. caption tiap foto


4. pesan personal


5. final wish



Sample copy:

Setiap foto punya cerita.

Dan setiap cerita selalu kembali ke kamu.

Terima kasih sudah jadi bagian dari kenanganku.



---

5) ULTRA PREMIUM PRODUCTS

Ultra Premium 1 — Cinematic Letter

Mechanic: intro sinematik → chapter-based scrolling → motion halus → ending scene

Best for:

anniversary

confession serius

gift paling premium


Why it works:

paling “wah”

paling cocok untuk customer yang mau pengalaman mewah

mudah dibedakan dari Premium


Content structure in Indonesian:

1. opening scene


2. chapter 1


3. chapter 2


4. photo + music


5. letter panjang


6. ending scene



Sample copy:

Untuk seseorang yang mengubah hidupku tanpa banyak bicara.

Setiap momen bersamamu terasa seperti adegan yang layak diingat.

Terima kasih sudah menjadi rumah.



---

Ultra Premium 2 — Signature Memory

Mechanic: fully custom layout → customer request based → paling fleksibel

Best for:

request khusus

tema unik

customer yang mau hasil paling personal


Why it works:

custom premium

bisa dipakai untuk momen apa pun

cocok jadi flagship tier


Content structure in Indonesian:

1. hero custom


2. story custom


3. photo custom


4. message custom


5. closing custom



Sample copy:

Halaman ini dibuat khusus untukmu.

Semua detailnya menyesuaikan cerita kalian.

Karena beberapa perasaan memang terlalu penting untuk dibuat biasa saja.



---

6) CONTENT SYSTEM

Semua produk harus memakai bahasa Indonesia untuk copywriting, supaya:

lebih dekat

lebih natural

lebih mudah closing

lebih emotional


Standard content blocks

1. Opening


2. Main headline


3. Photo section


4. Personal message


5. Why you matter


6. Closing wish


7. CTA order



Tone rules

singkat, hangat, romantis

jangan terlalu puitis kalau bukan Ultra

jangan lebay

jangan bertele-tele

jangan pakai bahasa yang terasa template generik



---

7) VISUAL SYSTEM

Brand look

glassmorphism

soft blur

premium dark mode

romantic accent colors

clean typography

Apple-grade spacing


Color directions

Premium

pink soft

rose

lavender

warm white


Ultra

dark luxury

gold accent

deep black

elegant white

starlight glow


Motion rules

subtle, not chaotic

smooth reveal

soft fade

light parallax

restrained sparkle


Responsiveness

All products must fit:

320px mobile

375px mobile

390px mobile

414px mobile

tablet

desktop


Mobile first, always.


---

8) TECHNICAL BLUEPRINT

Recommended stack

Next.js

TypeScript

TailwindCSS

Framer Motion


Data-driven structure

Every buyer should be controlled by config, not hardcoded content.

Example:

{
  "recipient": "Nabila",
  "sender": "Rizky",
  "title": "Selamat Ulang Tahun",
  "message": "Terima kasih sudah hadir di hidupku...",
  "photos": ["1.jpg", "2.jpg", "3.jpg"],
  "theme": "pink",
  "music": "song.mp3",
  "template": "premium-03"
}

Rule

Do not hardcode names inside components.

Use:

<h1>{config.title}</h1>

not:

<h1>Selamat Ulang Tahun Nabila</h1>


---

9) FILE / TEMPLATE STRUCTURE

everletter/
├── premium-01-countdown-reveal/
├── premium-02-gift-box-open/
├── premium-03-love-letter-scroll/
├── premium-04-photo-story-card/
├── ultra-01-cinematic-letter/
├── ultra-02-signature-memory/
└── shared/

Each folder should include:

page layout

section components

config loader

theme tokens

assets

responsive rules



---

10) BUILD FLOW

Order flow

1. buyer order via WhatsApp


2. dev receives data


3. choose template


4. edit config file


5. replace photos


6. deploy to Vercel


7. generate QR


8. send link + QR to buyer



Target delivery

Premium: 15–30 minutes

Ultra: 30–60 minutes



---

11) COPYWRITING RULES

Good copy

Aku buatkan ini khusus untukmu.

Karena kamu pantas dapat sesuatu yang lebih dari sekadar chat.

Semoga halaman kecil ini bisa membuatmu tersenyum.

Terima kasih sudah menjadi bagian dari hidupku.


Bad copy

terlalu marketing

terlalu formal

terlalu panjang

terlalu alay

terlalu umum



---

12) FINAL PRODUCT MAP

Premium

1. Countdown Reveal


2. Gift Box Open


3. Love Letter Scroll


4. Photo Story Card



Ultra Premium

1. Cinematic Letter


2. Signature Memory




---

13) BRAND-TO-PRODUCT RULE

EverLetter should always be read like this:

Brand → Template → Emotion → Personal photos → Indonesian message → Buyer-specific URL

That is the whole business.

The uploaded reference already proves the concept: different romantic styles can coexist as separate product identities, from universe/cinematic, floral, luxury birthday, to minimalist intimate. Those differences are exactly what should be standardized into a product ladder.  

#Vercel : 
// for each vercel(e.g. : "requested_url".vercel.app)s
vercel_team_id: see docs/.env
Team ID : see docs/.env
Token full : see docs/.env

# Github Token : 
// for each product/(s) diff. repo > vercel 
github_token : see docs/.env

## for every aspect must be aesily cstomized, e.g : 
// music with float button
// Music source and Title auto defined by given url
// photos
// vercel sub domain based on customer request
## Name /(names)
// all another source of thuth is not allowed except :
.env : credential vault_everletter 
from vault_everletter = sync

from @BLUEPRINT.md  = bp
from @product.md = pr / pc

=


// End of Blueprint