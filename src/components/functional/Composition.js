import { useState } from "react";
import NavButton from "../UI/NavButton";
import { motion, AnimatePresence } from "framer-motion"

function Composition() {

    const slides = [
        {
            title: "2022 Mustang Shelby® GT500 ®",
            price: "Starting at 79,420$",
            seats: "Seating for 4",
            imgUrl: "/img/shelby.png"
        },
        {
            title: "2022 Mustang Mach1",
            price: "Starting at 56,270$ ",
            seats: "Seating for 4",
            imgUrl: "/img/mach1.png"
        },
        {
            title: "2022 Mustang Mach 1 Premium®",
            price: "Starting at 58,365$",
            seats: "Seating for 4",
            imgUrl: "/img/mach1prem.png"
        },
        {
            title: "2022 Mustang EcoBoost ® Fastback",
            price: "Starting at 27,470$",
            seats: "Seating for 2",
            imgUrl: "/img/fastback.png"
        },
        {
            title: "2022 Mustang EcoBoost® Premium",
            price: "Starting at 37,990$",
            seats: "Seating for 2",
            imgUrl: "/img/ecoboost.png"
        },]

    const [curentIndex, setCurentIndex] = useState(0)

    function togleActive(index) {
        if (index === curentIndex) {
            return "nav-btns__item-active"
        } else {
            return "nav-btns__item"
        }
    }

    const variants = {
        initial: {
            x: 200,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        exit: {
            x: -200,
            opacity: 0
        },
    }

    return (
        <AnimatePresence initial={false}>
            <div className="main__composition">
                <div
                    className="main__properties">
                    <motion.div
                        variants={variants}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        transition={{
                            x: { duration: 0.3 },
                            opacity: { duration: 0.3 }
                        }}
                        key={slides[curentIndex].title}
                        className="main__props">
                        <ul>
                            <li><span>{slides[curentIndex].title}</span></li>
                            <li><span>{slides[curentIndex].price}</span></li>
                            <li><span>{slides[curentIndex].seats}</span></li>
                        </ul>
                    </motion.div>
                </div>
                <div className="main__photo-slider">
                    <div className="main__car-photo">
                        <motion.img
                            variants={variants}
                            animate="animate"
                            initial="initial"
                            exit="exit"
                            transition={{
                                x: { duration: 0.3 },
                                opacity: { duration: 0.3 }
                            }}
                            key={slides[curentIndex].title}
                            src={slides[curentIndex].imgUrl} alt="ing" />
                    </div>
                    <div className="main__navigation navigation">
                        <div className="navigation__nav-btns nav-btns">
                            {slides.map((el, index) => (<NavButton key={el.title} className={togleActive(index)} onClick={() => setCurentIndex(index)} />))}
                        </div>
                        <div className="navigation__counter">
                            <span>{String(0) + String(curentIndex + 1)}</span><span>{String("/0") + String(slides.length)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatePresence >
    )
}

export default Composition;