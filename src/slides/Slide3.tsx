import Phone from "@/components/Phone";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from "swiper/modules";
import "swiper/css";
import {AnimatePresence, motion} from "framer-motion";

const Slide3 = () => {
    const texts = [
        ["маxiмально", "много музыки"],
        ["маxiмально", "интересные подкасты"],
        ["маxiмальные", "легенды"],
        ["маxiмально", "удобный плеер"]
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
                <AnimatePresence mode={"wait"}>
                    <motion.div key={playerState + "_slide3_text w-full"}
                                exit={{y: -100, opacity: 0}}
                                initial={{y: 100, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                className={"text-center uppercase leading-tight"}
                    >
                        <h1 className={"text-accent font-bold text-4xl md:block md:w-64 md:m-0"}>{texts[playerState][0]}</h1>
                        <h2 className={"text-xl font-bold mb-4 md:block md:w-64 md:m-0"}>{texts[playerState][1]}</h2>
                    </motion.div>
                </AnimatePresence>

                <Phone
                    className={"h-[60vh] md:h-[70vh]"}
                    src={`images/player_slide_${playerState}.png`}
                />
            </div>
        </div>
    );
};

export default Slide3;