import ImageSlider from "./components/ImageSlider";
import MainMenu from "./components/MainMenu";
import NavBar from "./components/Navbar";
import Navigation from "./components/Navigation";
import OpenBets from "./components/OpenBets";
import SlideBar from "./components/Sidebar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Navigation />
      <div className="app">
        <SlideBar />
        <div className="bg-[#EDEDED] h-full">
          <ImageSlider />
          <MainMenu />
        </div>

        <OpenBets />
      </div>
    </main>
  )
}
