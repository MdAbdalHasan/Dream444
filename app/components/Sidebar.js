
const SlideBar = () => {
    return (
        <div className=" h-full bg-white text-black  cursor-pointer space-y-3">
            <div className="flex  bg-black items-center justify-between">

                <img className="h-5" src="ThreeDot.png" />
                <div className="text-[#FFC019]">sports</div>
            </div>
            <div className="flex items-center justify-between hover:bg-[#E6EFD1] ">
                <div>Circket</div>
                <img className="h-7 hover:bg-[#83AE17]" src="GreaterThan.png" />
            </div>
            <div className="flex items-center justify-between hover:bg-[#E6EFD1]">
                <div>Tennis</div>
                <img className="h-7 hover:bg-[#83AE17]" src="GreaterThan.png" />
            </div>
            <div className="flex items-center justify-between hover:bg-[#E6EFD1]">
                <div>Casino</div>
                <img className="h-7 hover:bg-[#83AE17]" src="GreaterThan.png" />
            </div>
            <div className="flex items-center justify-between hover:bg-[#E6EFD1]">
                <div>Soccer</div>
                <img className="h-7 hover:bg-[#83AE17]" src="GreaterThan.png" />
            </div>
            <div className="flex items-center justify-between hover:bg-[#E6EFD1]">
                <div>Horse Racing</div>
                <img className="h-7 hover:bg-[#83AE17]" src="GreaterThan.png" />
            </div>
            <div className="flex items-center justify-between hover:bg-[#E6EFD1]">
                <div>Basket Ball</div>
                <img className="h-7 hover:bg-[#83AE17]" src="GreaterThan.png" />
            </div>
            <div className="flex items-center justify-between hover:bg-[#E6EFD1]">
                <div>Virtual sports</div>
                <img className="h-7 hover:bg-[#83AE17]" src="GreaterThan.png" />
            </div>
        </div>
    );
};

export default SlideBar;
