"use client";

import { useState } from "react";

type Status = "active" | "soon" | "default";

interface Province {
  id: number;
  name: string;
  path: string;
  status: Status;
}

// ViewBox: "0 0 900 530"
// x = (lon - 25.5) * 46,  y = (42.6 - lat) * 78
const provinces: Province[] = [
  // ─── TRAKYA ────────────────────────────────────────────────────────────────
  { id: 22, name: "Edirne",      status: "default", path: "M 23,47 L 79,43 L 84,57 L 80,75 L 70,87 L 52,93 L 34,91 L 23,79 Z" },
  { id: 39, name: "Kırklareli", status: "default", path: "M 79,43 L 120,37 L 124,17 L 109,7 L 88,11 L 74,25 Z" },
  { id: 59, name: "Tekirdağ",   status: "default", path: "M 34,91 L 52,93 L 70,87 L 80,75 L 84,57 L 120,55 L 126,69 L 114,87 L 96,101 L 72,109 L 46,107 Z" },
  // ─── MARMARA ───────────────────────────────────────────────────────────────
  { id: 34, name: "İstanbul",   status: "active",  path: "M 120,37 L 158,35 L 170,43 L 174,57 L 166,73 L 152,81 L 136,83 L 120,75 L 114,61 L 120,55 Z" },
  { id: 77, name: "Yalova",     status: "default", path: "M 152,81 L 166,73 L 178,81 L 184,93 L 172,99 L 158,95 Z" },
  { id: 41, name: "Kocaeli",    status: "default", path: "M 166,73 L 174,57 L 194,55 L 218,61 L 222,77 L 210,91 L 196,93 L 184,93 L 178,81 Z" },
  { id: 54, name: "Sakarya",    status: "default", path: "M 194,55 L 232,49 L 252,57 L 256,73 L 248,87 L 232,93 L 222,83 L 210,91 L 222,77 L 218,61 Z" },
  { id: 81, name: "Düzce",      status: "default", path: "M 232,49 L 270,45 L 284,55 L 288,71 L 276,83 L 256,81 L 248,87 L 256,73 L 252,57 Z" },
  { id: 14, name: "Bolu",       status: "default", path: "M 270,45 L 314,41 L 326,55 L 322,75 L 306,87 L 284,87 L 276,83 L 288,71 L 284,55 Z" },
  { id: 67, name: "Zonguldak",  status: "default", path: "M 256,81 L 276,83 L 284,87 L 284,103 L 268,109 L 250,105 L 244,93 L 248,87 Z" },
  { id: 74, name: "Bartın",     status: "default", path: "M 284,87 L 306,87 L 316,79 L 328,83 L 330,97 L 316,107 L 296,109 L 284,103 Z" },
  { id: 78, name: "Karabük",    status: "default", path: "M 306,87 L 322,75 L 340,77 L 354,87 L 348,103 L 330,109 L 316,107 L 330,97 L 328,83 L 316,79 Z" },
  { id: 17, name: "Çanakkale",  status: "default", path: "M 23,79 L 34,91 L 46,107 L 42,133 L 30,157 L 18,163 L 8,147 L 10,123 L 18,103 Z" },
  { id: 10, name: "Balıkesir",  status: "default", path: "M 46,107 L 72,109 L 96,101 L 114,115 L 120,135 L 112,161 L 96,175 L 76,181 L 54,175 L 38,159 L 30,157 L 42,133 Z" },
  { id: 16, name: "Bursa",      status: "soon",    path: "M 114,115 L 120,75 L 136,83 L 152,81 L 158,95 L 172,99 L 184,93 L 196,93 L 210,91 L 222,83 L 232,93 L 240,113 L 228,131 L 208,143 L 184,149 L 160,147 L 136,141 L 120,135 Z" },
  { id: 11, name: "Bilecik",    status: "default", path: "M 232,93 L 248,87 L 256,81 L 250,105 L 244,121 L 232,129 L 228,131 L 240,113 Z" },
  { id: 43, name: "Kütahya",    status: "default", path: "M 136,141 L 160,147 L 184,149 L 196,167 L 192,191 L 176,207 L 154,211 L 132,205 L 118,187 L 116,165 Z" },
  // ─── EGE ────────────────────────────────────────────────────────────────────
  { id: 35, name: "İzmir",      status: "active",  path: "M 54,175 L 76,181 L 96,175 L 112,187 L 118,207 L 114,231 L 102,251 L 86,263 L 68,269 L 50,263 L 38,247 L 36,225 L 44,205 Z" },
  { id: 45, name: "Manisa",     status: "default", path: "M 96,175 L 112,161 L 128,155 L 148,155 L 164,163 L 176,179 L 184,199 L 192,191 L 196,167 L 184,149 L 160,147 L 136,141 L 120,135 L 112,161 L 96,175 Z" },
  { id:  9, name: "Aydın",      status: "default", path: "M 50,263 L 68,269 L 86,263 L 102,275 L 106,295 L 94,313 L 74,319 L 52,311 L 40,293 L 44,275 Z" },
  { id: 48, name: "Muğla",      status: "default", path: "M 52,311 L 74,319 L 94,313 L 108,329 L 112,357 L 100,383 L 82,399 L 60,403 L 40,393 L 30,371 L 34,347 L 44,329 Z" },
  { id: 20, name: "Denizli",    status: "default", path: "M 102,251 L 114,231 L 132,231 L 150,239 L 164,255 L 162,277 L 148,293 L 126,301 L 106,295 L 102,275 L 86,263 Z" },
  { id:  3, name: "Afyonkarahisar", status: "default", path: "M 128,155 L 148,155 L 164,163 L 186,165 L 200,179 L 202,203 L 192,217 L 174,225 L 154,223 L 136,213 L 124,197 L 118,175 Z" },
  { id: 64, name: "Uşak",       status: "default", path: "M 114,231 L 118,207 L 132,205 L 154,211 L 160,227 L 150,239 L 132,231 Z" },
  { id: 15, name: "Burdur",     status: "default", path: "M 126,301 L 148,293 L 162,277 L 176,285 L 182,307 L 176,329 L 158,341 L 136,341 L 118,327 L 112,305 Z" },
  { id: 32, name: "Isparta",    status: "default", path: "M 154,223 L 174,225 L 192,235 L 202,257 L 196,279 L 182,293 L 162,297 L 148,283 L 148,263 L 162,249 L 164,233 Z" },
  // ─── AKDENİZ ────────────────────────────────────────────────────────────────
  { id:  7, name: "Antalya",    status: "soon",    path: "M 118,327 L 136,341 L 158,341 L 176,329 L 196,331 L 214,345 L 220,369 L 214,397 L 200,419 L 176,437 L 150,447 L 124,449 L 100,441 L 82,421 L 74,397 L 78,371 L 90,351 L 104,337 Z" },
  { id: 33, name: "Mersin",     status: "default", path: "M 236,311 L 260,303 L 280,307 L 298,323 L 308,347 L 306,375 L 294,399 L 272,415 L 248,421 L 224,417 L 204,403 L 196,377 L 200,351 L 214,333 L 232,323 Z" },
  { id:  1, name: "Adana",      status: "soon",    path: "M 298,323 L 322,313 L 346,309 L 368,313 L 384,329 L 386,355 L 374,377 L 352,389 L 326,391 L 306,377 L 308,347 Z" },
  { id: 80, name: "Osmaniye",   status: "default", path: "M 368,313 L 388,305 L 406,311 L 414,329 L 406,349 L 390,361 L 374,357 L 374,377 L 384,355 Z" },
  { id: 31, name: "Hatay",      status: "default", path: "M 388,305 L 410,297 L 428,303 L 436,321 L 430,345 L 418,363 L 400,375 L 384,375 L 376,359 L 390,347 L 406,333 L 414,311 Z" },
  { id: 46, name: "Kahramanmaraş", status: "default", path: "M 346,265 L 372,261 L 396,267 L 410,283 L 410,305 L 388,305 L 374,293 L 352,277 L 344,261 Z" },
  { id: 79, name: "Kilis",      status: "default", path: "M 410,305 L 428,303 L 434,315 L 424,331 L 410,331 L 406,315 Z" },
  // ─── İÇ ANADOLU ─────────────────────────────────────────────────────────────
  { id:  6, name: "Ankara",     status: "active",  path: "M 278,115 L 322,111 L 358,115 L 378,131 L 382,157 L 372,183 L 352,199 L 326,207 L 298,207 L 272,199 L 256,181 L 252,155 L 260,133 Z" },
  { id: 26, name: "Eskişehir",  status: "default", path: "M 228,131 L 252,131 L 268,143 L 276,165 L 268,187 L 252,199 L 228,203 L 208,195 L 196,175 L 200,153 L 212,141 Z" },
  { id: 71, name: "Kırıkkale",  status: "default", path: "M 358,115 L 378,107 L 394,113 L 400,129 L 392,143 L 374,149 L 360,143 L 352,129 Z" },
  { id: 40, name: "Kırşehir",   status: "default", path: "M 374,149 L 392,143 L 412,147 L 424,163 L 420,183 L 404,195 L 384,197 L 370,183 L 368,165 Z" },
  { id: 66, name: "Yozgat",     status: "default", path: "M 394,113 L 424,109 L 454,113 L 472,127 L 474,151 L 462,169 L 440,177 L 416,177 L 400,163 L 400,143 L 392,125 Z" },
  { id: 68, name: "Aksaray",    status: "default", path: "M 326,207 L 352,199 L 372,203 L 384,219 L 380,241 L 362,253 L 338,255 L 318,243 L 314,221 Z" },
  { id: 50, name: "Nevşehir",   status: "default", path: "M 372,203 L 396,203 L 412,217 L 410,239 L 396,251 L 376,253 L 362,241 L 362,221 Z" },
  { id: 38, name: "Kayseri",    status: "default", path: "M 412,147 L 448,147 L 474,155 L 490,175 L 490,205 L 474,221 L 452,231 L 424,229 L 400,217 L 396,197 L 404,179 L 420,163 Z" },
  { id: 51, name: "Niğde",      status: "default", path: "M 338,255 L 362,253 L 376,265 L 376,291 L 360,307 L 336,311 L 316,299 L 310,277 L 318,259 Z" },
  { id: 42, name: "Konya",      status: "soon",    path: "M 196,191 L 228,203 L 252,199 L 272,199 L 298,207 L 326,207 L 338,221 L 336,251 L 318,267 L 300,283 L 278,291 L 254,289 L 228,279 L 206,261 L 192,237 L 194,211 Z" },
  { id: 70, name: "Karaman",    status: "default", path: "M 278,291 L 300,283 L 318,291 L 334,307 L 332,333 L 316,349 L 292,355 L 268,347 L 256,327 L 258,305 Z" },
  // ─── KARADENİZ ───────────────────────────────────────────────────────────────
  { id: 37, name: "Kastamonu",  status: "default", path: "M 326,55 L 370,47 L 408,43 L 426,55 L 422,73 L 408,85 L 384,91 L 354,91 L 340,79 L 340,65 Z" },
  { id: 57, name: "Sinop",      status: "default", path: "M 370,47 L 414,39 L 446,35 L 456,47 L 448,61 L 430,69 L 408,71 L 392,65 L 384,53 Z" },
  { id: 55, name: "Samsun",     status: "default", path: "M 414,39 L 462,31 L 502,27 L 516,39 L 510,57 L 494,69 L 468,75 L 444,73 L 430,63 L 448,49 Z" },
  { id: 18, name: "Çankırı",    status: "default", path: "M 354,91 L 384,91 L 408,85 L 422,99 L 418,121 L 400,133 L 378,135 L 356,127 L 348,109 Z" },
  { id: 19, name: "Çorum",      status: "default", path: "M 408,85 L 430,69 L 458,71 L 480,79 L 482,101 L 466,117 L 444,125 L 420,123 L 408,109 L 418,97 Z" },
  { id:  5, name: "Amasya",     status: "default", path: "M 458,71 L 494,69 L 510,79 L 510,99 L 496,111 L 472,117 L 450,113 L 440,99 L 448,81 Z" },
  { id: 60, name: "Tokat",      status: "default", path: "M 496,111 L 520,103 L 546,107 L 560,123 L 556,149 L 538,163 L 510,165 L 490,155 L 484,135 L 490,117 Z" },
  { id: 52, name: "Ordu",       status: "default", path: "M 510,57 L 544,47 L 570,51 L 580,65 L 572,83 L 550,93 L 524,91 L 510,77 Z" },
  { id: 28, name: "Giresun",    status: "default", path: "M 570,51 L 604,45 L 624,51 L 630,67 L 618,83 L 596,91 L 574,87 L 560,73 L 566,57 Z" },
  { id: 61, name: "Trabzon",    status: "soon",    path: "M 604,45 L 640,39 L 664,45 L 670,61 L 658,75 L 636,81 L 614,77 L 602,63 Z" },
  { id: 29, name: "Gümüşhane",  status: "default", path: "M 618,83 L 640,79 L 660,85 L 668,103 L 656,119 L 630,123 L 608,113 L 604,95 Z" },
  { id: 69, name: "Bayburt",    status: "default", path: "M 660,85 L 686,79 L 700,89 L 700,109 L 684,121 L 664,119 L 656,105 Z" },
  { id: 53, name: "Rize",       status: "default", path: "M 640,39 L 676,33 L 706,37 L 714,53 L 706,69 L 686,77 L 664,73 L 652,57 Z" },
  { id:  8, name: "Artvin",     status: "default", path: "M 706,37 L 740,29 L 762,35 L 766,53 L 752,67 L 730,71 L 710,65 L 706,51 Z" },
  { id: 75, name: "Ardahan",    status: "default", path: "M 740,29 L 776,21 L 802,27 L 808,47 L 796,63 L 770,67 L 750,61 L 744,43 Z" },
  { id: 36, name: "Kars",       status: "default", path: "M 776,21 L 816,15 L 846,21 L 854,43 L 844,65 L 820,75 L 796,71 L 784,51 Z" },
  // ─── DOĞU ANADOLU ───────────────────────────────────────────────────────────
  { id: 58, name: "Sivas",      status: "default", path: "M 490,155 L 524,149 L 556,149 L 580,161 L 596,181 L 592,213 L 572,235 L 542,247 L 510,247 L 482,233 L 470,209 L 472,181 L 484,163 Z" },
  { id: 24, name: "Erzincan",   status: "default", path: "M 596,137 L 628,129 L 658,133 L 676,149 L 672,173 L 652,187 L 624,189 L 600,177 L 592,157 Z" },
  { id: 25, name: "Erzurum",    status: "default", path: "M 658,133 L 700,123 L 742,123 L 776,131 L 798,151 L 796,181 L 778,201 L 748,211 L 714,209 L 686,197 L 666,179 L 660,155 Z" },
  { id: 44, name: "Malatya",    status: "default", path: "M 510,217 L 538,213 L 568,219 L 590,237 L 590,263 L 572,279 L 546,283 L 518,273 L 504,253 L 506,231 Z" },
  { id: 23, name: "Elazığ",     status: "default", path: "M 590,237 L 620,235 L 648,241 L 664,261 L 658,285 L 636,297 L 608,295 L 590,277 L 584,255 Z" },
  { id: 62, name: "Tunceli",    status: "default", path: "M 624,189 L 656,189 L 680,199 L 692,221 L 682,245 L 658,255 L 632,249 L 616,229 L 618,207 Z" },
  { id: 12, name: "Bingöl",     status: "default", path: "M 680,199 L 714,193 L 742,199 L 754,219 L 748,243 L 724,257 L 698,253 L 682,237 Z" },
  { id: 49, name: "Muş",        status: "default", path: "M 742,199 L 776,197 L 800,209 L 804,233 L 790,253 L 762,261 L 738,253 L 726,235 Z" },
  { id: 13, name: "Bitlis",     status: "default", path: "M 776,237 L 806,237 L 832,249 L 836,273 L 820,291 L 794,297 L 768,289 L 758,267 L 764,247 Z" },
  { id:  4, name: "Ağrı",       status: "default", path: "M 798,151 L 844,143 L 876,151 L 886,175 L 876,201 L 852,213 L 820,211 L 798,197 L 792,173 Z" },
  { id: 65, name: "Van",        status: "default", path: "M 806,237 L 844,227 L 878,233 L 898,255 L 896,289 L 878,313 L 852,327 L 820,325 L 796,309 L 784,285 L 786,259 L 800,243 Z" },
  { id: 76, name: "Iğdır",      status: "default", path: "M 876,151 L 900,151 L 900,177 L 882,187 L 862,183 L 854,165 Z" },
  { id: 30, name: "Hakkari",    status: "default", path: "M 820,325 L 854,327 L 876,341 L 878,367 L 862,385 L 834,391 L 808,381 L 796,361 L 798,337 Z" },
  // ─── GÜNEYDOĞU ANADOLU ──────────────────────────────────────────────────────
  { id: 27, name: "Gaziantep",  status: "soon",    path: "M 406,357 L 438,349 L 466,355 L 476,375 L 466,397 L 440,407 L 412,401 L 396,381 L 400,361 Z" },
  { id: 63, name: "Şanlıurfa",  status: "default", path: "M 466,355 L 504,345 L 542,349 L 564,365 L 568,395 L 554,421 L 524,437 L 490,441 L 458,433 L 436,413 L 432,385 L 446,363 Z" },
  { id:  2, name: "Adıyaman",   status: "default", path: "M 462,273 L 498,267 L 524,275 L 534,299 L 520,321 L 494,331 L 466,325 L 450,305 L 452,283 Z" },
  { id: 21, name: "Diyarbakır", status: "default", path: "M 566,259 L 606,253 L 640,261 L 660,283 L 656,315 L 632,337 L 598,343 L 566,335 L 546,313 L 546,285 Z" },
  { id: 47, name: "Mardin",     status: "default", path: "M 598,343 L 636,337 L 668,343 L 690,361 L 688,387 L 666,401 L 632,401 L 604,385 L 594,361 Z" },
  { id: 72, name: "Batman",     status: "default", path: "M 660,283 L 696,277 L 724,285 L 730,309 L 714,331 L 686,337 L 660,325 L 650,305 Z" },
  { id: 56, name: "Siirt",      status: "default", path: "M 724,285 L 758,281 L 784,293 L 786,319 L 770,339 L 744,345 L 718,335 L 710,311 Z" },
  { id: 73, name: "Şırnak",     status: "default", path: "M 770,339 L 800,333 L 832,339 L 848,359 L 842,383 L 820,395 L 790,393 L 768,375 L 764,351 Z" },
];

const statusColors: Record<Status, { fill: string; stroke: string; hover: string }> = {
  active:  { fill: "#8D9E5B", stroke: "#6B7A43", hover: "#7a8a4f" },
  soon:    { fill: "#c2ce9e", stroke: "#8D9E5B", hover: "#afc088" },
  default: { fill: "#e8ede0", stroke: "#b8c4a0", hover: "#d4dbc6" },
};

export function TurkeyMap() {
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);

  return (
    <div className="relative w-full select-none">
      <svg
        viewBox="0 0 900 530"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Türkiye il haritası"
      >
        {provinces.map((p) => {
          const c = statusColors[p.status];
          return (
            <path
              key={p.id}
              d={p.path}
              fill={c.fill}
              stroke={c.stroke}
              strokeWidth="1.2"
              strokeLinejoin="round"
              style={{ cursor: "pointer", transition: "fill 0.1s" }}
              onMouseEnter={(e) => {
                e.currentTarget.setAttribute("fill", c.hover);
                const svg = e.currentTarget.closest("svg") as SVGSVGElement;
                const pt = svg.createSVGPoint();
                pt.x = e.clientX;
                pt.y = e.clientY;
                const svgPt = pt.matrixTransform(svg.getScreenCTM()!.inverse());
                setTooltip({ name: p.name, x: svgPt.x, y: svgPt.y });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.setAttribute("fill", c.fill);
                setTooltip(null);
              }}
            >
              <title>{p.name}</title>
            </path>
          );
        })}

        {tooltip && (
          <g transform={`translate(${Math.min(tooltip.x + 10, 780)},${Math.max(tooltip.y - 30, 4)})`}>
            <rect rx="5" ry="5" width="130" height="24" fill="#2E3325" opacity="0.9" />
            <text x="9" y="16" fill="white" fontSize="12" fontWeight="600" fontFamily="Nunito, sans-serif">
              {tooltip.name}
            </text>
          </g>
        )}
      </svg>

      <div className="flex items-center justify-center gap-6 mt-4 text-xs font-semibold text-ink/60">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "#8D9E5B" }} />
          Aktif şehir
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "#c2ce9e" }} />
          Yakında
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm border inline-block" style={{ background: "#e8ede0", borderColor: "#b8c4a0" }} />
          Diğer iller
        </span>
      </div>
    </div>
  );
}
