import "./carosselStyle.css"
import BenefitsCard from "../benefitsCard/benefitsCard";
import { motion } from 'framer-motion'

export default function Carossel({content}) {
    return(
        <motion.div animate={{x: 100}} className="carossel__container">
            {content.map((item) => (
                <BenefitsCard data={item} />
            ))}
        </motion.div>
    );
}