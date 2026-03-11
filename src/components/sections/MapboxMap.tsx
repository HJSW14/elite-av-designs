"use client";

import { useEffect, useRef } from "react";
import { company } from "@/data/company";

interface MapboxMapProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function MapboxMap({ containerRef }: MapboxMapProps) {
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token || !containerRef.current) return;

    let map: { remove: () => void; on: (event: string, cb: () => void) => void } | null = null;

    import("mapbox-gl").then((mapboxgl) => {
      const MapboxGL = mapboxgl.default;
      MapboxGL.accessToken = token;

      if (!containerRef.current) return;

      map = new MapboxGL.Map({
        container: containerRef.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [company.coords.lng, company.coords.lat],
        zoom: 9.5,
        attributionControl: false,
        interactive: true,
      });

      mapRef.current = map;

      map.on("load", () => {
        if (!map) return;

        const mapInstance = map as unknown as {
          addSource: (id: string, source: object) => void;
          addLayer: (layer: object) => void;
        };

        // Add service radius circle
        mapInstance.addSource("service-area", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [company.coords.lng, company.coords.lat],
                },
                properties: {},
              },
            ],
          },
        });

        // Filled circle (service area)
        mapInstance.addLayer({
          id: "service-area-fill",
          type: "circle",
          source: "service-area",
          paint: {
            "circle-radius": {
              stops: [
                [7, 80],
                [9, 180],
                [11, 380],
                [13, 700],
              ],
            },
            "circle-color": "#3e9ad1",
            "circle-opacity": 0.08,
          },
        });

        // Border ring
        mapInstance.addLayer({
          id: "service-area-border",
          type: "circle",
          source: "service-area",
          paint: {
            "circle-radius": {
              stops: [
                [7, 80],
                [9, 180],
                [11, 380],
                [13, 700],
              ],
            },
            "circle-color": "transparent",
            "circle-stroke-width": 1.5,
            "circle-stroke-color": "#3e9ad1",
            "circle-stroke-opacity": 0.4,
          },
        });

        // Center pin
        const el = document.createElement("div");
        el.style.cssText = `
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #3e9ad1;
          border: 3px solid #6ab8e4;
          box-shadow: 0 0 0 6px rgba(62,154,209,0.15);
        `;

        new MapboxGL.Marker({ element: el })
          .setLngLat([company.coords.lng, company.coords.lat])
          .addTo(map as Parameters<typeof MapboxGL.Marker.prototype.addTo>[0]);
      });
    });

    return () => {
      if (map) map.remove();
    };
  }, [containerRef]);

  return null;
}
