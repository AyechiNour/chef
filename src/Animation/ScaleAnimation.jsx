import React from 'react'
import { motion, useInView } from "framer-motion"
import { useRef } from 'react'

export default function ScaleAnimation({ children }) {
    const option = useRef(null);
    const isInView = useInView(option, { once: true });
    return (
        <motion.div
            ref={option}
            style={{
                transform: isInView ? "scale(1)" : "scale(0)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
            {children}
        </motion.div>
    )
}