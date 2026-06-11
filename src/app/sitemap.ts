import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rescued.com.tr";
  const routes = [
    "",
    "/isletmeler",
    "/surpriz-paket-nedir",
    "/hakkimizda",
    "/hakkimizda/hikayemiz",
    "/hakkimizda/etki-raporu",
    "/hakkimizda/nerelerdeyiz",
    "/hakkimizda/ekip",
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

  const trEntries = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const enEntries = routes.map((route) => ({
    url: `${base}/en${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 0.9 : 0.7,
  }));

  return [...trEntries, ...enEntries];
}
