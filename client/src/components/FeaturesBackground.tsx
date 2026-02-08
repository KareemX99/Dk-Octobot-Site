import { useEffect, useState } from "react";

export default function FeaturesBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-[#001524]">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#001524] via-[#083D77]/20 to-[#001524]" />

            {/* Animated Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#083D77]/30 blur-[120px] animate-pulse"
                style={{ animationDuration: '8s' }} />

            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#4CC9F0]/20 blur-[120px] animate-pulse"
                style={{ animationDuration: '10s', animationDelay: '1s' }} />

            <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-[#4682B4]/20 blur-[100px] animate-pulse"
                style={{ animationDuration: '12s', animationDelay: '2s' }} />

            {/* Interactive Mouse Follower Orb */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#4CC9F0]/10 to-[#083D77]/10 blur-[100px] transition-transform duration-1000 ease-out will-change-transform"
                style={{
                    transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
                }}
            />

            {/* Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#4CC9F0 1px, transparent 1px), linear-gradient(to right, #4CC9F0 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                }}
            />

            {/* Noise Texture for Texture */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
        </div>
    );
}
