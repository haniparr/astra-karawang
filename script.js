// ===== Konfigurasi (Sesuai Data PIC & Onboarding Astra Isuzu Karawang) =====
const CONFIG = {
  picName: "Gelar Dwi Pramudita",
  picTitle: "Sales Consultant • Astra Isuzu Karawang",
  dealerName: "Dealer Astra Isuzu Karawang",
  dealerSubtitle: "Dealer Isuzu Terbesar se-Jabodetabek (Member of ASTRA)",
  waNumber: "6285711593336",
  waDisplay: "0857-1159-3336",
  emailBusiness: "Gelar.dwipramudita@iso.astra.co.id",
  emailPersonal: "gelardwip26@gmail.com",
  catalogUrl: "https://bit.ly/brandingisuzu",
  instagramUrl: "https://www.instagram.com/astraisuzusales.karawang",
  instagramHandle: "@astraisuzusales.karawang",
  tiktokUrl: "https://www.tiktok.com/@astra.isuzu.krw",
  tiktokHandle: "@astra.isuzu.krw",
  address: "Dealer Astra Isuzu Karawang, Jawa Barat",
};

// ===== Data unit =====
// 100% Selaras dengan Brosur Resmi Pricelist Isuzu Line Up 2026
const UNITS = [
  {
    id: "traga",
    name: "Isuzu Traga Euro 4",
    cat: "Pick up",
    cls: "Pick up, Box & Chassis • 7 varian",
    price: "Rp296 juta*",
    priceType: "OTR Karawang",
    badge: "BEST SELLER",
    img: "assets/traga.png",
    heroLabel: "TRAGA",
    desc: "Andalan bisnis lincah dan irit. Pilihan bak terbuka (FD), box semi aluminium, dan chassis.",
    variants: [
      { name: "TRAGA CHASSIS", price: "Rp 296.000.000" },
      { name: "TRAGA PICK UP (FD)", price: "Rp 297.000.000" },
      { name: "TRAGA PICK UP (FD) BLACK", price: "Rp 299.000.000" },
      { name: "TRAGA CHASSIS B", price: "Rp 301.000.000" },
      { name: "TRAGA PICK UP (FD) AC", price: "Rp 306.000.000" },
      { name: "TRAGA PICK UP (FD) AC BLACK", price: "Rp 308.000.000" },
      { name: "TRAGA BOX SEMI ALUMINIUM", price: "Rp 338.000.000" },
    ],
  },
  {
    id: "elf-4ban",
    name: "Isuzu Elf (N Series) 4 Ban Euro 4",
    cat: "Light truck",
    cls: "Light truck 4 ban • 2 varian",
    price: "Rp433 juta*",
    priceType: "OTR Karawang",
    badge: "DISTRIBUSI KOTA",
    img: "assets/elf-nlr.png",
    heroLabel: "ELF NLR",
    desc: "Lincah bermanuver di jalan sempit & perkotaan dengan kapasitas angkut optimal.",
    variants: [
      { name: "NLR", price: "Rp 433.000.000" },
      { name: "NLR L (Long Chassis)", price: "Rp 450.000.000" },
    ],
  },
  {
    id: "elf-6ban",
    name: "Isuzu Elf (N Series) 6 Ban Euro 4",
    cat: "Light truck",
    cls: "Light truck 6 ban • 5 varian",
    price: "Rp511 juta*",
    priceType: "OTR Karawang",
    badge: "TERPOPULER",
    img: "assets/elf-nmr.png",
    heroLabel: "ELF NMR",
    desc: "Truk 6 ban bertenaga tinggi, siap untuk muatan berat di jalur distribusi antar-kota.",
    variants: [
      { name: "NMR", price: "Rp 511.000.000" },
      { name: "NMR L (Long)", price: "Rp 522.000.000" },
      { name: "NMR HD 5.8", price: "Rp 522.000.000" },
      { name: "NMR HD 6.5", price: "Rp 533.000.000" },
      { name: "NPS (OFF THE ROAD)", price: "Rp 910.000.000" },
    ],
  },
  {
    id: "elf-microbus-ac",
    name: "Isuzu Elf (N Series) Microbus AC Euro 4",
    cat: "Microbus",
    cls: "Microbus Full AC • 2 varian",
    price: "Rp607 juta*",
    priceType: "OTR Karawang",
    badge: "KABIN DINGIN",
    img: "assets/elf-microbus.png",
    heroLabel: "MICROBUS AC",
    desc: "Kabin dingin ber-AC dengan kenyamanan prima untuk pariwisata dan travel karyawan.",
    variants: [
      { name: "NLR B MICROBUS AC", price: "Rp 607.000.000" },
      { name: "NLR B L MICROBUS AC", price: "Rp 654.000.000" },
    ],
  },
  {
    id: "elf-bus-chassis",
    name: "Isuzu Elf (N Series) Microbus Standar / Non-AC",
    cat: "Microbus",
    cls: "Chassis Bus • 3 varian",
    price: "Rp437 juta*",
    priceType: "OTR Karawang",
    badge: "CHASSIS BUS",
    img: "assets/elf-microbus.png",
    heroLabel: "BUS CHASSIS",
    desc: "Chassis bus fleksibel siap dipasangi bodi karoseri microbus hingga medium bus.",
    variants: [
      { name: "NLR B", price: "Rp 437.000.000" },
      { name: "NLR B L", price: "Rp 450.000.000" },
      { name: "NQR B (Medium Bus)", price: "Rp 527.000.000" },
    ],
  },
  {
    id: "giga-4x2-4cyl",
    name: "Isuzu Giga (4×2) Rigid – 4 Cyl Euro 4",
    cat: "Medium truck",
    cls: "Medium truck 4 silinder • 4 varian",
    price: "Rp640 juta*",
    priceType: "Off The Road",
    badge: "HEMAT & BERTENAGA",
    img: "assets/giga-4x2-4cyl.png",
    heroLabel: "GIGA 4 CYL",
    desc: "Truk medium 4 silinder Euro 4 bertenaga besar untuk angkutan ekspedisi & kargo.",
    variants: [
      { name: "FRR Q", price: "Rp 640.000.000" },
      { name: "FTR P", price: "Rp 712.000.000" },
      { name: "FTR S", price: "Rp 716.000.000" },
      { name: "FTR T", price: "Rp 724.000.000" },
    ],
  },
  {
    id: "giga-4x2-6cyl",
    name: "Isuzu Giga (4×2) Rigid – 6 Cyl Euro 4",
    cat: "Medium truck",
    cls: "Medium truck 6 silinder • 5 varian",
    price: "Rp793 juta*",
    priceType: "Off The Road",
    badge: "TANGGUH 6 CYL",
    img: "assets/giga-4x2-6cyl.png",
    heroLabel: "GIGA 6 CYL",
    desc: "Performa mesin 6 silinder tangguh dengan torsi tinggi untuk muatan jarak jauh.",
    variants: [
      { name: "FVR L", price: "Rp 793.000.000" },
      { name: "FVR P", price: "Rp 799.000.000" },
      { name: "FVR S", price: "Rp 809.000.000" },
      { name: "FVR Q", price: "Rp 804.000.000" },
      { name: "FVR U", price: "Rp 818.000.000" },
    ],
  },
  {
    id: "giga-6x2",
    name: "Isuzu Giga (6×2) Rigid Euro 4",
    cat: "Medium truck",
    cls: "Medium truck 6×2 • 4 varian",
    price: "Rp940 juta*",
    priceType: "Off The Road",
    badge: "VOLUME MAKSIMAL",
    img: "assets/giga-6x2.png",
    heroLabel: "GIGA 6×2",
    desc: "Kapasitas muat ekstra panjang (FVM). Tulang punggung angkutan logistik besar.",
    variants: [
      { name: "FVM N", price: "Rp 940.000.000" },
      { name: "FVM U", price: "Rp 952.000.000" },
      { name: "FVM U HP", price: "Rp 1.005.000.000" },
      { name: "FVM N HP ABS", price: "Rp 1.021.000.000" },
    ],
  },
  {
    id: "giga-6x4",
    name: "Isuzu Giga (6×4) Rigid Euro 4",
    cat: "Medium truck",
    cls: "Heavy duty truck 6×4 • 3 varian",
    price: "Rp1,17 miliar*",
    priceType: "Off The Road",
    badge: "HEAVY DUTY",
    img: "assets/giga-6x4.png",
    heroLabel: "GIGA 6×4",
    desc: "Daya cengkeram ganda (FVZ) untuk medan konstruksi, tambang, dan perkebunan.",
    variants: [
      { name: "FVZ N HP", price: "Rp 1.179.000.000" },
      { name: "FVZ L HP MX", price: "Rp 1.174.000.000" },
      { name: "FVZ U HP", price: "Rp 1.200.000.000" },
    ],
  },
  {
    id: "giga-th-4x2",
    name: "Isuzu Giga (4×2) T/H Euro 4",
    cat: "Tractor Head",
    cls: "Tractor Head 4×2 • 2 varian",
    price: "Rp833 juta*",
    priceType: "Off The Road",
    badge: "TRACTOR HEAD 4X2",
    img: "assets/giga-4x2-th.png",
    heroLabel: "GIGA T/H 4×2",
    desc: "Penarik trailer kontainer 20 feet & muatan kargo pelabuhan yang efisien.",
    variants: [
      { name: "GVR J", price: "Rp 833.000.000" },
      { name: "GVR J HP ABS", price: "Rp 906.000.000" },
    ],
  },
  {
    id: "giga-th-6x4",
    name: "Isuzu Giga (6×4) T/H Euro 4",
    cat: "Tractor Head",
    cls: "Tractor Head 6×4 • 2 varian",
    price: "Rp1,19 miliar*",
    priceType: "Off The Road",
    badge: "HEAVY HAULER 6X4",
    img: "assets/giga-6x4-th.png",
    heroLabel: "GIGA T/H 6×4",
    desc: "Penarik trailer kontainer 40 feet & muatan berat tangki industri dengan sistem ABS.",
    variants: [
      { name: "GVZ K HP ABS", price: "Rp 1.196.000.000" },
      { name: "GXZ K ABS", price: "Rp 1.353.000.000" },
    ],
  },
];

const FILTERS = [
  "Semua model",
  "Pick up",
  "Light truck",
  "Microbus",
  "Medium truck",
  "Tractor Head",
];

const FAQS = [
  {
    q: "Apa saja 7 Keuntungan membeli di Astra Isuzu?",
    a: "Hanya di Astra, Anda mendapatkan 7 keuntungan eksklusif: 1) Perlindungan Anti Karat, 2) Physical Ability mesin teruji, 3) Servis Lebih Cepat dengan prioritas antrean, 4) Bengkel Isuzu Berjalan (BIB) datang ke lokasi, 5) Jaringan outlet resmi se-Indonesia, 6) Santunan Driver Rp 20 Juta, dan 7) Training berkendara aman & hemat bagi driver Anda.",
  },
  {
    q: "Apakah melayani pembelian untuk luar kota Karawang & se-Jabodetabek?",
    a: "Sangat bisa. Dealer Astra Isuzu Karawang merupakan dealer Isuzu terbesar se-Jabodetabek. Kami melayani pengadaan unit dan fleet untuk Karawang, Cikarang, Bekasi, Purwakarta, Subang, Jakarta, Bogor, Depok, Tangerang, hingga pengiriman seluruh Indonesia.",
  },
  {
    q: "Apakah bisa cash, kredit, atau fleet pengadaan perusahaan?",
    a: "Bisa. Kami melayani pembelian retail cash & kredit (tenor s/d 5 tahun via ACC, KKB BCA, MTF, Mitsui, MUF, Adira, SANF) maupun pengadaan armada perusahaan (fleet), rental/travel karyawan, logistik, industri, hingga instansi via e-Katalog.",
  },
  {
    q: "Bagaimana cara mendapatkan e-Katalog dan Pricelist resmi?",
    a: 'Anda dapat mengunduh langsung melalui tombol "Download E-Katalog (PDF)" di website ini atau menghubungi PIC Gelar Dwi Pramudita via WhatsApp 0857-1159-3336 untuk mendapatkan pricelist dan perhitungan simulasi kredit terbaru.',
  },
  {
    q: "Apa itu Astra Isuzu Membership?",
    a: "Program membership resmi untuk pelanggan Astra Isuzu yang memberikan manfaat khusus berupa diskon servis berkala, potongan harga suku cadang asli, reward poin, dan layanan bantuan darurat 24 jam Astra World.",
  },
];

// ===== WhatsApp links =====
function waUrl(msg) {
  return `https://wa.me/${CONFIG.waNumber}?text=${encodeURIComponent(msg)}`;
}
function setWaLinks() {
  document.querySelectorAll(".wa-link").forEach((el) => {
    el.href = waUrl(el.dataset.wa || "Halo, saya ingin konsultasi unit Isuzu.");
    el.target = "_blank";
    el.rel = "noopener";
  });
}

// ===== Render lineup =====
let activeFilter = "Semua model";

function matchesFilter(unit) {
  if (activeFilter === "Semua model") return true;
  if (activeFilter === "Tractor Head") return unit.cat === "Tractor Head";
  return unit.cat === activeFilter;
}

function renderFilters() {
  const wrap = document.getElementById("filters");
  wrap.innerHTML = FILTERS.map((f) => {
    const isActive = f === activeFilter;
    return `<button data-filter="${f}" class="px-5 py-2.5 rounded-full text-sm font-semibold border transition ${
      isActive
        ? "bg-neutral-900 text-white border-neutral-900"
        : "bg-white border-neutral-300 hover:border-neutral-900"
    }">${f}</button>`;
  }).join("");
  wrap.querySelectorAll("button").forEach((btn) =>
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      renderFilters();
      renderGrid();
    }),
  );
}

function renderGrid() {
  const grid = document.getElementById("lineupGrid");
  grid.innerHTML = UNITS.filter(matchesFilter)
    .map((u) => {
      const isOtr = u.priceType === "OTR Karawang";
      const priceBadge = isOtr
        ? `<span class="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">OTR KARAWANG</span>`
        : `<span class="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-900 text-amber-300 border border-neutral-700 shrink-0">OFF THE ROAD</span>`;

      return `
        <article class="fade-in border border-neutral-200 rounded-2xl p-4 sm:p-5 bg-white hover:shadow-xl transition flex flex-col justify-between min-w-0 overflow-hidden">
          <div class="min-w-0">
            <div class="flex flex-wrap items-center justify-between gap-1.5">
              <span class="text-[9px] sm:text-[10px] font-bold tracking-wider bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded shrink-0">${u.badge}</span>
              ${priceBadge}
            </div>

            <div class="h-32 sm:h-36 flex items-center justify-center my-3">
              <img src="${u.img}" alt="${u.name}" loading="lazy" class="max-h-full max-w-full object-contain drop-shadow" onerror="this.outerHTML='<div class=&quot;text-neutral-300 text-xs text-center py-4&quot;>Foto: ${u.img}</div>'" />
            </div>

            <p class="text-[11px] text-neutral-500 truncate">${u.cls}</p>
            <h3 class="font-bold text-sm sm:text-base mt-0.5 leading-snug line-clamp-2 text-neutral-900">${u.name}</h3>

            <div class="mt-2 flex items-baseline justify-between">
              <p class="text-xs sm:text-sm">
                <span class="text-neutral-500 text-[11px]">Mulai</span>
                <span class="font-extrabold text-neutral-900 ml-1">${u.price}</span>
              </p>
            </div>

            <!-- Toggle Rincian Varian & Harga Lengkap -->
            <button type="button" class="variant-toggle-btn w-full mt-3 py-1.5 px-2.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-[11px] font-semibold text-neutral-700 flex items-center justify-between transition-colors" data-target="var-${u.id}">
              <span class="truncate pr-2">Daftar Varian &amp; Harga (${u.variants.length})</span>
              <span class="toggle-icon text-neutral-400 font-bold transition-transform shrink-0">▼</span>
            </button>

            <!-- Collapsible Drawer Varian -->
            <div id="var-${u.id}" class="variant-drawer hidden mt-2.5 pt-2 border-t border-neutral-100 space-y-1">
              ${u.variants
                .map(
                  (v) => `
                <div class="flex items-center justify-between py-1.5 border-b border-neutral-50 text-[11px] min-w-0">
                  <span class="font-medium text-neutral-700 truncate min-w-0 mr-2 flex-1" title="${v.name}">${v.name}</span>
                  <span class="font-bold text-neutral-950 shrink-0 text-right">${v.price}</span>
                </div>
              `,
                )
                .join("")}
              <div class="pt-2">
                <a data-wa="Halo Mas Gelar, saya ingin simulasi kredit dan cek diskon untuk ${u.name}."
                   class="wa-link block text-center py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-isuzu-red font-bold text-[11px] transition-colors">
                  Tanya Diskon Tipe Ini ↗
                </a>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-neutral-200 flex justify-between items-center">
            <a data-wa="Halo Mas Gelar, saya ingin minta penawaran untuk ${u.name}." class="wa-link text-xs font-bold text-isuzu-red hover:underline">
              Minta Penawaran
            </a>
            <span class="text-isuzu-red text-xs">↗</span>
          </div>
        </article>`;
    })
    .join("");

  // Handle collapsible variant drawers
  document.querySelectorAll(".variant-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.dataset.target;
      const drawer = document.getElementById(targetId);
      const icon = btn.querySelector(".toggle-icon");
      if (drawer) {
        const isHidden = drawer.classList.contains("hidden");
        drawer.classList.toggle("hidden", !isHidden);
        if (icon) {
          icon.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
        }
      }
    });
  });

  setWaLinks();
  observeFade();
}

// ===== FAQ accordion =====
function renderFaq() {
  const wrap = document.getElementById("faq");
  wrap.innerHTML = FAQS.map(
    (f, i) => `
    <div class="py-5">
      <button class="faq-btn w-full flex justify-between items-center text-left font-bold gap-3" aria-expanded="${i === 0}">
        <span class="text-sm sm:text-base leading-snug">${f.q}</span>
        <span class="faq-icon text-xl shrink-0 text-neutral-500">${i === 0 ? "−" : "+"}</span>
      </button>
      <div class="faq-body ${i === 0 ? "" : "hidden"} mt-3 text-sm text-neutral-600 leading-relaxed">${f.a}</div>
    </div>`,
  ).join("");
  wrap.querySelectorAll(".faq-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const body = btn.parentElement.querySelector(".faq-body");
      const icon = btn.querySelector(".faq-icon");
      const open = body.classList.contains("hidden");
      body.classList.toggle("hidden", !open);
      icon.textContent = open ? "−" : "+";
      btn.setAttribute("aria-expanded", open);
    }),
  );
}

// ===== Fade-in on scroll =====
function observeFade() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach(
        (e) => e.isIntersecting && e.target.classList.add("show"),
      ),
    { threshold: 0.1 },
  );
  document
    .querySelectorAll(".fade-in:not(.show)")
    .forEach((el) => io.observe(el));
}

// ===== Mobile menu =====
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("hidden");
});

// ===== Hero Slideshow =====
let heroIndex = 0;
let heroTimer = null;

function renderHeroSlides() {
  const container = document.getElementById("heroSlides");
  const dots = document.getElementById("heroDots");
  if (!container || !dots) return;

  const total = String(UNITS.length).padStart(2, "0");

  container.innerHTML = UNITS.map((u, i) => {
    const counter = String(i + 1).padStart(2, "0") + " / " + total;
    return `
    <div class="hero-slide${i === 0 ? " active" : ""}" data-slide="${i}">
      <div class="flex justify-between items-center text-[10px] sm:text-xs tracking-wider sm:tracking-widest relative z-10 font-medium">
        <span class="truncate pr-2">BUILT FOR YOUR NEXT CHAPTER</span>
        <span class="font-bold font-mono shrink-0">${counter}</span>
      </div>
      <span class="hero-slide-bg">${u.heroLabel}</span>
      <div class="relative z-10 flex-1 flex items-center justify-center py-2 sm:py-4 my-auto">
        <img src="${u.img}" alt="${u.name}" class="max-h-48 sm:max-h-60 object-contain drop-shadow-xl"
          onerror="this.style.display='none'" />
      </div>
      <div class="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-3">
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="bg-white text-isuzu-red text-[9px] sm:text-[10px] font-bold px-2.5 py-0.5 rounded-full shrink-0">${u.badge}</span>
            <span class="text-[10px] text-white/80 font-medium">${u.priceType}</span>
          </div>
          <p style="font-family:'Archivo Black',sans-serif;" class="text-base sm:text-2xl leading-tight text-white">${u.name.toUpperCase()}</p>
          <p class="text-xs sm:text-sm mt-1 text-white/95 font-medium">Mulai <span class="font-bold">${u.price}</span></p>
          <p class="text-[11px] sm:text-xs mt-0.5 text-white/80 line-clamp-1 sm:line-clamp-none">${u.desc}</p>
        </div>
      </div>
    </div>
  `;
  }).join("");

  dots.innerHTML = UNITS.map(
    (_, i) =>
      `<button class="hero-dot${i === 0 ? " active" : ""}" data-dot="${i}" aria-label="Slide ${i + 1}"></button>`,
  ).join("");

  dots
    .querySelectorAll(".hero-dot")
    .forEach((btn) =>
      btn.addEventListener("click", () => goToSlide(Number(btn.dataset.dot))),
    );
}

function goToSlide(idx) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (!slides.length) return;
  slides[heroIndex].classList.remove("active");
  dots[heroIndex].classList.remove("active");
  heroIndex = (idx + UNITS.length) % UNITS.length;
  slides[heroIndex].classList.add("active");
  dots[heroIndex].classList.add("active");
  resetHeroTimer();
}

function resetHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => goToSlide(heroIndex + 1), 4500);
}

function initHeroSlider() {
  renderHeroSlides();
  document
    .getElementById("heroPrev")
    ?.addEventListener("click", () => goToSlide(heroIndex - 1));
  document
    .getElementById("heroNext")
    ?.addEventListener("click", () => goToSlide(heroIndex + 1));

  // Touch swipe gesture for tablet & mobile
  const sliderEl = document.getElementById("heroSlider");
  if (sliderEl) {
    let touchStartX = 0;
    let touchEndX = 0;

    sliderEl.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    sliderEl.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      { passive: true },
    );

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      const minSwipeDistance = 45; // px threshold
      if (swipeDistance > minSwipeDistance) {
        goToSlide(heroIndex - 1);
      } else if (swipeDistance < -minSwipeDistance) {
        goToSlide(heroIndex + 1);
      }
    }
  }

  resetHeroTimer();
}

// ===== Contact Form =====
function initContactForm() {
  const form = document.getElementById("consultForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = form.nama?.value.trim() || "";
    const telp = form.telp?.value.trim() || "";
    const usaha = form.usaha?.value.trim() || "";
    const unit = form.unit?.value || "";
    const pesan = form.pesan?.value.trim() || "";

    const textLines = [
      `Halo Mas Gelar, saya ingin konsultasi unit Isuzu:`,
      ``,
      `*Nama:* ${nama}`,
      `*No HP/WhatsApp:* ${telp}`,
      `*Perusahaan/Usaha:* ${usaha || "-"}`,
      `*Unit yang Diminati:* ${unit || "Belum Ditentukan"}`,
    ];
    if (pesan) {
      textLines.push(`*Kebutuhan/Pesan:* ${pesan}`);
    }

    const text = encodeURIComponent(textLines.join("\n"));
    window.open(`https://wa.me/${CONFIG.waNumber}?text=${text}`, "_blank");
  });
}

// ===== Init =====
document.querySelectorAll(".wa-display-text").forEach((el) => {
  el.textContent = CONFIG.waDisplay;
});
document.querySelectorAll(".pic-name-text").forEach((el) => {
  el.textContent = CONFIG.picName;
});
document.querySelectorAll(".pic-email-text").forEach((el) => {
  el.textContent = CONFIG.emailBusiness;
  if (el.tagName === "A") el.href = `mailto:${CONFIG.emailBusiness}`;
});

const waDisplay = document.getElementById("waDisplay");
if (waDisplay) waDisplay.textContent = CONFIG.waDisplay;

const picDisplay = document.getElementById("picDisplay");
if (picDisplay) picDisplay.textContent = CONFIG.picName;

const emailDisplay = document.getElementById("emailDisplay");
if (emailDisplay) {
  emailDisplay.textContent = CONFIG.emailBusiness;
  if (emailDisplay.tagName === "A")
    emailDisplay.href = `mailto:${CONFIG.emailBusiness}`;
}

setWaLinks();
renderFilters();
renderGrid();
renderFaq();
initHeroSlider();
initContactForm();
