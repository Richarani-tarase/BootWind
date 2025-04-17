// components/UtilitySection.tsx
import React from "react";

interface UtilitySectionProps {
  id: string;
  title: string;
  description: string;
  code: string;
}

const UtilitySection: React.FC<UtilitySectionProps> = ({
  id,
  title,
  description,
  code,
}) => {
  return (
    <section
      id={id}
      className="mb-8 bg-gray-900 rounded-lg p-6  shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
      <div className="">
        {/* Description */}
        <div className="md:w-1/2 text-gray-300 mb-4 text-lg">
          {description}
        </div>

        {/* Code */}
        <div className="md:w-1/2 bg-extra rounded-lg p-4 text-sm overflow-x-auto h-72 ml-auto">
          <pre className="whitespace-pre-wrap text-gray-100">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default UtilitySection;
