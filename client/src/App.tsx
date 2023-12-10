import { Button } from "@/components/ui/button"
import { FaNapster } from "react-icons/fa";
import { FaMugHot } from "react-icons/fa";
import { GoRocket } from "react-icons/go";

function App() {
  return (
    <div className="bg-primary text-primary-foreground min-h-screen px-10 sm:px-20 md:px-40 pb-20">
      <nav className="flex justify-between items-center py-6">
        <div className="text-4xl font-bold text-[#bd1e59]">abd</div>
        <div className="space-x-6 text-lg">
          <a className="hover:underline" href="#">
            Home
          </a>
          <a className="hover:underline" href="#">
            About
          </a>
          <a className="hover:underline" href="#">
            Work
          </a>
        </div>
      </nav>
      <div className="grid grid-cols-1 gap-10">
        <div className="space-y-6">
          <div className="flex space-x-6 justify-center">
            <FaNapster className="text-[#bd1e59] text-4xl" />
            <FaMugHot className="text-[#bd1e59] text-4xl" />
            <GoRocket className="text-[#bd1e59] text-4xl" />
          </div>
          <h1 className="text-5xl font-semibold text-center">
          Hobbyist Programmer, Fulltime Cavemen.
          </h1>
          <p className="text-lg text-center">Your usual CS student.</p>
          {/* <div className="flex justify-center">
            <Button className="bg-[#bd1e59] text-white py-2 px-4">
              Discover my work
            </Button>
          </div> */}
          {/* <div className="flex items-center justify-center space-x-2">
            alilo.ghazali
            <span>@gmail.com</span>
          </div> */}
        </div>
        <div className="space-y-6">
          <img
            alt="abd photo"
            className="rounded-lg mx-auto"
            height="400"
            src="./src/assets/photo.jpg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
          <p className="text-center">
            Hey there, I’m abd! I’m a software engineer based in Indonesia. I’ve taken programming seriously since the covid era. Recently,
            however, I’ve built some projects that I’m proud of.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
