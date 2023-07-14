import { useState } from 'react';

const BrandDrivers = ({ formData, onChange }) => {
    const { brandDrivers } = formData;
    const [selectedBrandDrivers, setSelectedBrandDrivers] = useState(brandDrivers);

    const handleBrandDriverChange = (driver) => {
        const updatedBrandDrivers = selectedBrandDrivers.includes(driver)
        ? selectedBrandDrivers.filter((item) => item !== driver)
        : [...selectedBrandDrivers, driver];

        setSelectedBrandDrivers(updatedBrandDrivers);
        onChange('brandDrivers', updatedBrandDrivers);
    };

    return (
        <div className="flex flex-col text-primary-red">
            <h2 className="text-4xl font-bold mb-5">What are the brand drivers?</h2>
            <div className="flex flex-col mb-4">
                <h3 className="font-semibold text-2xl">Medibank Live Better</h3>
            
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Responds to individual health needs, ')}
                        onChange={() => handleBrandDriverChange('Responds to individual health needs, ')}
                    />
                        Responds to individual health needs
                </label>
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Is genuine, ')}
                        onChange={() => handleBrandDriverChange('Is genuine, ')}
                    />
                        Is genuine
                </label>
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Helps me achieve my health goals, ')}
                        onChange={() => handleBrandDriverChange('Helps me achieve my health goals, ')}
                    />
                        Helps me achieve my health goals
                </label>
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Helps me to understand all my health options, ')}
                        onChange={() => handleBrandDriverChange('Helps me to understand all my health options, ')}
                    />
                        Helps me to understand all my health options
                </label>
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Supports the individual and communities, ')}
                        onChange={() => handleBrandDriverChange('Supports the individual and communities, ')}
                    />
                        Supports the individual and communities
                </label>
            </div>
            <div className="flex flex-col mb-4">
                <h3 className="font-semibold text-2xl">Better health support</h3>
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Reduces the complexity of PHI/reduces the stress of dealing with the health system, ')}
                        onChange={() => handleBrandDriverChange('Reduces the complexity of PHI/reduces the stress of dealing with the health system, ')}
                    />
                        Reduces complexity of PHI and stress of dealing with the health system
                </label>
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Is easy to deal with, ')}
                        onChange={() => handleBrandDriverChange('Is easy to deal with, ')}
                    />
                        Is easy to deal with
                </label>
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Makes it easy to access the services I want, ')}
                        onChange={() => handleBrandDriverChange('Makes it easy to access the services I want, ')}
                    />
                        Makes it easy to access the services I want
                </label>
            </div>
            <div className="flex flex-col mb-4">
                <h3 className="font-semibold text-2xl">Better health cover</h3>
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Has products that suit my needs, ')}
                        onChange={() => handleBrandDriverChange('Has products that suit my needs, ')}
                    />
                        Has products that suit my needs
                </label>
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Helps you make the most of PHI/health products and services, ')}
                        onChange={() => handleBrandDriverChange('Helps you make the most of PHI/health products and services, ')}
                    />
                        Helps you make the most of PHI/health products and services
                </label>
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Makes it more affordable to take care of my health, ')}
                        onChange={() => handleBrandDriverChange('Makes it more affordable to take care of my health, ')}
                    />
                        Makes it more affordable to take care of my health
                </label>
                <label className="flex flex-row items-center pr-4 text-black">
                    <input
                        type="checkbox"
                        checked={selectedBrandDrivers.includes('Alleviates financial stress for me and my family, ')}
                        onChange={() => handleBrandDriverChange('Alleviates financial stress for me and my family, ')}
                    />
                        Alleviates financial stress for me and my family
                </label>
            </div>
        </div>
    );
};

export default BrandDrivers;
