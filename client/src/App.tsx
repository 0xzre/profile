import { FaNapster } from "react-icons/fa";
import { FaMugHot } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { DiReact } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiVim } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiLinux } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { DiAws } from "react-icons/di";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { DiDocker } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiGo } from "react-icons/di";
import { DiRust } from "react-icons/di";

function App() {
  return (
    <div className="bg-primary text-primary-foreground min-h-screen px-10 sm:px-20 md:px-40 pb-[200px]">
      <nav className="flex justify-between items-center py-6 fixed w-[80%] bg-primary">
        <div className="text-4xl font-bold text-[#bd1e59]">abd</div>
        <div className="space-x-3 text-lg">
          <a
            className="p-3 rounded-md transition duration-300 hover:bg-slate-700"
            href="#/"
          >
            /
          </a>
          <a
            className="p-3 rounded-md transition duration-300 hover:bg-slate-700"
            href="#tech"
          >
            Tech
          </a>
          <a
            className="p-3 rounded-md transition duration-300 hover:bg-slate-700"
            href="#project"
          >
            Projects
          </a>
          <a
            className="p-3 rounded-md transition duration-300 hover:bg-slate-700"
            href="https://github.com/0xzre"
            target="_blank"
          >
            Contact Me
          </a>
        </div>
      </nav>
      <div id="/" className="grid grid-cols-1 gap-10 pt-28">
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
          <p className="text-center text-lg">
            Hey there, I’m abd! I’m a software engineer based in Indonesia. I’ve
            taken programming seriously since the covid era. Recently, however,
            I’ve built some projects that I’m proud of. My interests are ranging from web3, blockchain, and distributed systems.
          </p>
        </div>
        <div id="tech" className="space-y-8 flex flex-col">
          <h1 className="text-4xl font-semibold text-center mt-28">Tech Stacks</h1>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-10">
              <div className="flex flex-col items-center space-y-4">
                <div className="text-2xl font-semibold">Frontend</div>
                <div className="flex space-x-4">
                  <div>
                    <DiReact size="5rem" />
                  </div>
                  <div>
                    <DiAngularSimple size="5rem" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-2xl font-semibold">Backend</div>
                <div className="flex space-x-4">
                  <div>
                    <DiNodejs size="5rem" />
                  </div>
                  <div>
                    <DiJava size="5rem" />
                  </div>
                  <div>
                    <DiGo size="5rem" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-2xl font-semibold">Tools</div>
                <div className="flex space-x-4">
                  <div>
                    <DiVisualstudio size="5rem" />
                  </div>
                  <div>
                    <DiVim size="5rem" />
                  </div>
                  <div>
                    <DiLinux size="5rem" />
                  </div>
                  <div>
                    <DiDocker size="5rem" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-2xl font-semibold">Cloud</div>
                <div className="flex space-x-4">
                  <div>
                    <DiAws size="5rem" />
                  </div>
                  <div>
                    <DiGoogleCloudPlatform size="5rem" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-2xl font-semibold">Database</div>
                <div className="flex space-x-4">
                  <div>
                    <DiMongodb size="5rem" />
                  </div>
                  <div>
                    <DiPostgresql size="5rem" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-2xl font-semibold">Blockchain</div>
                <div className="flex space-x-4">
                  <div>
                    <DiRust size="5rem" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="./src/assets/solidity.png"
                      className="w-[3rem] bg-gray-400 p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="project" className="space-y-8 flex flex-col">
          <h1 className="text-4xl font-semibold text-center mt-28">Projects</h1>
          <div>
            <div className="flex md:flex-row flex-col gap-20 mt-10 ">
              <div className="flex flex-col items-center space-y-4">
                <div className="text-2xl font-semibold">Vund</div>
                <div className="flex space-x-4">
                  <div className="flex justify-center items-center">
                    <a href="https://vund-demo.vercel.app/" target="_blank">
                      <img
                        src="./src/assets/vund.png"
                        className="w-[900px] bg-gray-400 p-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-2xl font-semibold">Baung</div>
                <div className="flex space-x-4">
                  <div className="flex justify-center items-center">
                    <a href="https://baung.vercel.app/" target="_blank">
                      <img
                        src="./src/assets/baung.png"
                        className="w-[900px] bg-gray-400 p-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
