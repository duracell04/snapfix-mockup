import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export const Logo = ({ className = "", variant = "default" }: LogoProps) => {
  const color = variant === "white" ? "currentColor" : "hsl(var(--primary))";
  
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Snap'n'Fix logo"
      >
        {/* Lens ring */}
        <circle 
          cx="16" 
          cy="16" 
          r="11" 
          stroke={color} 
          strokeWidth="2" 
          fill="none"
        />
        <circle 
          cx="16" 
          cy="16" 
          r="6" 
          stroke={color} 
          strokeWidth="1.5" 
          fill="none"
        />
        {/* Hammer/wrench icon */}
        <path 
          d="M22 10L24 8M24 8L26 10M24 8L20 12" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className={`text-xl font-bold ${variant === "white" ? "text-white" : "text-foreground"}`}>
        Snap'n'Fix
      </span>
    </Link>
  );
};
