const Slide7 = () => {
    return (
        <div className={"w-full h-full flex flex-col items-center justify-center bg-cover bg-top bg-no-repeat bg-[linear-gradient(to_top,rgba(0,0,0,1),rgba(255,255,255,0),rgba(0,0,0,1)),url('/images/bg02.png')]"}>
            <h1 className={"text-center px-12 md:px-0 uppercase font-bold text-4xl pb-5"}>
                Слушай, Загружай, <span className={"text-accent"}>Делись</span>
            </h1>
            <p className={"text-center uppercase py-5"}>Скачай приложение по ссылке</p>
            <img src="images/qr.png" className={"mx-auto w-3/5 md:w-48"} alt="qr"/>
            <div className={"flex flex-wrap justify-center gap-4 mt-5"}>
                <a href={"https://play.google.com"}>
                    <img className={"w-full"} src="images/google_play.svg" alt=""/>
                </a>
                <a href={"https://apple.com"}>
                    <img className={"w-full"} src="images/app_store.svg" alt=""/>
                </a>
                <a href={"https://rustore.ru/"}>
                    <img className={"w-full"} src="images/ru_store.svg" alt=""/>
                </a>
                <a href={"https://nashstore.ru/"}>
                    <img className={"w-full"} src="images/nash_store.svg" alt=""/>
                </a>
            </div>
            <p className={"text-white/50 text-center text-xs mt-5"}>
                Copyright <span className={"text-white"}>Radio Maximum LLC</span>. All rights reserved. | <a className={"text-white"} href="#">Политика безопасности</a> | <a className={"text-white"} href="#">Пользовательское соглашение</a>
            </p>
        </div>
    );
};

export default Slide7;