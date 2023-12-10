import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="bg-[#f3f3f3] text-[#333] min-h-screen px-10 sm:px-20 md:px-40">
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
          <div className="flex space-x-2 justify-center">
            Logo
          </div>
          <h1 className="text-5xl font-semibold text-center">
            Programmer
          </h1>
          <p className="text-lg text-center">Your usual CS student.</p>
          <div className="flex justify-center">
            <Button className="bg-[#bd1e59] text-white py-2 px-4">
              Discover my work
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-2">
            alilo.ghazali
            <span>@gmail.com</span>
          </div>
        </div>
        <div className="space-y-6">
          <img
            alt="Illustration of a person"
            className="rounded-lg mx-auto"
            height="400"
            src="/placeholder.svg"
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
