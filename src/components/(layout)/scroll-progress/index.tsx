"use client";

import { useEffect, useState } from "react";
import { Progress } from "../../ui/progress";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollableHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const currentProgress =
                scrollableHeight > 0
                    ? (window.scrollY / scrollableHeight) * 100
                    : 0;

            setProgress(currentProgress);
        };

        updateProgress();

        window.addEventListener("scroll", updateProgress, {
            passive: true,
        });

        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div className="fixed right-4 top-1/2 z-50 -translate-y-1/2">
            <Progress
                value={progress}
                className="h-50 w-2"
            />
        </div>
    );
}