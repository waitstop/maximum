const Slide1 = () => {
    return (
        <div className={"px-4 justify-center gap-y-32 items-center w-full h-full flex flex-col md:gap-32 md:flex-row bg-cover bg-top bg-no-repeat bg-[linear-gradient(to_top,rgba(0,0,0,1),rgba(255,255,255,0),rgba(0,0,0,1)),url('/images/bg01.png')]"}>
            <div className={"contents md:flex flex-col justify-center items-center"}>
                <img src="images/logo.svg" alt="Logo" className={"w-1/2 md:w-2/3"}/>
                <h2 className={"hidden md:block text-accent uppercase font-bold text-3xl text-center"}>Если радио - то maximum</h2>
            </div>
            <div className={"grid-cols-2 grid gap-4"}>
                <img className={"hidden md:block col-span-2 mx-auto w-3/5"} src="images/qr.png" alt="qr"/>
                <a href={"https://play.google.com"}>
                    <img src="images/google_play.svg" alt=""/>
                </a>
                <a href={"https://apple.com"}>
                    <img src="images/app_store.svg" alt=""/>
                </a>
                <a href={"https://rustore.ru/"}>
                    <img src="images/ru_store.svg" alt=""/>
                </a>
                <a href={"https://nashstore.ru/"}>
                    <img src="images/nash_store.svg" alt=""/>
                </a>
                <a className={"text-sm uppercase w-full col-span-2 text-center font-roboto-condensed"}>скачай приложение по ссылке</a>
            </div>
        </div>
    );
};

export default Slide1;