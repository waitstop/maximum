import {AnimatePresence, motion} from "framer-motion";


type Props = {
    src: string[],
    index: number,
    className?: string
}

const Phone = (props: Props) => {
    return (
        <div className={props.className}>
            <div className={`w-full h-full overflow-hidden`}>
                <AnimatePresence>
                    {props.src.map((src, i) => {
                        return (
                            <motion.img
                                className={"object-contain z-[1] w-full h-full"}
                                hidden={i !== props.index}
                                src={src}
                                alt={src+i}
                                key={src+i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    type: "smooth",
                                    duration: .5
                                }}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Phone;