const Slide1 = () => {
    return (
        <div className={"px-4 justify-around gap-y-32 items-center w-full h-full flex flex-col md:gap-32 md:flex-row bg-cover bg-top bg-no-repeat bg-[linear-gradient(to_top,rgba(0,0,0,1),rgba(255,255,255,0),rgba(0,0,0,1)),url('/images/bg01.png')]"}>
            <div className={"contents md:flex flex-col justify-center items-center"}>
                <img src="images/logo.svg" alt="Logo" className={"w-1/2 md:w-2/3"}/>
                <h2 className={"hidden md:block text-accent uppercase font-bold text-3xl text-center"}>Если радио - то maximum</h2>
            </div>
            <div className={"grid-cols-2 grid gap-4"}>
                <img className={"hidden md:block col-span-2 mx-auto w-52"} src="images/qr.png" alt="qr"/>
                <a href={"https://play.google.com/store/apps/details?id=ru.rmg.maximum"}>
                    <img src="images/google_play.svg" alt=""/>
                </a>
                <a href={"https://apps.apple.com/us/app/%D1%80%D0%B0%D0%B4%D0%B8%D0%BE-maximum-online/id6463782699"}>
                    <img src="images/app_store.svg" alt=""/>
                </a>
                <a className={"text-sm uppercase w-full col-span-2 text-center font-roboto-condensed"}>скачай приложение по ссылке</a>
            </div>
        </div>
    );
};

export default Slide1;