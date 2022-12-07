import React from 'react'
import { motion } from 'framer-motion'

export default function ImmageHover(props) {
    return (
        <motion.div
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={props.className}>
            <img src={props.src} alt="" />
        </motion.div>
    )
}
