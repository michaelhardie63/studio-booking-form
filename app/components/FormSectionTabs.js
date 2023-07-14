import React from 'react';
import Image from 'next/image';

const FormSectionTabs = ({ currentSection, setCurrentSection }) => {
    const formSections = ['Overview', 'Timings', 'Deliverables', 'Specifications', 'Text Content', 'Brand Drivers', 'Additional Details', 'Review'];

    return (
        <div className="w-2/5 ml-12 flex flex-col justify-start items-start mb-4">
            {formSections.map((section, index) => (
                <div className="flex flex-row gap-2 py-4" key={index}>
                    <div>
                        <div 
                            className="relative z-10 w-[40px] h-[40px] rounded-full border-solid border-4 border-primary-red bg-white"> 
                                {index <= currentSection 
                                ? <Image 
					                src="/crown.svg"
					                alt=""
					                className="object-contain"
					                width={30}
					                height={30}
				                />
                                : null}
                        </div>
                        <div 
                            className={`absolute z-2 ml-[20px] h-[40px] ${index <= currentSection - 1 ? "bg-primary-red w-[4px]" : null}`} 
                        />
                    </div>
                    <div
                        key={index}
                        className={`text-4 cursor-pointer mt-2 ${
                        index <= currentSection ? 'text-primary-red font-semibold' : 'text-gray-400'
                            }`}
                        onClick={() => setCurrentSection(index)}
                    >
                        {section}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FormSectionTabs;
