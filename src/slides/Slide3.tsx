import Phone from "@/components/Phone";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from "swiper/modules";
import "swiper/css";
import {AnimatePresence, motion} from "framer-motion";

const Slide3 = () => {
    const texts = [
        ["маxiмально", "удобный плеер"],
        ["маxiмальные", "легенды"],
        ["маxiмально", "интересные подкасты"],
        ["маxiмально", "много музыки"]
    ];
    const [playerState, setPlayerState] = useState(0);
    return (
        <div className={"w-full h-full relative bg-black"}>
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
            <div className={"z-[2] w-2/3 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:flex items-center justify-around"}>
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
                    className={"w-full h-auto mx-auto md:mx-0 md:w-2/5"}
                    src={`/images/player_slide_${playerState}.png`}
                />
            </div>
        </div>
    );
};

export default Slide3;