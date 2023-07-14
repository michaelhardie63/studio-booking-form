import "@/styles/styles.css";

const TextContent = ({ formData, onChange }) => {
    const { headline, subHeading, bodyCopy, cta, terms } = formData;

    const handleFieldChange = (field, value) => {
        onChange(field, value);
    };

    return (
        <div className="flex flex-col text-primary-red">
            <h2 className="text-4xl font-bold mb-5">What text are we including?</h2>
            <div className="flex flex-col">
                <label className="flex flex-col mb-4">
                    Headline:
                    <input
                        type="text"
                        value={headline}
                        placeholder="Your incredible headline..."
                        required
                        onChange={(e) => handleFieldChange('headline', e.target.value)}
                    />
                </label>

                <label className="flex flex-col mb-4">
                    Sub-heading
                    <input
                        type="text"
                        value={subHeading}
                        placeholder="Your witty sub-heading..."
                        onChange={(e) => handleFieldChange('subHeading', e.target.value)}
                    />
                </label>

                <label className="flex flex-col mb-4">
                    Body copy:
                    <textarea
                        type="text"
                        className="h-[200px]"
                        value={bodyCopy}
                        placeholder="Your engaging body copy..."
                        onChange={(e) => handleFieldChange('bodyCopy', e.target.value)}
                    />
                </label>

                <label className="flex flex-col mb-4">
                    CTA:
                    <input
                        type="text"
                        className="w-[180px]"
                        value={cta}
                        placeholder="e.g. Find out more"
                        onChange={(e) => handleFieldChange('cta', e.target.value)}
                    />
                </label>

                <label className="flex flex-col mb-4">
                    Terms and conditions:
                    <textarea
                        type="text"
                        className="h-[100px]"
                        value={terms}
                        placeholder="Write your terms and conditions here..."
                        onChange={(e) => handleFieldChange('terms', e.target.value)}
                    />
                </label>
            </div>
        </div>
    );
}

export default TextContent;
