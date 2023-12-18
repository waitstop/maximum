import Phone from "@/components/Phone";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from "swiper/modules";
import "swiper/css";
import {AnimatePresence, motion} from "framer-motion";

const Slide4 = () => {
    const texts = [
        "новости", "ведущие", "избранное", "истории"
    ];
    const [playerState, setPlayerState] = useState(0);
    return (
        <div className={"w-full h-full relative bg-black overflow-hidden"}>
            <Swiper wrapperTag={"div"}
                    wrapperClass={"h-full w-full"}
                    className={"w-full h-full"}
                    onSlideChange={(swiper) => setPlayerState(swiper.activeIndex)}
                    direction={"vertical"}
                    modules={[Mousewheel]}
                    mousewheel={true}
                    nested
            >
                <SwiperSlide/>
                <SwiperSlide/>
                <SwiperSlide/>
                <SwiperSlide/>
            </Swiper>
            <div className={"z-[2] w-full h-full pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col md:gap-10 md:flex-row flex items-center justify-center"}>
                <Phone
                    className={"h-[60vh] md:h-[70vh]"}
                    src={`images/player2_slide_${playerState}.png`}
                />
                <AnimatePresence mode={"wait"}>
                    <motion.h1 key={playerState + "_slide3_text"}
                                exit={{y: 100, opacity: 0}}
                                initial={{y: -100, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                className={"mt-5 text-center uppercase leading-tight font-bold text-4xl md:m-0 md:w-64"}
                    >
                        {texts[playerState]}
                    </motion.h1>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Slide4;