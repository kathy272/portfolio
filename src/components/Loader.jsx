import { Html, useProgress } from "@react-three/drei";
import React from "react";
const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html 
        as ="div"
        center
        style={
            {display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}
        >
            <span className="canvas-loader"></span>
            <p
            style={{
                fontSize: 14,
                color: 'white',
                fontWeight: 800,
                marginTop: 40
            }}
            >{progress} % loaded</p>
        </Html>
    );
}
export default CanvasLoader;
export { CanvasLoader };
