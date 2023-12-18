import {AnimatePresence, motion} from "framer-motion";


type Props = {
    src: string
    className?: string
}

const Phone = (props: Props) => {
    return (
        <div className={props.className}>
            <div className={`relative w-fit h-fit overflow-hidden rounded-3xl`}>
                <img className={"z-[2] relative"} src="/images/player.png" alt="player"/>
                <AnimatePresence>
                    <motion.img
                        className={"z-[1] absolute top-[2.5%] left-1/2 -translate-x-1/2 h-[95%] w-auto"}
                        src={props.src}
                        alt={props.src+"_slide3"}
                        key={props.src+"_slide3"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            type: "smooth",
                            duration: .5
                        }}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Phone;