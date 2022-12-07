import { useState } from "react";
import NavButton from "../UI/NavButton";
import { motion, AnimatePresence } from "framer-motion"

function Composition() {

    // TODO: Данные хранятся локально в массиве slides текст и адрес изображения
    // TODO: (Переместить данные на БД сервера)
    // TODO: Data is stored locally in the slides array text and image address
    // TODO: (Move the data to the server database)
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
        }
    ]

    // ? Состояние изображения по умолчанию индекс = 0 из массива slides доостается информация
    // ? Default image state index = 0 from the slides array
    const [curentIndex, setCurentIndex] = useState(0)

    // ? Функция для определения активной кнопки в зависимости от индекса отображаемой информации
    // ? Function to determine the active button depending on the index of the displayed information
    function togleActive(index) {
        if (index === curentIndex) {
            return "nav-btns__item-active"
        } else {
            return "nav-btns__item"
        }
    }

    // ? (Варианты) или те же пропсы анимации
    // ? (Options) or the same animation props
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
        // ? Блок обернут в компонент AnimatePresence для отключения анимации при инициализации компонентов
        // ? The block is wrapped in the AnimatePresence component to disable animation during component initialization
        // initial={false}
        <AnimatePresence>
            <div className="main__composition">
                <div
                    className="main__properties">
                    {/* ? Блок motion. для анимации с пропсами из variants и конфигурации transition */}
                    {/* ? Block motion. for animation with props from variants and transitions configuration */}
                    <motion.div
                        variants={variants}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        transition={{
                            x: { duration: 0.6 },
                            opacity: { duration: 0.6 }
                        }}
                        key={slides[curentIndex].title}
                        // ? Информация для слайда достается из маccива по текущему индексу в состоянии curentIndex компонента
                        // ? The information for the slide is taken from the array by the current index in the curentIndex state of the component
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
                        {/* ? Блок motion. включает анимацию только для уникальных(пересозданных компонентах) => нжен ключ key для запуска анимации*/}
                        {/* ? The motion. block enables animation only for unique (recreated components) => must have key to start animation */}
                        <motion.img
                            variants={variants}
                            animate="animate"
                            initial="initial"
                            exit="exit"
                            transition={{
                                x: { duration: 0.8 },
                                opacity: { duration: 0.8 }
                            }}
                            key={slides[curentIndex].title}
                            src={slides[curentIndex].imgUrl} alt="ing" />
                    </div>
                    <div className="main__navigation navigation">
                        <div className="navigation__nav-btns nav-btns">
                            {/* ? Создается соответствующее числу элементов в массиве количество кнопок состояние определяется по текущему индексу, так же индекс служит для переключения состояния(обязателел вызов через стрелочную или иную функцию не напрямую) */}
                            {/* ? The number of buttons corresponding to the number of elements in the array is created, the state is determined by the current index, as well as the index serves to switch the state (mandatory call through an arrow or other function not directly) */}
                            {slides.map((el, index) => (<NavButton key={el.title} className={togleActive(index)} onClick={() => setCurentIndex(index)} />))}
                        </div>
                        <div className="navigation__counter">
                            {/* ? Преобразование типов для отображения номеров слайдов */}
                            {/* ? Type conversion to display slide numbers */}
                            <span>{String(0) + String(curentIndex + 1)}</span><span>{String("/0") + String(slides.length)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatePresence >
    )
}

export default Composition;