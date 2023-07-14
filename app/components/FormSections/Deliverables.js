import React from 'react';

const Deliverables = ({ formData, onChange }) => {
    const { printDeliverables = [], digitalDeliverables = [] } = formData;

    const handlePrintDeliverableChange = (deliverable, isChecked) => {
        const updatedPrintDeliverables = isChecked
        ? [...printDeliverables, deliverable]
        : printDeliverables.filter((item) => item !== deliverable);
        onChange('printDeliverables', updatedPrintDeliverables);
    };

    const handleDigitalDeliverableChange = (deliverable, isChecked) => {
        const updatedDigitalDeliverables = isChecked
        ? [...digitalDeliverables, deliverable]
        : digitalDeliverables.filter((item) => item !== deliverable);
        onChange('digitalDeliverables', updatedDigitalDeliverables);
    };

    return (
        <div className="flex flex-col text-primary-red">
            <h2 className="text-4xl font-bold mb-5">What assets would you like?</h2>
                <div className='flex flex-col mb-4'>
                    <h3 className="font-bold text-2xl">Print:</h3>
                    <div className="flex flex-col">
                        <div className="flex flex-wrap">
                            <label className="flex flex-wwrap items-center pr-4 text-black">
                                <input
                                    type="checkbox"
                                    required
                                    checked={printDeliverables.includes('DM')}
                                    onChange={(e) => handlePrintDeliverableChange('DM', e.target.checked)}
                                />
                                    DM
                            </label>
                            <label className="flex flex-wrap items-center pr-4 text-black">
                                <input
                                    type="checkbox"
                                    checked={printDeliverables.includes('Brochure')}
                                    onChange={(e) => handlePrintDeliverableChange('Brochure', e.target.checked)}
                                />
                                    Brochure
                            </label>
                            <label className="flex flex-wrap items-center pr-4 text-black">
                                <input
                                    type="checkbox"
                                    checked={printDeliverables.includes('Flyer')}
                                    onChange={(e) => handlePrintDeliverableChange('Flyer', e.target.checked)}
                                />
                                    Flyer
                            </label>
                            <label className="flex flex-wrap items-center pr-4 text-black">
                                <input
                                    type="checkbox"
                                    checked={printDeliverables.includes('Poster')}
                                    onChange={(e) => handlePrintDeliverableChange('Poster', e.target.checked)}
                                />
                                    Poster
                            </label>
                            <label className="flex flex-wrap items-center pr-4 text-black">
                                <input
                                    type="checkbox"
                                    checked={printDeliverables.includes('PrintAd')}
                                    onChange={(e) => handlePrintDeliverableChange('PrintAd', e.target.checked)}
                                />
                                    Print Ad
                            </label>
                            <label className="flex flex-wrap items-center pr-4 text-black">
                                <input
                                    type="checkbox"
                                    checked={printDeliverables.includes('BannerSignage')}
                                    onChange={(e) => handlePrintDeliverableChange('BannerSignage', e.target.checked)}
                                />
                                    Banner / Signage
                            </label>
                            <label className="flex flex-wrap items-center pr-4 text-black">
                                <input
                                    type="checkbox"
                                    checked={printDeliverables.includes('CreativeConcepts')}
                                    onChange={(e) => handlePrintDeliverableChange('CreativeConcepts', e.target.checked)}
                                />
                                    Creative Concepts
                            </label>
                            <label className="flex flex-wrap items-center pr-4 text-black">
                                <input
                                    type="checkbox"
                                    checked={printDeliverables.includes('RetouchResize')}
                                    onChange={(e) => handlePrintDeliverableChange('RetouchResize', e.target.checked)}
                                />
                                    Retouch / Resize
                            </label>
                            <label className="flex flex-wrap items-center pr-4 text-black">
                                <input
                                    type="checkbox"
                                    checked={printDeliverables.includes('Other')}
                                    onChange={(e) => handlePrintDeliverableChange('Other', e.target.checked)}
                                />
                                    Other
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-bold text-2xl">Digital:</h3>
                        <div className="flex flex-col">
                            <div className="flex flex-wrap">
                        <label className="flex flex-wrap items-center pr-4 text-black">
                            <input
                                type="checkbox"
                                checked={digitalDeliverables.includes('aemAsset')}
                                onChange={(e) => handleDigitalDeliverableChange('aemAsset', e.target.checked)}
                            />
                                AEM Asset
                        </label>
                        <label className="flex flex-wrap items-center pr-4 text-black">
                            <input
                                type="checkbox"
                                checked={digitalDeliverables.includes('socialAnimated')}
                                onChange={(e) => handleDigitalDeliverableChange('socialAnimated', e.target.checked)}
                            />
                                Social Animated
                        </label>
                        <label className="flex flex-wrap items-center pr-4 text-black">
                            <input
                                type="checkbox"
                                checked={digitalDeliverables.includes('socialStatic')}
                                onChange={(e) => handleDigitalDeliverableChange('socialStatic', e.target.checked)}
                            />
                                Social Static
                        </label>
                        <label className="flex flex-wrap items-center pr-4 text-black">
                            <input
                                type="checkbox"
                                checked={digitalDeliverables.includes('digitalDisplayBanners')}
                                onChange={(e) => handleDigitalDeliverableChange('digitalDisplayBanners', e.target.checked)}
                            />
                                Digital Display Banners
                        </label>
                        
                        <label className="flex flex-wrap items-center pr-4 text-black">
                            <input
                                type="checkbox"
                                checked={digitalDeliverables.includes('digitalPOS')}
                                onChange={(e) => handleDigitalDeliverableChange('digitalPOS', e.target.checked)}
                            />
                                Digital POS
                        </label>
                        <label className="flex flex-wrap items-center pr-4 text-black">
                            <input
                                type="checkbox"
                                checked={digitalDeliverables.includes('webpageDesign')}
                                onChange={(e) => handleDigitalDeliverableChange('webpageDesign', e.target.checked)}
                            />
                                Webpage Design
                        </label>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deliverables;
