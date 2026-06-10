import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rescued.com.tr";
  const routes = [
    "",
    "/isletmeler",
    "/surpriz-paket-nedir",
    "/hakkimizda",
    "/surdurulebilirlik",
    "/sss",
    "/iletisim",
    "/kariyer",
    "/basin",
    "/yasal/gizlilik",
    "/yasal/cerez-politikasi",
    "/yasal/kullanim-kosullari",
    "/yasal/kvkk",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
