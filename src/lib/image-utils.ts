// Image optimization utilities for better performance and SEO

/**
 * Generate optimized Unsplash image URLs with proper parameters
 * @param photoId - The Unsplash photo ID
 * @param width - Desired width
 * @param quality - Quality (1-100)
 * @returns Optimized image URL
 */
export function getUnsplashUrl(
  photoId: string,
  width: number = 1200,
  quality: number = 80
): string {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&q=${quality}&auto=format&fit=crop`;
}

/**
 * Generate responsive srcset for Unsplash images
 * @param photoId - The Unsplash photo ID
 * @returns srcset string with multiple widths
 */
export function getUnsplashSrcSet(photoId: string): string {
  const widths = [640, 768, 1024, 1280, 1536, 1920];
  return widths
    .map((w) => `${getUnsplashUrl(photoId, w, 80)} ${w}w`)
    .join(", ");
}

/**
 * Common image sizes for responsive design
 */
export const imageSizes = {
  hero: "(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px",
  card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px",
  thumbnail: "(max-width: 768px) 50vw, 300px",
  full: "100vw",
};

/**
 * Alt text templates for better image SEO
 */
export function generateAltText(context: {
  type: "hero" | "service" | "area" | "blog";
  subject: string;
  location?: string;
}): string {
  const { type, subject, location } = context;
  const loc = location || "Sacramento area";

  const templates = {
    hero: `${subject} towing and roadside assistance in ${loc}`,
    service: `Professional ${subject} by Next Level Towing`,
    area: `${subject} - Towing and roadside assistance in ${loc}`,
    blog: `${subject} - Next Level Towing guide`,
  };

  return templates[type];
}
