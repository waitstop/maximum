import {AnimatePresence, motion} from "framer-motion";


type Props = {
    src: string
    className?: string
}

const Phone = (props: Props) => {
    return (
        <div className={props.className}>
            <div className={`w-full h-full overflow-hidden`}>
                <AnimatePresence>
                    <motion.img
                        className={"object-contain z-[1] w-full h-full"}
                        src={props.src}
                        alt={props.src+"_slide3"}
                        key={props.src+"_slide3"}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
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