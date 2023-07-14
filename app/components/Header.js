import React from 'react';
import Image from 'next/image';

const Header = () => {
  	return (
    	<header className="flex flex-col px-12 justify-between w-full mb-[50px] pt-8 sm:flex-row">
			<div className="flex flex-col">
				<Image 
            	src="/logo.svg"
            	alt="The Better Collective"
            	width={400}
            	height={80}
         	/>
         	<p className="text-xl font-semibold text-primary-red p-2">
					Design brief
				</p>
			</div>
			<div className="flex justify-start sm:justify-center items-center">
				<button
					className="px-4 py-2 bg-primary-red text-white rounded"
				>
					Need help?
				</button>
			</div>
    </header>
  )
}

export default Header;
