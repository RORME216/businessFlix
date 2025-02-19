import "./beneficioBannerStyle.css"
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function BeneficioBanner({icon, text, index, inView, hasHappen}) {
    

    return (
        <motion.div className="beneficio-banner__container"
            key={index}
            initial={{ scale:0.8, opacity: 0 }}
            animate={{ scale: (inView || hasHappen) ? 1 : 0.8 , opacity: (inView || hasHappen) ? 1 : 0}}
            transition={{duration: 1, delay: index/10 + 0.5}}
        >
                {icon}
            <p className="beneficio-banner__text">{text}</p>
        </motion.div>
    );
}