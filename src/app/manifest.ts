import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next Level Towing",
    short_name: "NL Tow",
    description:
      "24/7 towing and roadside assistance across Sacramento, Elk Grove, Rancho Cordova, Folsom, and Roseville.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
  };
}
