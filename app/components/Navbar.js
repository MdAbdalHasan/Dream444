import Image from "next/image";

const NavBar = () => {
    return (
        <div className="bg-black p-4 flex justify-between ">
            <div className="flex items-center ">
                <a href="#" className="text-white font-bold text-lg">
                    <img src="dream444.png" className="h-10" />
                </a>
                <div className="ml-4 relative flex bg-gray-800 border border-gray-700 rounded px-3 py-2">
                    <Image className="" src="./icons8-search.svg" alt="error" width={25} height={10} />
                    <input
                        type="text"
                        className="bg-gray-800 border-gray-700   px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Search event"
                    />

                </div>
            </div>
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="User Name"
                />

                <input
                    type="password"
                    className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Password"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                    Login
                </button>
            </div>
        </div>
    );
};

export default NavBar;
