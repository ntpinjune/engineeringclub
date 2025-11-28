declare module 'react-animated-cursor' {
    import React from 'react';

    interface AnimatedCursorProps {
        color?: string;
        innerSize?: number;
        outerSize?: number;
        innerScale?: number;
        outerScale?: number;
        outerAlpha?: number;
        hasBlendMode?: boolean;
        innerStyle?: object;
        outerStyle?: object;
        clickables?: (string | object)[];
        trailingSpeed?: number;
    }

    const AnimatedCursor: React.FC<AnimatedCursorProps>;
    export default AnimatedCursor;
}
