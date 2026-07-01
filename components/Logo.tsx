"use client";

interface LogoProps {
  variant?: "dark" | "light";
  size?: number;
}

export default function Logo({ variant = "dark", size = 60 }: LogoProps) {
  const color = variant === "light" ? "#ffffff" : "#000000";
  const peach = "#ff6c78";

  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* N letter */}
      <line x1="18" y1="10" x2="18" y2="70" stroke={color} strokeWidth="1.5"/>
      <line x1="18" y1="10" x2="45" y2="60" stroke={color} strokeWidth="1.5"/>
      <line x1="45" y1="10" x2="45" y2="70" stroke={color} strokeWidth="1.5"/>
      {/* S curve (circle + S shape) */}
      <circle cx="60" cy="45" r="28" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M48 32 Q72 32 72 45 Q72 58 48 58" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M72 45 Q72 20 55 18" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M48 58 Q30 72 48 72" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Peach nail drop */}
      <circle cx="68" cy="58" r="5" fill={peach}/>
      {/* Wordmark */}
      <text x="50" y="100" textAnchor="middle" fontSize="13" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fill={color} letterSpacing="1">
        NailSavvy
      </text>
    </svg>
  );
}
