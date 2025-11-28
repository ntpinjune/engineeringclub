"use client";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
    return (
        <div className="cursor-wrapper hidden md:block">
            <AnimatedCursor
                color="59, 130, 246" // Blue color (Tailwind blue-500)
                innerSize={12}
                outerSize={35}
                innerScale={0.7}
                outerScale={1.5}
                outerAlpha={0.3}
                trailingSpeed={8}
                clickables={[
                    "a",
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    "label[for]",
                    "select",
                    "textarea",
                    "button",
                    ".link",
                    ".clickable",
                ]}
            />
        </div>
    );
};

export default CustomCursor;
