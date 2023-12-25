const Slide2 = () => {
    const phoneStyle = "min-w-0 w-auto max-w-none h-[55vh]";
    return (
        <div className={"overflow-hidden py-10 h-full w-full bg-no-repeat flex justify-center items-baseline bg-cover bg-top bg-[linear-gradient(0deg,rgba(0,0,0,1),rgba(255,255,255,0),rgba(0,0,0,1)),url('/images/bg02.png')]"}>
            <div className={"flex justify-center gap-4 md:gap-10"}>
                <div className={"flex flex-col gap-2 md:gap-5 items-center"}>
                    <img className={phoneStyle} src="images/phone02.png" alt="phone1"/>
                    <img className={phoneStyle} src="images/phone03.png" alt="phone3"/>
                </div>
                <div className={"flex flex-col gap-2 md:gap-5 items-center"}>
                    <h1 className={"text-center uppercase font-bold text-4xl"}><span className={"text-accent"}>Маxiмально</span><br/>удобно!</h1>
                    <img className={phoneStyle} src="images/phone01.png" alt="phone2"/>
                    <img className={phoneStyle} src="images/phone06.png" alt="phone6"/>
                </div>
                <div className={"flex flex-col gap-2 md:gap-5 items-center"}>
                    <img className={phoneStyle} src="images/phone04.png" alt="phone4"/>
                    <img className={phoneStyle} src="images/phone05.png" alt="phone5"/>
                </div>
            </div>
        </div>
    );
};

export default Slide2;