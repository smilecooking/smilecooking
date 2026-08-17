import type { MetadataRoute } from "next";
import { lessonCalendar } from "./monthly-data";

export const dynamic = "force-static";

const origin = "https://smilecooking.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ["/", 1, "weekly"],
    ["/guide", 0.85, "monthly"],
    ["/lessons", 0.9, "weekly"],
    [lessonCalendar.current.href, 0.95, "weekly"],
    [lessonCalendar.next.href, 0.9, "weekly"],
    ["/lessons/oyako", 0.8, "monthly"],
    ["/lessons/shogakusei", 0.8, "monthly"],
    ["/lessons/oyatsu", 0.8, "monthly"],
    ["/lessons/kinenbi", 0.65, "monthly"],
    ["/kodawari", 0.75, "monthly"],
  ] as const;

  return pages.map(([path, priority, changeFrequency]) => ({
    url: `${origin}${path}`,
    lastModified: new Date(lessonCalendar.lastUpdated),
    changeFrequency,
    priority,
  }));
}
