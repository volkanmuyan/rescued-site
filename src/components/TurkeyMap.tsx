"use client";

import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { cities } = require("turkey-map-react/lib/data") as { cities: City[] };

type Status = "active" | "soon" | "default";

interface City {
  id: string;
  plateNumber: number;
  name: string;
  path: string;
}

const ACTIVE = new Set([34, 6, 35]);          // İstanbul, Ankara, İzmir
const SOON   = new Set([16, 7, 1, 61, 42, 27]); // Bursa, Antalya, Adana, Trabzon, Konya, Gaziantep

function getStatus(plateNumber: number): Status {
  if (ACTIVE.has(plateNumber)) return "active";
  if (SOON.has(plateNumber))   return "soon";
  return "default";
}

const COLOR: Record<Status, { fill: string; hover: string; stroke: string }> = {
  active:  { fill: "#8D9E5B", hover: "#7a8a4f", stroke: "#6B7A43" },
  soon:    { fill: "#c2ce9e", hover: "#afc088", stroke: "#8D9E5B" },
  default: { fill: "#edf0e8", hover: "#d8dece", stroke: "#c0c8b0" },
};

export function TurkeyMap() {
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);

  return (
    <div className="relative w-full select-none">
      <svg
        viewBox="22 144 1007 444"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Türkiye il haritası"
      >
        {cities.map((city: City) => {
          const status = getStatus(city.plateNumber);
          const c = COLOR[status];
          return (
            <path
              key={city.id}
              d={city.path}
              fill={c.fill}
              stroke={c.stroke}
              strokeWidth="0.8"
              strokeLinejoin="round"
              style={{ cursor: "pointer", transition: "fill 0.12s" }}
              onMouseEnter={(e) => {
                e.currentTarget.setAttribute("fill", c.hover);
                const svg = e.currentTarget.closest("svg") as SVGSVGElement;
                const pt = svg.createSVGPoint();
                pt.x = e.clientX;
                pt.y = e.clientY;
                const svgPt = pt.matrixTransform(svg.getScreenCTM()!.inverse());
                setTooltip({ name: city.name, x: svgPt.x, y: svgPt.y });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.setAttribute("fill", c.fill);
                setTooltip(null);
              }}
            >
              <title>{city.name}</title>
            </path>
          );
        })}

        {tooltip && (
          <g transform={`translate(${Math.min(tooltip.x + 12, 950)},${Math.max(tooltip.y - 32, 148)})`}>
            <rect rx="5" ry="5" width="140" height="26" fill="#2E3325" opacity="0.92" />
            <text x="10" y="18" fill="white" fontSize="13" fontWeight="700" fontFamily="Nunito, sans-serif">
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
          <span className="w-3 h-3 rounded-sm border inline-block" style={{ background: "#edf0e8", borderColor: "#c0c8b0" }} />
          Diğer iller
        </span>
      </div>
    </div>
  );
}
