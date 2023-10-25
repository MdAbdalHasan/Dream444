'use client'
import DummyData from "./DummyData"
import Footer from "./Footer"

const MainMenu = () => {
    return (
        <div className="  ">
            <div className="bg-[#FFC829]">Highlights</div>
            <div className="bg-[#FFC829] ">
                <button className="bg-[#222F36] text-white pr-5 pl-5 rounded-md">Cricket</button>
                <button className="bg-[#222F36] text-white pr-5 pl-5 rounded-md" >Soccer</button>
                <button className="bg-[#222F36] text-white pr-5 pl-5 rounded-md" >Tennis</button>
            </div>
            <DummyData />
            <DummyData />
            <DummyData />
            <DummyData />
            <DummyData />
            <DummyData />
            <DummyData />
            <DummyData />
            <DummyData />
            <DummyData />
            <Footer />
        </div>
    )
}

export default MainMenu