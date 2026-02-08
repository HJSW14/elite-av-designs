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
  type: "hero" | "service" | "project" | "brand" | "blog";
  subject: string;
  location?: string;
}): string {
  const { type, subject, location } = context;
  const loc = location || "Denver metro area";

  const templates = {
    hero: `${subject} home theater and smart home installation in ${loc}`,
    service: `Professional ${subject} installation by Elite AV Designs`,
    project: `${subject} - Custom home theater and AV installation in ${loc}`,
    brand: `${subject} authorized dealer and installer in ${loc}`,
    blog: `${subject} - Elite AV Designs guide`,
  };

  return templates[type];
}
