import { TypeAnimation } from "react-type-animation";
import MyResume from "/files/MukulAg_Resume.pdf";
import UseAnimations from "react-useanimations";
import email from "react-useanimations/lib/mail";
import linkedIn from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";
import githubIcon from "react-useanimations/lib/github";

export const Home = () => {
  const emailId= "agrawalmukul52@gmail.com";
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Mukul Agrawal
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer.",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder.",
                2000,
                "Tech Enthusiast.",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href={`mailto: ${emailId}`} title="Email Address">
              <UseAnimations size={30} animation={email} strokeColor="black" />
            </a>
            <a
              href={"https://www.linkedin.com/in/mukul-agrawal-712832153"}
              rel="noopener noreferrer"
              target="_blank"
              title="Linkedin"
            >
              <UseAnimations
                size={30}
                animation={linkedIn}
                strokeColor="black"
              />
            </a>
            <a
              href={`https://instagram.com/_oye_mukkuu_?igshid=NGExMmI2YTkyZg==`}
              rel="noopener noreferrer"
              target="_blank"
              title="Instagram"
            >
              <UseAnimations
                size={30}
                animation={instagram}
                strokeColor="black"
              />
            </a>
            <a
              data-testid="github"
              href={"https://github.com/Muks1999/"}
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <UseAnimations
                size={30}
                animation={githubIcon}
                strokeColor="black"
              />
            </a>
          </div>
          <div className="sm:text-xl text-xl mt-10 bg-gray-800 px-4 py-2 rounded-xl	 font-bold text-gray-400">
            <button>
              <a href={MyResume} target="blank">
                {" "}
                Download CV{" "}
              </a>

              {/* Download Resume{" "} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
