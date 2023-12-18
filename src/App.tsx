import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slide1 from "@/slides/Slide1.tsx";
import Slide2 from "@/slides/Slide2.tsx";
import Slide3 from "@/slides/Slide3.tsx";
import Slide4 from "@/slides/Slide4.tsx";
import Slide5 from "@/slides/Slide5.tsx";
import Slide6 from "@/slides/Slide6.tsx";
import Slide7 from "@/slides/Slide7.tsx";


const App = () => (
    <main className={"w-screen h-screen"}>
        <Swiper className={"w-full h-full"}
                direction={"vertical"}
                slidesPerView={1}
                speed={750}
                modules={[Mousewheel, Pagination]}
                pagination={{clickable: true}}
                mousewheel={true}>
            <SwiperSlide>
                <Slide1/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide2/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide3/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide4/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide5/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide6/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide7/>
            </SwiperSlide>
        </Swiper>
    </main>
);

export default App;
