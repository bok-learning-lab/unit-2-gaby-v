"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Student } from "@/lib/sample-students";

mapboxgl.accessToken =
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.test";

interface MapProps {
  students: Student[];
  onPinClick: (student: Student) => void;
}

export function Map({ students, onPinClick }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-95.7129, 37.0902], // Center of US
      zoom: 3.5,
    });

    // Add navigation control
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => {
      map.current?.remove();
    };
  }, []);

  // Update markers when students change
  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Add new markers
    students.forEach((student) => {
      const el = document.createElement("div");
      el.className =
        "w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer text-white font-bold text-sm hover:bg-blue-600 transition-colors";
      el.textContent = "📍";

      const marker = new mapboxgl.Marker(el)
        .setLngLat([student.lng, student.lat])
        .addTo(map.current!);

      el.addEventListener("click", () => {
        setSelectedStudent(student);
        onPinClick(student);
      });

      // Show tooltip on hover
      el.addEventListener("mouseenter", () => {
        const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
          .setHTML(`<div class="font-semibold">${student.name}</div><div class="text-sm text-gray-600">${student.hometown}</div>`)
          .addTo(map.current!);

        el.addEventListener(
          "mouseleave",
          () => popup.remove(),
          { once: true }
        );
      });

      markersRef.current.push(marker);
    });
  }, [students, onPinClick]);

  return (
    <div ref={mapContainer} className="w-full h-full" />
  );
}
