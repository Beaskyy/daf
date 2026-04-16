import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://deafaccessfoundation.com";
  
  const pages = [
    "",
    "/about",
    "/contact",
    "/resources",
    "/partner",
    "/stories",
    "/team",
    "/programmes",
    "/impact",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}
