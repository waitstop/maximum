const Slide2 = () => {
    const phoneStyle = "min-w-0 h-auto max-w-none w-32 md:w-40 lg:w-64"
    return (
        <div className={"overflow-hidden h-full w-full bg-no-repeat flex justify-center items-center bg-cover bg-top bg-[linear-gradient(0deg,rgba(0,0,0,1),rgba(255,255,255,0),rgba(0,0,0,1)),url('/images/bg02.png')]"}>
            <div className={"flex justify-center gap-4 md:gap-10"}>
                <div className={"flex flex-col gap-2 md:gap-10 items-center"}>
                    <img className={phoneStyle} src="/images/phone01.png" alt="phone1"/>
                    <img className={phoneStyle} src="/images/phone03.png" alt="phone3"/>
                </div>
                <div className={"flex flex-col gap-2 md:gap-10 items-center"}>
                    <h1 className={"text-center uppercase font-bold text-3xl"}><span className={"text-accent"}>Маxiмально</span><br/>удобно!</h1>
                    <img className={phoneStyle} src="/images/phone02.png" alt="phone2"/>
                    <img className={phoneStyle} src="/images/phone06.png" alt="phone6"/>
                </div>
                <div className={"flex flex-col gap-2 md:gap-10 items-center"}>
                    <img className={phoneStyle} src="/images/phone04.png" alt="phone4"/>
                    <img className={phoneStyle} src="/images/phone05.png" alt="phone5"/>
                </div>
            </div>
        </div>
    );
};

export default Slide2;