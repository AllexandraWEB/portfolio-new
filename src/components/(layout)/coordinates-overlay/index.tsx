"use client";

import { useIsMobile } from "@/src/hooks/use-mobile";
import { useState, useEffect } from "react";

const PLOVDIV_LAT = 42.1354;
const PLOVDIV_LON = 24.7453;

export default function CoordinatesOverlay() {
    const isMobile = useIsMobile();
    const [time, setTime] = useState("");
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [temperature, setTemperature] = useState<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setCoordinates({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Intl.DateTimeFormat("en-GB", {
                    timeZone: "Europe/Sofia",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                }).format(new Date()),
            );
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${PLOVDIV_LAT}&longitude=${PLOVDIV_LON}&current=temperature_2m&temperature_unit=celsius&timezone=Europe%2FSofia`,
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch weather");
                }

                const data = await response.json();

                setTemperature(Math.round(data.current.temperature_2m));
            } catch (error) {
                console.error("Failed to fetch Plovdiv weather:", error);
            }
        };

        fetchWeather();

        // Update weather every 10 minutes
        const interval = setInterval(fetchWeather, 10 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 bottom-5 z-50"
        >
            <div
                className={
                    isMobile
                        ? "mx-auto grid h-10 grid-cols-4 px-4"
                        : "mx-auto grid h-10 max-w-360 grid-cols-4"
                }
            >
                {/* Column 1 */}
                <div className="flex items-center gap-8">
                    <span>LINKEDIN</span>
                    <span>GITHUB</span>
                </div>

                {/* Column 2 */}
                <div />

                {/* Column 3 */}
                <div className="flex items-center gap-4">
                    <span>{String(coordinates.x).padStart(4, "0")} X</span>
                    <span>{String(coordinates.y).padStart(4, "0")} Y</span>
                </div>

                {/* Column 4 */}
                <div className="flex items-center">
                    <span>GMT +3 PLV {time} {" "}
                        {temperature !== null && `${temperature}°C`}</span>
                </div>
            </div>
        </div>
    );
}