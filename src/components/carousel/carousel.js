import "./carosselStyle.css"
import { useMeasure } from "@uidotdev/usehooks";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";

export default function Carossel({children}) {

    let [ref, {width}] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect ( () => {
        let controls;
        let finalPostion = - width / 2 - 24;

        controls = animate(xTranslation, [0, finalPostion], {
            ease: 'linear',
            duration: 120,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        });

        return controls.stop;

    }, [xTranslation, width])

    return(
        <div className="carousel">
            <div className="carousel__container">
                <motion.div className="carousel__itens" ref={ref} style={{x: xTranslation}}>
                   {children}
                </motion.div>
            </div>
        </div>
    );
}