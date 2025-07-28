import React from "react";

interface FrostedGlassCardProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	hover?: boolean;
}

const FrostedGlassCard: React.FC<FrostedGlassCardProps> = ({ 
	children, 
	className = "", 
	onClick,
	hover = true 
}) => {
	const baseClasses = "bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl";
	const hoverClasses = hover ? "hover:bg-white/20 hover:shadow-3xl transition-all duration-300" : "";
	const clickClasses = onClick ? "cursor-pointer" : "";
	
	return (
		<div 
			className={`${baseClasses} ${hoverClasses} ${clickClasses} ${className}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default FrostedGlassCard; 