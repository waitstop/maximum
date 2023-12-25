const Slide7 = () => {
    return (
        <div className={"w-full h-full flex flex-col items-center justify-center bg-cover bg-top bg-no-repeat bg-[linear-gradient(to_top,rgba(0,0,0,1),rgba(255,255,255,0),rgba(0,0,0,1)),url('/images/bg02.png')]"}>
            <h1 className={"text-center px-12 md:px-0 uppercase font-bold text-4xl pb-5"}>
                Слушай, Загружай, <span className={"text-accent"}>Делись</span>
            </h1>
            <p className={"text-center uppercase py-5"}>Скачай приложение по ссылке</p>
            <img src="images/qr.png" className={"mx-auto w-3/5 md:w-48"} alt="qr"/>
            <div className={"flex flex-wrap justify-center gap-4 mt-5"}>
                <a href={"https://play.google.com/store/apps/details?id=ru.rmg.maximum"}>
                    <img className={"w-full"} src="images/google_play.svg" alt=""/>
                </a>
                <a href={"https://apps.apple.com/us/app/%D1%80%D0%B0%D0%B4%D0%B8%D0%BE-maximum-online/id6463782699"}>
                    <img className={"w-full"} src="images/app_store.svg" alt=""/>
                </a>
            </div>
            <p className={"text-white/50 text-center text-xs mt-5"}>
                Copyright <span className={"text-white"}>Radio Maximum LLC</span>. All rights reserved. | <a className={"text-white"} href="https://maximum.ru/static/%D0%9F%D0%9E%D0%9B%D0%98%D0%A2%D0%98%D0%9A%D0%90_%D0%91%D0%95%D0%97%D0%9E%D0%9F%D0%90%D0%A1%D0%9D%D0%9E%D0%A1%D0%A2%D0%98.pdf">Политика безопасности</a> | <a className={"text-white"} href="https://maximum.ru/page/license-agreement">Пользовательское соглашение</a>
            </p>
        </div>
    );
};

export default Slide7;