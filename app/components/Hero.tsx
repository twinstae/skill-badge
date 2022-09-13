import React from 'react';

function Hero({ children }: { children: React.ReactNode }) {
	return (
		<div className="hero border-primary border-4 rounded-lg h-48">
			<div className="hero-content text-center">
				<div>{children}</div>
			</div>
		</div>
	);
}

export default Hero;
